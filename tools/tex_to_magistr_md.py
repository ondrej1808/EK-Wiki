"""Převod LaTeX poznámek (styl IASA_sem_test.tex) na markdown kapitoly pro EK Magistr wiki.

Použití:
    python tools/tex_to_magistr_md.py <soubor.tex> <cílová_složka> <url_prefix>

Každá \\section se uloží jako samostatný soubor NN-nazev.md do cílové složky.
url_prefix je cesta ke složce předmětu relativně k wiki.html (např. magistr/B2M31IASA),
použije se pro obrázky (img/...) a odkazy na zdrojová PDF (pdf/...).
"""
import re
import sys
import unicodedata
from pathlib import Path

TEX_DIR = None  # složka se zdrojovým .tex (kvůli hledání GIF vedle PNG), nastaví main()


def read_group(s, i):
    """Načte vyvážený {…} blok začínající na indexu i.

    Parametry:
        s -- vstupní text
        i -- index znaku '{'
    Vrací: (obsah bez závorek, index za uzavírací závorkou).
    """
    assert s[i] == '{', s[i:i + 30]
    depth, j = 0, i
    while j < len(s):
        c = s[j]
        if c == '\\':
            j += 2
            continue
        if c == '{':
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0:
                return s[i + 1:j], j + 1
        j += 1
    raise ValueError('neuzavřená závorka')


def replace_cmd(s, name, fn, nargs=1):
    """Nahradí všechny výskyty \\name{a1}…{an} výsledkem fn(a1, …, an).

    Parametry:
        s     -- text
        name  -- jméno příkazu bez lomítka
        fn    -- funkce přijímající nargs řetězců, vrací náhradu
        nargs -- počet povinných argumentů
    Vrací: upravený text.
    """
    pat = re.compile(r'\\' + name + r'(?![A-Za-z])\s*(\[[^\]]*\])?\s*(?=\{)')
    out, pos = [], 0
    while True:
        m = pat.search(s, pos)
        if not m:
            out.append(s[pos:])
            return ''.join(out)
        out.append(s[pos:m.start()])
        j, args = m.end(), []
        for _ in range(nargs):
            while s[j].isspace():
                j += 1
            a, j = read_group(s, j)
            args.append(a)
        out.append(fn(*args))
        pos = j


def inline(s, pre):
    """Převede inline LaTeX formátování (mimo matematiku) na markdown/HTML.

    Parametry:
        s   -- text jednoho odstavce / nadpisu
        pre -- url prefix složky předmětu
    Vrací: markdown řetězec.
    """
    # matematiku dočasně schovat, ať ji neupravují textové náhrady
    maths = []

    def keep(m):
        maths.append(m.group(0))
        return f'\x00{len(maths) - 1}\x00'
    s = re.sub(r'\$\$.*?\$\$|\\\[.*?\\\]|\$[^$]+\$', keep, s, flags=re.S)

    s = re.sub(r'\\priorita\s*', '⭐ ', s)
    s = replace_cmd(s, 'href', lambda u, t: f'[{t}]({u.replace(chr(92) + "%", "%")})', 2)
    s = replace_cmd(s, 'podtr', lambda a: f'<u>{a}</u>')
    s = replace_cmd(s, 'skrt', lambda a: f'<del>{a}</del>')
    s = replace_cmd(s, 'textbf', lambda a: f'**{a}**')
    s = replace_cmd(s, 'emph', lambda a: f'*{a}*')
    s = replace_cmd(s, 'textit', lambda a: f'*{a}*')
    s = replace_cmd(s, 'texttt', lambda a: f'`{a}`')
    s = replace_cmd(s, 'uv', lambda a: f'„{a}“')
    # ve wiki nejsou čísla obrázků: „obrázek \ref{fig:…}“ → „obrázek níže“, jiné odkazy pryč
    s = replace_cmd(s, 'ref', lambda a: 'níže' if a.startswith('fig:') else '')
    s = replace_cmd(s, 'label', lambda a: '')
    s = s.replace(r'\dots', '…').replace('~', ' ').replace(r'\,', ' ').replace('{,}', ',')
    s = s.replace(r'\ ', ' ').replace('---', '—').replace('--', '–')
    s = re.sub(r'\\(medskip|par|noindent|centering|newpage)\b', '', s)
    s = re.sub(r'\x00(\d+)\x00', lambda m: maths[int(m.group(1))], s)
    return s


