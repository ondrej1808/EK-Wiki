(() => {
  const TOPIC_INDEX_PATH = 'assets/question_list.md';
  const TOPIC_DOC_BASE = 'assets/questions/';

  const els = {
    topicList: document.getElementById('topicList'),
    topicFilter: document.getElementById('topicFilter'),
    docTitle: document.getElementById('docTitle'),
    docMeta: document.getElementById('docMeta'),
    docBody: document.getElementById('docBody')
  };

  let topics = [];
  let activeCode = null;

  function setStatus(text) {
    els.docBody.textContent = text;
    els.docBody.classList.add('status');
  }

  function setDocument(title, code, text) {
    activeCode = code;
    els.docTitle.textContent = title;
    els.docMeta.textContent = `${code}.md`;
    els.docBody.textContent = text;
    els.docBody.classList.remove('status');
    renderTopicList(els.topicFilter.value || '');
  }

  function parseTopics(markdownText) {
    const lines = markdownText.split(/\r?\n/);
    const result = [];

    for (const line of lines) {
      const match = line.match(/^###\s+(.+?)\s+\(([A-Z0-9]+)\)\s*$/);
      if (!match) continue;

      const title = match[1].trim();
      const code = match[2].trim();
      result.push({ title, code, file: `${TOPIC_DOC_BASE}${code}.md` });
    }

    return result;
  }

  function getTopicFromHash() {
    const raw = window.location.hash.replace(/^#/, '').trim();
    if (!raw) return null;

    const params = new URLSearchParams(raw);
    const fromParam = params.get('topic');
    const value = (fromParam || raw).toUpperCase();
    return /^[A-Z0-9]+$/.test(value) ? value : null;
  }

  function updateHash(code) {
    const newHash = `topic=${code}`;
    if (window.location.hash.replace(/^#/, '') === newHash) return;
    window.location.hash = newHash;
  }

  function renderTopicList(filterText) {
    const filter = (filterText || '').trim().toLowerCase();
    els.topicList.innerHTML = '';

    const filtered = topics.filter(topic => {
      if (!filter) return true;
      return topic.title.toLowerCase().includes(filter) || topic.code.toLowerCase().includes(filter);
    });

    if (filtered.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'status';
      empty.textContent = 'Žádné téma neodpovídá filtru.';
      els.topicList.appendChild(empty);
      return;
    }

    for (const topic of filtered) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `topic-btn${topic.code === activeCode ? ' active' : ''}`;
      button.innerHTML = `${topic.title}<small>${topic.code}</small>`;
      button.addEventListener('click', () => {
        void openTopic(topic.code, true);
      });
      els.topicList.appendChild(button);
    }
  }

  async function openTopic(code, setHash) {
    const topic = topics.find(t => t.code === code);
    if (!topic) {
      setStatus(`Téma ${code} nebylo nalezeno v indexu.`);
      return;
    }

    els.docTitle.textContent = `Načítám: ${topic.title}`;
    els.docMeta.textContent = `${topic.code}.md`;
    setStatus('Načítám obsah tématu…');

    try {
      const response = await fetch(topic.file, { cache: 'no-cache' });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const text = await response.text();
      setDocument(topic.title, topic.code, text);
      if (setHash) updateHash(topic.code);
    } catch (error) {
      setStatus(`Nepodařilo se načíst ${topic.file} (${error.message}).`);
    }
  }

  async function init() {
    try {
      const response = await fetch(TOPIC_INDEX_PATH, { cache: 'no-cache' });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const indexMarkdown = await response.text();
      topics = parseTopics(indexMarkdown);

      if (!topics.length) {
        els.docTitle.textContent = 'Nenalezena témata';
        els.docMeta.textContent = TOPIC_INDEX_PATH;
        setStatus('Index témat je prázdný nebo v neočekávaném formátu.');
        return;
      }

      renderTopicList('');

      const fromHash = getTopicFromHash();
      const initial = topics.find(t => t.code === fromHash) || topics[0];
      await openTopic(initial.code, !fromHash);
    } catch (error) {
      els.docTitle.textContent = 'Chyba načítání wiki';
      els.docMeta.textContent = TOPIC_INDEX_PATH;
      setStatus(`Nepodařilo se načíst index témat (${error.message}).`);
    }
  }

  els.topicFilter.addEventListener('input', () => {
    renderTopicList(els.topicFilter.value || '');
  });

  window.addEventListener('hashchange', () => {
    const code = getTopicFromHash();
    if (!code || code === activeCode) return;
    void openTopic(code, false);
  });

  void init();
})();
