"""Převod Anki balíčku (.apkg, formát anki21b) na kartičky EK-Wiki (JSON) + markdown poznámku.

Použití:
    python tools/anki_to_cards.py <balicek.apkg> <subject> <out_dir_magistr> <out_json> [--title "..."]
např.:
    python tools/anki_to_cards.py EPL_48prvnich.apkg EPL magistr/EPL json/magistr-epl.json
"""
import argparse, html, io, json, os, re, sqlite3, tempfile, zipfile

import zstandard

ZD = zstandard.ZstdDecompressor()


def unz(data):
    """Rozbalí zstd data, pokud jsou zstd (magic 28 b5 2f fd), jinak je vrátí beze změny.

    :param data: bytes  surová data souboru z .apkg
    :returns: bytes     rozbalená data
    """
    if data[:4] == b'\x28\xb5\x2f\xfd':
        return ZD.stream_reader(io.BytesIO(data)).read()
    return data


def read_varint(b, i):
    """Načte protobuf varint.

    :param b: bytes  buffer
    :param i: int    počáteční index
    :returns: (int, int)  hodnota a index za varintem
    """
    v = s = 0
    while True:
        x = b[i]; i += 1
        v |= (x & 0x7f) << s; s += 7
        if not x & 0x80:
            return v, i


def parse_media_map(b):
    """Parsuje protobuf MediaEntries z souboru 'media' (pořadí položek = číslo souboru v zipu).

    :param b: bytes  rozbalený obsah souboru 'media'
    :returns: dict   {'0': 'paste-....jpg', ...}
    """
    out, i, n = {}, 0, 0
    while i < len(b):
        key, i = read_varint(b, i)
        ln, i = read_varint(b, i)
        entry = b[i:i + ln]; i += ln
        if key >> 3 != 1:
            continue
        j = 0
        while j < len(entry):
            k, j = read_varint(entry, j)
            wt = k & 7
            if wt == 2:
                l2, j = read_varint(entry, j)
                if k >> 3 == 1:
                    out[str(n)] = entry[j:j + l2].decode('utf-8')
                j += l2
            elif wt == 0:
                _, j = read_varint(entry, j)
        n += 1
    return out


def html_to_md(s):
    """Převede jednoduché Anki HTML na markdown text (zachová tučné, podtržení → tučné, řádky).

    :param s: str  HTML pole poznámky (bez <img>)
    :returns: str  markdown text
    """
    s = re.sub(r'(?i)<br\s*/?>', '\n', s)
    s = re.sub(r'(?i)</?(div|p)[^>]*>', '\n', s)
    s = re.sub(r'(?i)</?(strong|b|u)(\s[^>]*)?>', '**', s)
    s = re.sub(r'(?i)</?(i|em)(\s[^>]*)?>', '*', s)
    s = re.sub(r'<[^>]+>', '', s)
    s = html.unescape(s).replace('\xa0', ' ')
    s = re.sub(r'\*\*\s*\*\*', '', s)
    s = re.sub(r'[ \t]+\n', '\n', s)
    s = re.sub(r'\n{3,}', '\n\n', s)
    return s.strip()


def split_parts(field, img_prefix):
    """Rozdělí pole odpovědi na části [text + obrázek] podle <img> tagů.

    :param field: str       HTML pole odpovědi
    :param img_prefix: str  cesta k obrázkům relativně ke kořeni webu
    :returns: list[dict]    answer_parts ve formátu EK-Wiki
    """
    parts, pos = [], 0
    for m in re.finditer(r'<img[^>]*src="([^"]+)"[^>]*>', field):
        parts.append({'title': '', 'text': html_to_md(field[pos:m.start()]),
                      'image': {'src': img_prefix + m.group(1)}})
        pos = m.end()
    tail = html_to_md(field[pos:])
    if tail or not parts:
        parts.append({'title': '', 'text': tail})
    return parts


def main():
    """Vstupní bod: rozbalí .apkg, uloží obrázky, JSON s kartičkami a markdown se všemi otázkami.

    :returns: None (zapisuje soubory na disk)
    """
    ap = argparse.ArgumentParser()
    ap.add_argument('apkg'); ap.add_argument('subject'); ap.add_argument('out_dir'); ap.add_argument('out_json')
    ap.add_argument('--title', default=None)
    a = ap.parse_args()
    z = zipfile.ZipFile(a.apkg)
    names = z.namelist()
    media = parse_media_map(unz(z.read('media')))
    img_dir = os.path.join(a.out_dir, 'img'); os.makedirs(img_dir, exist_ok=True)
    for num, fn in media.items():
        if num in names:
            open(os.path.join(img_dir, fn), 'wb').write(unz(z.read(num)))
    coll = 'collection.anki21b' if 'collection.anki21b' in names else 'collection.anki21'
    tmp = tempfile.NamedTemporaryFile(delete=False, suffix='.db'); tmp.write(unz(z.read(coll))); tmp.close()
    db = sqlite3.connect(tmp.name)
    rows = db.execute('select n.flds from notes n join cards c on c.nid=n.id group by n.id order by min(c.due), n.id').fetchall()
    db.close(); os.unlink(tmp.name)
    img_prefix = a.out_dir.replace(os.sep, '/').rstrip('/') + '/img/'
    qs, md = [], [f"# {a.title or a.subject} – otázky (převzato z Anki)\n"]
    for (flds,) in rows:
        f = flds.split('\x1f')
        q = html_to_md(re.sub(r'<img[^>]*>', '', f[0]))
        parts = split_parts(f[1] if len(f) > 1 else '', img_prefix)
        body = re.sub(r'(?i)^ot[aá]zk[ay]\s*[\d.\s]*(až\s*[\d.]+)?\s*:?\s*', '', q).strip()
        if not body and parts and parts[0]['text']:   # otázka zapsaná až v odpovědi
            first, _, rest = parts[0]['text'].partition(':')
            q = (q.rstrip(': ') + ': ' + first.strip())
            parts[0]['text'] = rest.strip()
        qs.append({'type': 'open', 'question': q, 'subsetPath': [a.subject], 'answer_parts': parts})
        md.append(f"\n## {q.splitlines()[0]}\n")
        if '\n' in q:
            md.append('\n'.join(q.splitlines()[1:]) + '\n')
        for p in parts:
            if p['text']:
                md.append('\n' + p['text'] + '\n')
            if 'image' in p:
                md.append(f"\n![](img/{p['image']['src'].rsplit('/', 1)[1]})\n")
    os.makedirs(os.path.dirname(a.out_json) or '.', exist_ok=True)
    json.dump({'title': a.title or a.subject, 'questions': qs}, open(a.out_json, 'w', encoding='utf-8'),
              ensure_ascii=False, indent=1)
    open(os.path.join(a.out_dir, 'otazky.md'), 'w', encoding='utf-8').write(''.join(md))
    print(f'{len(qs)} kartiček, {len(media)} obrázků')


if __name__ == '__main__':
    main()