def zdroj(pre, f, page, desc=None):
    """Vytvoří HTML odkaz na zdrojové PDF (otevře se v nové záložce).

    Parametry:
        pre  -- url prefix předmětu
        f    -- jméno PDF souboru
        page -- číslo strany nebo None
        desc -- text popisu stran
    Vrací: markdown řádek.
    """
    href = f'{pre}/pdf/{f}' + (f'#page={page}' if page else '')
    text = f + (f', s. {inline(desc, pre)}' if desc else '')
    return f'\n<p class="zdroj"><small><em>Zdroj:</em> <a href="{href}" target="_blank" rel="noopener">{text}</a></small></p>\n'


def convert_body(body, pre):
    """Převede tělo jedné sekce na markdown.

    Parametry:
        body -- LaTeX text sekce (bez \\section řádku)
        pre  -- url prefix předmětu
    Vrací: markdown text.
    """
    # obrázky
    def img_path(path):
        """Cesta k obrázku pro wiki; PDF neumí animaci, takže když vedle PNG leží GIF, použije GIF.

        Parametry:
            path -- cesta z \\includegraphics (relativně k .tex)
        Vrací: cestu relativní k wiki.html.
        """
        if path.endswith('.png') and TEX_DIR and (TEX_DIR / path[:-4]).with_suffix('.gif').exists():
            path = path[:-4] + '.gif'
        return f'{pre}/{path}'

    def caption_of(g):
        """Vrátí převedený text prvního \\caption{…} v řetězci (nebo '').

        Parametry:
            g -- LaTeX text (figure nebo subfigure)
        Vrací: markdown text popisku.
        """
        cap = re.search(r'\\caption\{', g)
        return inline(read_group(g, cap.end() - 1)[0], pre) if cap else ''

    def fig(m):
        """Převede prostředí figure (i s podobrázky subfigure) na markdown/HTML.

        Parametry:
            m -- shoda regexu s celým prostředím figure
        Vrací: markdown s obrázkem a popiskem; podobrázky vedle sebe (flex).
        """
        g = m.group(0)
        subs = re.findall(r'\\begin\{subfigure\}.*?\\end\{subfigure\}', g, flags=re.S)
        if subs:
            rest = re.sub(r'\\begin\{subfigure\}.*?\\end\{subfigure\}', '', g, flags=re.S)
            caption = caption_of(rest)
            cells = []
            for s in subs:
                im = re.search(r'\\includegraphics(?:\[[^\]]*\])?\{([^}]*)\}', s)
                if im:
                    c = caption_of(s)
                    wm = re.search(r'\{([0-9.]+)\\textwidth\}', s)   # šířka subfigure jako v PDF
                    basis = f'{float(wm.group(1)) * 100:.0f}%' if wm else 'auto'
                    cells.append(f'<figure style="flex:0 1 {basis};min-width:0;margin:0"><img src="{img_path(im.group(1))}" alt="" style="width:100%">'
                                 f'<figcaption style="text-align:center;font-size:.9em"><em>{c}</em></figcaption></figure>')
            return f'\n<div style="display:flex;gap:12px;align-items:flex-end;justify-content:space-between">{"".join(cells)}</div>\n\n*{caption}*\n'
        img = re.search(r'\\includegraphics(?:\[[^\]]*\])?\{([^}]*)\}', g)
        caption = caption_of(g)
        if not img:
            return ''
        return f'\n![{caption}]({img_path(img.group(1))})\n\n*{caption}*\n'
    # \odpoved{…} (rámeček s přímou odpovědí) → zvýrazněný citační blok na jednom řádku
    def odpoved(a):
        """Převede obsah \\odpoved{…} na citační blok; odrážky itemize → řádky „> - …“.

        Parametry:
            a -- LaTeX obsah rámečku
        Vrací: markdown citační blok obklopený prázdnými řádky.
        """
        a = re.sub(r'\\setlength\{\\[a-zA-Z]+\}\{[^}]*\}', '', a)
        head, *items = re.split(r'\\item\b', re.sub(r'\\(begin|end)\{itemize\}', '', a))
        out = '> **Odpověď:** ' + ' '.join(head.split())
        for it in items:
            out += '\n>\n> - ' + ' '.join(it.split())
        return '\n\n' + out + '\n\n'
    body = replace_cmd(body, 'odpoved', odpoved)
    # příkazy jen pro sazbu PDF (zalomení stran) — ve wiki nemají smysl
    body = re.sub(r'\\(needspace|vspace\*?|enlargethispage)\{[^}]*\}%?', '', body)
    body = re.sub(r'\\(newpage|clearpage|pagebreak)\b', '', body)
    body = re.sub(r'\\begin\{figure\}.*?\\end\{figure\}', fig, body, flags=re.S)
    # tabulky (tabular + booktabs) → markdown tabulka
    def table(m):
        """Převede obsah prostředí tabular na markdown tabulku.

        Parametry:
            m -- shoda regexu, group(1) = tělo tabulky
        Vrací: markdown tabulku obalenou prázdnými řádky.
        """
        rows = [r.strip() for r in re.split(r'\\\\', m.group(1))]
        rows = [re.sub(r'\\(toprule|midrule|bottomrule|hline)', '', r).strip() for r in rows]
        rows = [[inline(c.strip(), pre) for c in r.split('&')] for r in rows if r]
        if not rows:
            return ''
        out = ['| ' + ' | '.join(rows[0]) + ' |', '|' + '---|' * len(rows[0])]
        out += ['| ' + ' | '.join(r) + ' |' for r in rows[1:]]
        return '\n' + '\n'.join(out) + '\n'
    # specifikace sloupců může mít vnořené závorky (>{\raggedright}p{…}) → přeskočit ji počítáním závorek
    out_t, pos = [], 0
    while True:
        k = body.find(r'\begin{tabular}', pos)
        if k < 0:
            out_t.append(body[pos:])
            break
        out_t.append(body[pos:k])
        _, j = read_group(body, k + len(r'\begin{tabular}'))
        e = body.find(r'\end{tabular}', j)
        out_t.append(table(re.match(r'(.*)', body[j:e], flags=re.S)))
        pos = e + len(r'\end{tabular}')
    body = ''.join(out_t)
    body = re.sub(r'\\(begin|end)\{center\}', '', body)
    body = re.sub(r'\\renewcommand\{\\arraystretch\}\{[^}]*\}', '', body)
    body = re.sub(r'\\setlength\{\\[a-zA-Z]+\}\{[^}]*\}', '', body)
    body = re.sub(r'\\(small|footnotesize|scriptsize|normalsize)\b', '', body)
    # TikZ/circuitikz kresby v markdownu nevykreslíme
    body = re.sub(r'\\begin\{(tikzpicture|circuitikz)\}.*?\\end\{\1\}', '', body, flags=re.S)
    # rovnice
    body = re.sub(r'\\begin\{equation\*?\}(.*?)\\end\{equation\*?\}',
                  lambda m: f'\n$$\n{m.group(1).strip()}\n$$\n', body, flags=re.S)
    body = re.sub(r'\\\[(.*?)\\\]', lambda m: f'\n$$\n{m.group(1).strip()}\n$$\n', body, flags=re.S)
    # zdroje
    body = replace_cmd(body, 'zdroj', lambda f, p, d: zdroj(pre, f, p, d), 3)
    body = replace_cmd(body, 'zdrojsoubor', lambda f: zdroj(pre, f, None), 1)

    out, depth, counters = [], 0, []
    para = []

    def flush():
        if para:
            out.append(inline(' '.join(para), pre))
            out.append('')
            para.clear()

    lines = body.split('\n')
    i = 0
    while i < len(lines):
        raw = lines[i]
        st = raw.strip()
        i += 1
        if st.startswith('$$') and st == '$$':
            flush()
            block = [st]
            while i < len(lines):
                block.append(lines[i].strip())
                i += 1
                if lines[i - 1].strip() == '$$':
                    break
            out.append('\n'.join(block))
            out.append('')
            continue
        m = re.match(r'\\(sub)?(sub)?section\*?\{', st)
        if m:
            flush()
            title, _ = read_group(st, m.end() - 1)
            level = '###' if m.group(2) else '##'
            out.append(f'{level} {inline(title, pre)}')
            out.append('')
            continue
        if re.match(r'\\begin\{(itemize|enumerate)\}', st):
            flush()
            counters.append('enumerate' in st)
            depth += 1
            continue
        if re.match(r'\\end\{(itemize|enumerate)\}', st):
            flush()
            counters.pop()
            depth -= 1
            if depth == 0:
                out.append('')
            continue
        if st.startswith(r'\item'):
            flush()
            text = st[len(r'\item'):].strip()
            # pokračování položky na dalších řádcích
            while i < len(lines):
                nx = lines[i].strip()
                if not nx or nx.startswith(('\\item', '\\begin{itemize', '\\begin{enumerate', '\\end{itemize', '\\end{enumerate')) or nx.startswith('$$'):
                    break
                text += ' ' + nx
                i += 1
            bullet = '1.' if counters[-1] else '-'
            out.append('    ' * (depth - 1) + f'{bullet} {inline(text, pre)}')
            continue
        if st.startswith('|') or st.startswith('>'):   # tabulka / citační blok — nespojovat do odstavce
            flush()
            out.append(inline(st, pre) if st.startswith('>') else st)
            mark = st[0]
            if i >= len(lines) or not lines[i].strip().startswith(mark):
                out.append('')
            continue
        if st.startswith('<p class="zdroj">') or st.startswith('<div'):
            flush()
            out.append(st)
            out.append('')
            continue
        if st.startswith('![') or (st.startswith('*') and st.endswith('*') and out and out[-1].startswith('![')):
            flush()
            out.append(st)
            if not st.startswith('!['):
                out.append('')  # za popiskem obrázku nový odstavec
            continue
        if not st:
            flush()
            continue
        para.append(st)
    flush()
    md = '\n'.join(out)
    return re.sub(r'\n{3,}', '\n\n', md).strip() + '\n'


