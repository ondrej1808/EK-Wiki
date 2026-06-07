(() => {
  /* ─────────────────────────────────────────────
   *  Static index of SZZ submodule notes
   * ───────────────────────────────────────────── */
  const SZZ_NOTES = [
    { subject: 'DRN', label: 'Diferenciální rovnice a num. metody', notes: [
      { title: '05 – Lineární diferenciální rovnice a soustavy',
        path: 'SZZ/DRN/05 Linearni diferencialni rovnice a soustavy.md' },
      { title: '06 – Numerické metody rovnic, integrálů a dif. rovnic',
        path: 'SZZ/DRN/06 Numericke metody rovnic integralu a diferencialnich rovnic.md' },
    ]},
    { subject: 'ELD', label: 'Elektromagnetické vlny', notes: [
      { title: '15 – Elektromagnetická vlna v neomezeném prostředí a na rozhraní',
        path: 'SZZ/ELD/15 Elektromagneticka vlna v neomezenem prostredi a rozhrani.md' },
      { title: '16 – Vedené a evanescentní vlny, vlnovody a vedení',
        path: 'SZZ/ELD/16 Vedene a evanescentni vlny vlnovody vedeni.md' },
    ]},
    { subject: 'EMPA', label: 'Elektromagnetické pole a antény', notes: [
      { title: '13 – Elektrické a magnetické pole, elektrostatika, kapacita',
        path: 'SZZ/EMPA/13 Elektricke a magneticke pole elektrostatika kapacita.md' },
      { title: '14 – Stacionární magnetické pole, indukčnost, Faradayův zákon',
        path: 'SZZ/EMPA/14 Stacionarni magneticke pole indukcnost Faraday.md' },
    ]},
    { subject: 'KANA', label: 'Komplexní analýza a transformace', notes: [
      { title: '09 – Komplexní funkce, integrál, singularity, rezidua',
        path: 'SZZ/KANA/09 Komplexni funkce integral singularity rezidua.md' },
      { title: '10 – Fourierova, Laplaceova a Z-transformace',
        path: 'SZZ/KANA/10 Fourier Laplace Z transformace.md' },
      { title: '10a – Srovnání transformací (přehledová tabulka)',
        path: 'SZZ/KANA/10a Srovnani transformaci Fourier Laplace Z.md' },
      { title: 'Vývar KANA – souhrnný přehled',
        path: 'SZZ/KANA/Vývar KANA.md' },
    ]},
    { subject: 'LAGA', label: 'Lineární algebra a geometrie', notes: [
      { title: '01 – Struktura lin. prostoru, báze a dimenze',
        path: 'SZZ/LAGA/01 Struktura linearniho prostoru, baze a dimenze.md' },
      { title: '02 – Maticový počet, determinant, inverze, vlastní čísla',
        path: 'SZZ/LAGA/02 Maticovy pocet, determinant, inverze, vlastni cisla.md' },
    ]},
    { subject: 'MA1A', label: 'Matematická analýza 1', notes: [
      { title: '03 – Funkce jedné proměnné, limita, derivace, průběh',
        path: 'SZZ/MA1A/03 Funkce jedne promenne, limita, derivace, prubeh.md' },
      { title: '04 – Primitivní funkce a integrály',
        path: 'SZZ/MA1A/04 Primitivni funkce a integraly.md' },
    ]},
    { subject: 'MA2A', label: 'Matematická analýza 2', notes: [
      { title: '07 – Funkce více proměnných, gradient, extrémy',
        path: 'SZZ/MA2A/07 Funkce vice promennych, gradient, extremy.md' },
      { title: '08 – Vícerozměrné integrály a integrální věty',
        path: 'SZZ/MA2A/08 Vicerozmerne integraly a integralni vety.md' },
    ]},
    { subject: 'PST', label: 'Pravděpodobnost a statistika', notes: [
      { title: '11 – Náhodná veličina, vektor, rozdělení, charakteristiky',
        path: 'SZZ/PST/11 Nahodna velicina vektor rozdeleni charakteristiky.md' },
      { title: '12 – CLV, MLE, testování hypotéz',
        path: 'SZZ/PST/12 CLV MLE testovani hypotez.md' },
    ]},
    { subject: 'SAS', label: 'Signály a soustavy', notes: [
      { title: '19 – Signály, reprezentace, vzorkování, náhodné procesy',
        path: 'SZZ/SAS/19 Signaly casova spektralni reprezentace vzorkovani nahodne procesy.md' },
      { title: '20 – Soustavy LTI, konvoluce, stabilita, modulace',
        path: 'SZZ/SAS/20 Soustavy LTI konvoluce stabilita pasmove signaly modulace.md' },
    ]},
  ];

  /* ─────────────────────────────────────────────
   *  Config
   * ───────────────────────────────────────────── */
  const QUESTION_INDEX_PATH = 'assets/question_list.md';
  const QUESTION_DOC_BASE   = 'assets/questions/';

  /* ─────────────────────────────────────────────
   *  DOM refs
   * ───────────────────────────────────────────── */
  const els = {
    topicList:   document.getElementById('topicList'),
    topicFilter: document.getElementById('topicFilter'),
    docTitle:    document.getElementById('docTitle'),
    docMeta:     document.getElementById('docMeta'),
    docBody:     document.getElementById('docBody'),
  };

  /* ─────────────────────────────────────────────
   *  State
   * ───────────────────────────────────────────── */
  let questionTopics = [];
  let activeKey = null;
  let filterText = '';
  let szzCollapsed = false;
  let okruhCollapsed = false;
  const subjectOpen = {};   // subject code → bool (default true)

  /* ─────────────────────────────────────────────
   *  Helpers
   * ───────────────────────────────────────────── */

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  /** URL-encode each path segment (handles spaces in filenames) */
  function encodePath(p) {
    return p.split('/').map(encodeURIComponent).join('/');
  }

  /* ─────────────────────────────────────────────
   *  Obsidian pre-processing
   * ───────────────────────────────────────────── */

  function preprocessObsidian(text) {
    // [[path|label]] or [[path#anchor|label]] → label
    text = text.replace(/\[\[[^\]]*?\|([^\]]+)\]\]/g, '$1');
    // [[file.ext]] (pdf/png/jpg/gif/tex/svg) → '' (pure file ref, no useful text)
    text = text.replace(/\[\[[^\]]*?\.(pdf|png|jpg|gif|tex|svg)([^\]]*?)\]\]/gi, '');
    // [[Title]] → Title
    text = text.replace(/\[\[([^\]#|]+)\]\]/g, '$1');
    // Any remaining [[...]] → ''
    text = text.replace(/\[\[[^\]]*\]\]/g, '');

    // Obsidian callouts: "> [!type] Rest" → "> **Type:** Rest"
    text = text.replace(/^(>+[ \t]*)\[!(\w+)\](.*)/gm, (_, prefix, type, rest) => {
      const label = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
      return `${prefix}**${label}:**${rest}`;
    });

    return text;
  }

  /* ─────────────────────────────────────────────
   *  Math extraction (protect from marked.js)
   * ───────────────────────────────────────────── */

  function extractMath(text) {
    const blocks = [];

    const save = (type, math) => {
      const id = blocks.length;
      blocks.push({ type, math });
      return `\x00M${id}\x00`;
    };

    // Display: $$...$$
    text = text.replace(/\$\$([\s\S]+?)\$\$/g, (_, m) => save('display', m));
    // Display: \[...\]
    text = text.replace(/\\\[([\s\S]+?)\\\]/g, (_, m) => save('display', m));
    // Inline: \(...\)
    text = text.replace(/\\\((.+?)\\\)/g, (_, m) => save('inline', m));
    // Inline: $...$ — not preceded/followed by $, no newlines
    text = text.replace(/(?<!\$)\$(?!\$)([^\n$]+?)(?<!\$)\$(?!\$)/g, (_, m) => save('inline', m));

    return { text, blocks };
  }

  function restoreMath(html, blocks) {
    return html.replace(/\x00M(\d+)\x00/g, (_, i) => {
      const { type, math } = blocks[+i];
      if (window.katex) {
        try {
          return katex.renderToString(math.trim(), {
            displayMode: type === 'display',
            throwOnError: false,
          });
        } catch {
          // fall through to raw
        }
      }
      return type === 'display'
        ? `<div class="math-raw">$$${math}$$</div>`
        : `<span class="math-raw">$${math}$</span>`;
    });
  }

  /* ─────────────────────────────────────────────
   *  Full render pipeline
   * ───────────────────────────────────────────── */

  function renderMarkdown(rawText) {
    // 1. Strip Obsidian syntax
    let text = preprocessObsidian(rawText);

    // 2. Pull math out before marked sees it
    const { text: safeText, blocks } = extractMath(text);

    // 3. marked → HTML
    marked.setOptions({ gfm: true, breaks: false });
    let html = marked.parse(safeText);

    // 4. Restore math with KaTeX
    html = restoreMath(html, blocks);

    // 5. Build real DOM
    const wrapper = document.createElement('div');
    wrapper.innerHTML = html;

    // 6. Convert ```tikz code blocks → <script type="text/tikz"> for tikzjax
    wrapper.querySelectorAll('pre > code.language-tikz').forEach(code => {
      const script = document.createElement('script');
      script.type = 'text/tikz';
      script.textContent = code.textContent;
      code.closest('pre').replaceWith(script);
    });

    return wrapper;
  }

  /* ─────────────────────────────────────────────
   *  Document loading + display
   * ───────────────────────────────────────────── */

  function showStatus(msg) {
    els.docBody.innerHTML = '';
    els.docBody.className = 'status';
    els.docBody.textContent = msg;
  }

  async function openFile(key, title, filePath, setHash) {
    if (key === activeKey) return;
    activeKey = key;
    els.docTitle.textContent = title;
    els.docMeta.textContent = filePath;
    showStatus('Načítám…');
    renderSidebar();

    try {
      const res = await fetch(encodePath(filePath), { cache: 'no-cache' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();

      els.docBody.className = '';

      // KaTeX might not be loaded yet (deferred). Wait for it.
      if (!window.katex) {
        await waitFor(() => window.katex, 5000);
      }

      const rendered = renderMarkdown(text);
      els.docBody.innerHTML = '';
      els.docBody.appendChild(rendered);

      // Fallback: KaTeX auto-render on any $...$ that slipped through
      if (window.renderMathInElement) {
        renderMathInElement(els.docBody, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '\\[', right: '\\]', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
          ],
          throwOnError: false,
        });
      }

      if (setHash) updateHash(key);
    } catch (err) {
      showStatus(`Nepodařilo se načíst „${filePath}": ${err.message}`);
    }
  }

  /** Poll until condition() is true or timeout ms have passed */
  function waitFor(condition, timeout) {
    return new Promise(resolve => {
      if (condition()) { resolve(); return; }
      const t0 = Date.now();
      const id = setInterval(() => {
        if (condition() || Date.now() - t0 > timeout) {
          clearInterval(id); resolve();
        }
      }, 50);
    });
  }

  /* ─────────────────────────────────────────────
   *  Hash routing
   * ───────────────────────────────────────────── */

  function updateHash(key) {
    const h = `doc=${encodeURIComponent(key)}`;
    if (window.location.hash.replace(/^#/, '') === h) return;
    window.location.hash = h;
  }

  function getKeyFromHash() {
    const raw = window.location.hash.replace(/^#/, '').trim();
    if (!raw) return null;
    return new URLSearchParams(raw).get('doc') || null;
  }

  /* ─────────────────────────────────────────────
   *  Question index parsing
   * ───────────────────────────────────────────── */

  function parseQuestionIndex(md) {
    const result = [];
    for (const line of md.split(/\r?\n/)) {
      const m = line.match(/^###\s+(.+?)\s+\(([A-Z0-9]+)\)\s*$/);
      if (m) result.push({
        title: m[1].trim(),
        code:  m[2].trim(),
        file:  `${QUESTION_DOC_BASE}${m[2].trim()}.md`,
      });
    }
    return result;
  }

  /* ─────────────────────────────────────────────
   *  Key resolver
   * ───────────────────────────────────────────── */

  function resolveKey(key) {
    if (!key) return null;
    if (key.startsWith('szz:')) {
      const path = key.slice(4);
      for (const g of SZZ_NOTES) {
        const n = g.notes.find(n => n.path === path);
        if (n) return { title: n.title, filePath: n.path };
      }
    }
    if (key.startsWith('okruh:')) {
      const code = key.slice(6);
      const t = questionTopics.find(t => t.code === code);
      if (t) return { title: t.title, filePath: t.file };
    }
    return null;
  }

  /* ─────────────────────────────────────────────
   *  Sidebar rendering
   * ───────────────────────────────────────────── */

  function matches(s) {
    return !filterText || s.toLowerCase().includes(filterText);
  }

  function makeSectionHdr(label, key, collapsed) {
    const hdr = document.createElement('div');
    hdr.className = 'section-hdr' + (collapsed ? ' collapsed' : '');
    hdr.innerHTML = `<span>${label}</span><span class="arrow">▾</span>`;
    hdr.addEventListener('click', () => {
      if (key === 'szz') szzCollapsed = !szzCollapsed;
      else okruhCollapsed = !okruhCollapsed;
      renderSidebar();
    });
    return hdr;
  }

  function renderSidebar() {
    els.topicList.innerHTML = '';

    /* ── SZZ Notes ── */
    els.topicList.appendChild(makeSectionHdr('SZZ Poznámky', 'szz', szzCollapsed));

    if (!szzCollapsed) {
      for (const group of SZZ_NOTES) {
        const visible = group.notes.filter(n =>
          matches(n.title) || matches(group.subject) || matches(group.label)
        );
        if (visible.length === 0) continue;

        const isOpen = subjectOpen[group.subject] !== false;

        const groupDiv = document.createElement('div');
        groupDiv.className = 'subject-group';

        const hdr = document.createElement('button');
        hdr.type = 'button';
        hdr.className = 'subject-hdr' + (isOpen ? ' open' : '');
        hdr.innerHTML =
          `<span>${escapeHtml(group.subject)}</span>` +
          `<span style="flex:1;text-align:left;color:#64748b;font-weight:400;font-size:11px;margin-left:6px">${escapeHtml(group.label)}</span>` +
          `<span class="arr">▶</span>`;
        hdr.addEventListener('click', () => {
          subjectOpen[group.subject] = !isOpen;
          renderSidebar();
        });

        const notesDiv = document.createElement('div');
        notesDiv.className = 'subject-notes' + (isOpen ? ' open' : '');

        for (const note of visible) {
          const key = 'szz:' + note.path;
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'topic-btn' + (key === activeKey ? ' active' : '');
          btn.textContent = note.title;
          btn.addEventListener('click', () => openFile(key, note.title, note.path, true));
          notesDiv.appendChild(btn);
        }

        groupDiv.appendChild(hdr);
        groupDiv.appendChild(notesDiv);
        els.topicList.appendChild(groupDiv);
      }
    }

    /* ── Question summaries ── */
    if (questionTopics.length > 0) {
      els.topicList.appendChild(makeSectionHdr('Okruhy (shrnutí)', 'okruh', okruhCollapsed));

      if (!okruhCollapsed) {
        const visible = questionTopics.filter(t =>
          matches(t.title) || matches(t.code)
        );

        if (visible.length === 0) {
          const p = document.createElement('p');
          p.style.cssText = 'font-size:12px;color:#94a3b8;padding:4px 10px';
          p.textContent = 'Nic nenalezeno.';
          els.topicList.appendChild(p);
        } else {
          for (const topic of visible) {
            const key = 'okruh:' + topic.code;
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'topic-btn' + (key === activeKey ? ' active' : '');
            btn.innerHTML = `${escapeHtml(topic.title)}<small>${escapeHtml(topic.code)}</small>`;
            btn.addEventListener('click', () =>
              openFile(key, topic.title, topic.file, true)
            );
            els.topicList.appendChild(btn);
          }
        }
      }
    }
  }

  /* ─────────────────────────────────────────────
   *  Init
   * ───────────────────────────────────────────── */

  async function init() {
    // Render sidebar immediately with SZZ notes
    renderSidebar();

    // Load question index in background
    fetch(QUESTION_INDEX_PATH, { cache: 'no-cache' })
      .then(r => r.ok ? r.text() : '')
      .then(md => { questionTopics = parseQuestionIndex(md); renderSidebar(); })
      .catch(() => {});

    // Determine initial document
    const fromHash = getKeyFromHash();
    let key = fromHash;

    // If hash points to an okruh: that needs questionTopics (not yet loaded)
    // Open it after topics load; meanwhile open default SZZ note
    if (!key || key.startsWith('okruh:')) {
      const defaultKey = 'szz:' + SZZ_NOTES[0].notes[0].path;
      const defaultNote = SZZ_NOTES[0].notes[0];
      await openFile(defaultKey, defaultNote.title, defaultNote.path, !fromHash);

      // If there was an okruh hash, open it once topics are loaded
      if (fromHash && fromHash.startsWith('okruh:')) {
        await waitFor(() => questionTopics.length > 0, 5000);
        const resolved = resolveKey(fromHash);
        if (resolved) openFile(fromHash, resolved.title, resolved.filePath, false);
      }
    } else {
      const resolved = resolveKey(key);
      if (resolved) {
        await openFile(key, resolved.title, resolved.filePath, false);
      } else {
        const defaultNote = SZZ_NOTES[0].notes[0];
        await openFile('szz:' + defaultNote.path, defaultNote.title, defaultNote.path, true);
      }
    }
  }

  /* ─────────────────────────────────────────────
   *  Event listeners
   * ───────────────────────────────────────────── */

  els.topicFilter.addEventListener('input', () => {
    filterText = els.topicFilter.value.trim().toLowerCase();
    renderSidebar();
  });

  window.addEventListener('hashchange', () => {
    const key = getKeyFromHash();
    if (!key || key === activeKey) return;
    const resolved = resolveKey(key);
    if (resolved) openFile(key, resolved.title, resolved.filePath, false);
  });

  void init();
})();