def slug(s):
    """Vytvoří ASCII slug z nadpisu (pro jméno souboru).

    Parametry:
        s -- text nadpisu
    Vrací: řetězec a-z0-9 a pomlček.
    """
    s = re.sub(r'\\[a-z]+', '', s)
    s = unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode().lower()
    return re.sub(r'[^a-z0-9]+', '-', s).strip('-')[:40]


def main():
    """Rozdělí .tex na sekce a každou uloží jako markdown.

    Parametry: bere z sys.argv (tex, cílová složka, url prefix).
    Vrací: nic; vypíše seznam vytvořených souborů (číslo|nadpis|soubor).
    """
    global TEX_DIR
    tex, outdir, pre = sys.argv[1], Path(sys.argv[2]), sys.argv[3].rstrip('/')
    TEX_DIR = Path(tex).resolve().parent
    s = Path(tex).read_text(encoding='utf8')
    s = s[s.index(r'\begin{document}'):s.index(r'\end{document}')]
    s = re.sub(r'(?<!\\)%.*', '', s)
    parts = re.split(r'(?m)^\s*\\section\{', s)[1:]
    outdir.mkdir(parents=True, exist_ok=True)
    for n, part in enumerate(parts, 1):
        title, end = read_group('{' + part, 0)
        body = part[end - 1:]
        title_md = inline(title, pre)
        fn = f'{n:02d}-{slug(title)}.md'
        legend = ('> ⭐ = podtržené téma — **nejpravděpodobněji v testu** (vyučující: „některé z nich se v testu objeví“). '
                  '<del>Přeškrtnuté</del> v testu nebude (šum, přenosová vedení).\n\n')
        md = f'# {n} {title_md}\n\n' + legend + convert_body(body, pre)
        (outdir / fn).write_text(md, encoding='utf8')
        print(f'{n}|{re.sub(r"<[^>]+>", "", title_md)}|{fn}')


if __name__ == '__main__':
    main()
