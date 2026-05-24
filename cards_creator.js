// Minimal cards creator logic: list, edit, import/export, preview, autosave
(function(){
  const LS_KEY = 'cards_creator_draft_v1';
  const HANDOFF_KEY = 'cards_creator_handoff_v1';
  const defaultState = () => ({ cards: [], editingIndex: -1, currentImageData: null });
  const CREATOR_SESSION_VERSION = 1;
  const DEBUG_CREATOR = true;
  const CREATOR_ID_KEY = '__creatorId';
  let cards = [];
  let editingIndex = -1;
  let currentImageData = null;
  let restoredFormState = null;
  let autosaveTimer = null;
  let draggedCardIndex = null;

  const q = sel => document.querySelector(sel);
  const qa = sel => document.querySelectorAll(sel);

  function debugLog(label, details){
    if (!DEBUG_CREATOR) return;
    if (typeof details === 'undefined') {
      console.log(`[cards_creator] ${label}`);
      return;
    }
    console.log(`[cards_creator] ${label}`, details);
  }

  function normalizeCards(input){
    if (!Array.isArray(input)) return [];
    return input.filter(card => card && typeof card === 'object').map(card => attachCardId(card));
  }
  function attachCardId(card){
    if (!card || typeof card !== 'object') return card;
    if (!Object.prototype.hasOwnProperty.call(card, CREATOR_ID_KEY)) {
      Object.defineProperty(card, CREATOR_ID_KEY, {
        value: `card_${Math.random().toString(36).slice(2)}_${Date.now().toString(36)}`,
        enumerable: false,
        configurable: true,
      });
    }
    return card;
  }
  function getCardId(card){
    return card && card[CREATOR_ID_KEY] ? card[CREATOR_ID_KEY] : null;
  }
  function clampEditingIndex(index, totalCards){
    if (!Number.isInteger(index)) return totalCards > 0 ? 0 : -1;
    if (totalCards <= 0) return -1;
    return Math.max(0, Math.min(totalCards - 1, index));
  }

  function cloneJson(value){
    return value ? JSON.parse(JSON.stringify(value)) : value;
  }

  function extractImageSrc(image){
    if (!image) return null;
    if (typeof image === 'string') return image;
    if (typeof image === 'object' && typeof image.src === 'string') return image.src;
    return null;
  }

  function normalizeAnswerPart(part){
    const source = part && typeof part === 'object' ? part : {};
    return {
      title: typeof source.title === 'string' ? source.title : '',
      text: typeof source.text === 'string' ? source.text : '',
      imageSrc: extractImageSrc(source.image),
      raw: cloneJson(source) || {},
    };
  }

  function normalizeAnswerParts(input, fallbackText = '', fallbackImageSrc = null){
    const parts = Array.isArray(input)
      ? input.filter(part => part && typeof part === 'object').map(normalizeAnswerPart)
      : [];

    if (!parts.length) {
      parts.push(normalizeAnswerPart({
        title: '',
        text: fallbackText || '',
        image: fallbackImageSrc ? { src: fallbackImageSrc } : null,
      }));
      return parts;
    }

    if (fallbackText && !parts.some(part => part.text.trim())) {
      parts[0].text = fallbackText;
    }

    if (fallbackImageSrc && !parts.some(part => part.imageSrc)) {
      parts[0].imageSrc = fallbackImageSrc;
    }

    return parts;
  }

  function serializeAnswerPart(partState){
    const raw = cloneJson(partState.raw) || {};
    raw.title = partState.title || '';
    raw.text = partState.text || '';

    if (partState.imageSrc) {
      const image = raw.image && typeof raw.image === 'object' ? cloneJson(raw.image) : {};
      image.src = partState.imageSrc;
      raw.image = image;
    } else if (raw.image) {
      delete raw.image;
    }

    return raw;
  }

  function getAnswerPartRows(){
    if (!els.answerPartsEditor) return [];
    return Array.from(els.answerPartsEditor.querySelectorAll('.answer-part-row'));
  }

  function getAnswerPartStateFromRow(row){
    const titleInput = row.querySelector('input[name="answerPartTitle"]');
    const textInput = row.querySelector('textarea[name="answerPartText"]');
    const state = row._answerPartState || { raw: {} };
    return {
      title: titleInput ? titleInput.value : '',
      text: textInput ? textInput.value : '',
      imageSrc: state.imageSrc || '',
      raw: state.raw || {},
    };
  }

  function getAnswerPartStates(){
    const rows = getAnswerPartRows();
    if (!rows.length) {
      return normalizeAnswerParts([]);
    }
    return rows.map(row => getAnswerPartStateFromRow(row));
  }

  function setAnswerPartImage(row, imageSrc){
    if (!row) return;
    const state = row._answerPartState || { raw: {} };
    state.imageSrc = imageSrc || '';
    row._answerPartState = state;
    const preview = row.querySelector('.answer-part-image-preview');
    const removeImageBtn = row.querySelector('.answer-part-remove-image-btn');
    if (preview) {
      preview.innerHTML = imageSrc ? `<img src="${imageSrc}" alt="Answer part image preview">` : '';
    }
    if (removeImageBtn) removeImageBtn.disabled = !imageSrc;
  }

  function createAnswerPartRow(partState = {}){
    const normalized = normalizeAnswerPart(partState);
    const row = document.createElement('div');
    row.className = 'answer-part-row';
    row._answerPartState = {
      raw: cloneJson(normalized.raw) || {},
      imageSrc: normalized.imageSrc || '',
    };

    const header = document.createElement('div');
    header.className = 'answer-part-row-header';

    const title = document.createElement('div');
    title.className = 'answer-part-row-title';
    title.textContent = 'Answer part';

    const actions = document.createElement('div');
    actions.className = 'answer-part-row-actions';

    const addBtn = document.createElement('button');
    addBtn.type = 'button';
    addBtn.textContent = '+';
    addBtn.title = 'Add answer part below';
    addBtn.addEventListener('click', ()=>{
      const next = row.nextElementSibling;
      const newRow = createAnswerPartRow();
      els.answerPartsEditor.insertBefore(newRow, next);
      syncAnswerPartEmptyState();
      renderPreview();
      scheduleAutosave();
      const focusTarget = newRow.querySelector('input[name="answerPartTitle"]');
      if (focusTarget) focusTarget.focus();
    });

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.textContent = '−';
    removeBtn.title = 'Remove answer part';
    removeBtn.addEventListener('click', ()=>{
      row.remove();
      if (!getAnswerPartRows().length) {
        appendAnswerPart();
      }
      syncAnswerPartEmptyState();
      renderPreview();
      scheduleAutosave();
    });

    actions.appendChild(addBtn);
    actions.appendChild(removeBtn);
    header.appendChild(title);
    header.appendChild(actions);

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'answerPartTitle';
    titleInput.value = normalized.title;
    titleLabel.appendChild(titleInput);

    const textLabel = document.createElement('label');
    textLabel.textContent = 'Text';
    const textInput = document.createElement('textarea');
    textInput.name = 'answerPartText';
    textInput.rows = 4;
    textInput.value = normalized.text;
    textLabel.appendChild(textInput);

    const imageLabel = document.createElement('label');
    imageLabel.textContent = 'Image (optional)';
    const imageInput = document.createElement('input');
    imageInput.type = 'file';
    imageInput.accept = 'image/*';
    imageLabel.appendChild(imageInput);

    const preview = document.createElement('div');
    preview.className = 'answer-part-image-preview';

    const removeImageBtn = document.createElement('button');
    removeImageBtn.type = 'button';
    removeImageBtn.className = 'answer-part-remove-image-btn';
    removeImageBtn.textContent = 'Remove image';
    removeImageBtn.title = 'Remove image from this answer part';
    removeImageBtn.addEventListener('click', ()=>{
      setAnswerPartImage(row, '');
      renderPreview();
      scheduleAutosave();
    });

    imageInput.addEventListener('change', event=>{
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = loadEvent => {
        setAnswerPartImage(row, loadEvent.target.result);
        renderPreview();
        scheduleAutosave();
      };
      reader.readAsDataURL(file);
    });

    titleInput.addEventListener('input', ()=>{ renderPreview(); scheduleAutosave(); });
    textInput.addEventListener('input', ()=>{ renderPreview(); scheduleAutosave(); });

    row.appendChild(header);
    row.appendChild(titleLabel);
    row.appendChild(textLabel);
    row.appendChild(imageLabel);
    row.appendChild(preview);
    row.appendChild(removeImageBtn);
    setAnswerPartImage(row, normalized.imageSrc || '');
    return row;
  }

  function appendAnswerPart(partState = {}){
    if (!els.answerPartsEditor) return;
    els.answerPartsEditor.appendChild(createAnswerPartRow(partState));
  }

  function renderAnswerPartsEditor(parts){
    if (!els.answerPartsEditor) return;
    els.answerPartsEditor.innerHTML = '';
    const normalized = normalizeAnswerParts(parts, '', null);
    normalized.forEach(part => appendAnswerPart(part));
    syncAnswerPartEmptyState();
  }

  function syncAnswerPartEmptyState(){
    if (!els.answerPartsEditor) return;
    const rows = getAnswerPartRows();
    rows.forEach((row, index) => {
      const title = row.querySelector('.answer-part-row-title');
      const removeBtn = row.querySelector('.answer-part-row-actions button:last-child');
      if (title) title.textContent = `Answer part ${index + 1}`;
      if (removeBtn) removeBtn.disabled = rows.length <= 1;
    });
  }

  function getFocusedAnswerPartRow(){
    const active = document.activeElement;
    if (!active || !els.answerPartsEditor) return null;
    return active.closest ? active.closest('.answer-part-row') : null;
  }

  function applyFormState(form = {}){
    const type = form.type || 'open';
    els.cardType.value = type;
    renderSubsetBuilder(form.subsetPath || []);
    els.question.value = form.question || '';

    if (type === 'open') {
      els.answerText.value = '';
      currentImageData = null;
      renderAnswerPartsEditor(normalizeAnswerParts(form.answerParts || form.answer_parts || [], form.answerText || '', extractImageSrc(form.image) || form.currentImageData || null));
    } else {
      els.answerText.value = form.answerText || form.explanation || '';
      currentImageData = form.currentImageData || extractImageSrc(form.image) || null;
      renderAnswerPartsEditor([]);
    }

    els.optionsList.innerHTML = '';
    const optionValues = Array.isArray(form.options) ? form.options : [];
    if (optionValues.length) {
      optionValues.forEach(option => addOptionField(option));
      const correctIndex = typeof form.correctIndex === 'number' ? form.correctIndex : -1;
      const radios = els.optionsList.querySelectorAll('input[type="radio"]');
      if (correctIndex >= 0 && radios[correctIndex]) radios[correctIndex].checked = true;
    }

    renderImageThumb();
    toggleType();
  }

  function collectFormState(){
    const state = {
      type: els.cardType.value,
      subsetPath: getSubsetPathFromBuilder(),
      question: els.question.value,
      options: Array.from(els.optionsList.querySelectorAll('input[type="text"]')).map(input => input.value),
      correctIndex: Array.from(els.optionsList.querySelectorAll('input[type="radio"]')).findIndex(radio => radio.checked)
    };

    if (state.type === 'open') {
      state.answerParts = getAnswerPartStates();
    } else {
      state.answerText = els.answerText.value;
    }

    return state;
  }

  function captureCardRects(){
    const rects = new Map();
    Array.from(els.cardsList.querySelectorAll('.card-row')).forEach(row => {
      const id = row.dataset.cardId;
      if (!id) return;
      rects.set(id, row.getBoundingClientRect());
    });
    return rects;
  }

  function animateCardMoves(previousRects){
    if (!previousRects || !previousRects.size) return;
    Array.from(els.cardsList.querySelectorAll('.card-row')).forEach(row => {
      const id = row.dataset.cardId;
      const first = id ? previousRects.get(id) : null;
      if (!first) return;
      const last = row.getBoundingClientRect();
      const deltaX = first.left - last.left;
      const deltaY = first.top - last.top;
      if (!deltaX && !deltaY) return;
      row.animate([
        { transform: `translate(${deltaX}px, ${deltaY}px)` },
        { transform: 'translate(0, 0)' },
      ], {
        duration: 180,
        easing: 'cubic-bezier(0.2, 0, 0, 1)'
      });
    });
  }

  function hasMeaningfulCardContent(){
    const subset = getSubsetPathFromBuilder();
    const question = els.question.value.trim();
    const optionValues = Array.from(els.optionsList.querySelectorAll('input[type="text"]')).map(input => input.value.trim());
    const hasOptionText = optionValues.some(Boolean);
    const type = els.cardType.value;
    const openParts = type === 'open' ? getAnswerPartStates() : [];
    const hasOpenContent = openParts.some(part => Boolean((part.title || '').trim() || (part.text || '').trim() || part.imageSrc));
    const answer = els.answerText.value.trim();
    const image = !!currentImageData;

    if (type === 'open') {
      return Boolean(question || hasOpenContent || subset.length);
    }

    return Boolean(question || answer || image || subset.length || hasOptionText);
  }

  const els = {
    newCardBtn: q('#newCardBtn'),
    newSetBtn: q('#newSetBtn'),
    importBtn: q('#importBtn'),
    exportBtn: q('#exportBtn'),
    saveSessionBtn: q('#saveSessionBtn'),
    openInCardsBtn: q('#openInCardsBtn'),
    exportFilename: q('#exportFilename'),
    importFile: q('#importFile'),
    cardsList: q('#cardsList'),
    cardType: q('#cardType'),
    subsetPath: q('#subsetPath'),
    subsetPathBuilder: q('#subsetPathBuilder'),
    addSubsetLevelBtn: q('#addSubsetLevelBtn'),
    clearSubsetBtn: q('#clearSubsetBtn'),
    question: q('#question'),
    optionsList: q('#optionsList'),
    addOptionBtn: q('#addOptionBtn'),
    answerText: q('#answerText'),
    imageFile: q('#imageFile'),
    imagePreviewThumb: q('#imagePreviewThumb'),
    clearImageBtn: q('#clearImageBtn'),
    saveCardBtn: q('#saveCardBtn'),
    deleteCardBtn: q('#deleteCardBtn'),
    clearDraftBtn: q('#clearDraftBtn'),
    prevCardBtn: q('#prevCardBtn'),
    nextCardBtn: q('#nextCardBtn'),
    cardPosition: q('#cardPosition'),
    showAnswerToggle: q('#showAnswerToggle'),
    helpBtn: q('#helpBtn'),
    helpModal: q('#helpModal'),
    helpCloseBtn: q('#helpCloseBtn'),
    previewCard: q('#previewCard'),
    openAnswer: q('#openAnswer'),
    closedAnswer: q('#closedAnswer'),
    closedOptions: q('#closedOptions'),
    answerPartsEditor: q('#answerPartsEditor'),
    addAnswerPartBtn: q('#addAnswerPartBtn'),
    imageSection: q('#imageSection')
  };

  function init(){
    debugLog('init:start', { search: window.location.search });
    const sessionLoaded = loadSessionFromUrl() || loadSessionFromHandoff();
    bind();
    if (!sessionLoaded) loadDraft();
    debugLog('init:loaded', { sessionLoaded, cards: cards.length, editingIndex });
    renderList();
    if (restoredFormState) {
      applyFormState(restoredFormState);
    } else {
      renderFormFromCard(getCurrentCard());
    }
    renderPreview();
  }

  function bind(){
    els.newCardBtn.addEventListener('click', ()=>{ debugLog('event:newCardBtn'); commitCurrentFormToCard(); editingIndex = -1; renderFormFromCard(null); renderList(); scheduleAutosave(); });
    if(els.newSetBtn) els.newSetBtn.addEventListener('click', resetToEmptyProject);
    els.importBtn.addEventListener('click', ()=>{ debugLog('event:importBtn'); els.importFile.click(); });
    els.importFile.addEventListener('change', handleImportFile);
    els.exportBtn.addEventListener('click', ()=>{ debugLog('event:exportBtn'); exportJSON(); });
    if(els.saveSessionBtn) els.saveSessionBtn.addEventListener('click', saveSessionAsUrl);
    if(els.openInCardsBtn) els.openInCardsBtn.addEventListener('click', openInCards);
    els.cardType.addEventListener('change', ()=>{ debugLog('event:cardType change', { value: els.cardType.value }); toggleType(); });
    els.addOptionBtn.addEventListener('click', ()=>{ debugLog('event:addOptionBtn'); addOptionField(); });
    els.saveCardBtn.addEventListener('click', ()=>{ debugLog('event:saveCardBtn'); saveCardFromForm(); });
    els.deleteCardBtn.addEventListener('click', ()=>{ debugLog('event:deleteCardBtn'); deleteCurrentCard(); });
    els.clearDraftBtn.addEventListener('click', ()=>{ debugLog('event:clearDraftBtn'); clearDraft(); });
    if(els.addSubsetLevelBtn) els.addSubsetLevelBtn.addEventListener('click', ()=>{ debugLog('event:addSubsetLevelBtn'); addSubsetLevelField(''); syncSubsetHiddenField(); renderPreview(); scheduleAutosave(); });
    if(els.clearSubsetBtn) els.clearSubsetBtn.addEventListener('click', ()=>{ debugLog('event:clearSubsetBtn'); renderSubsetBuilder(['']); syncSubsetHiddenField(); renderPreview(); scheduleAutosave(); });
    if(els.prevCardBtn) els.prevCardBtn.addEventListener('click', ()=>{ debugLog('event:prevCardBtn'); switchCard(-1); });
    if(els.nextCardBtn) els.nextCardBtn.addEventListener('click', ()=>{ debugLog('event:nextCardBtn'); switchCard(1); });
    if(els.showAnswerToggle) els.showAnswerToggle.addEventListener('change', ()=>{ debugLog('event:showAnswerToggle', { checked: els.showAnswerToggle.checked }); renderPreview(); });
    if(els.helpBtn) els.helpBtn.addEventListener('click', ()=>{ debugLog('event:helpBtn'); openHelpModal(); });
    if(els.helpCloseBtn) els.helpCloseBtn.addEventListener('click', ()=>{ debugLog('event:helpCloseBtn'); closeHelpModal(); });
    if(els.helpModal) els.helpModal.addEventListener('click', (event)=>{ if(event.target === els.helpModal) { debugLog('event:helpModal backdrop close'); closeHelpModal(); } });
    els.question.addEventListener('input', ()=>{ debugLog('input:question', { value: els.question.value }); renderPreview(); });
    els.answerText.addEventListener('input', ()=>{ debugLog('input:answerText', { length: els.answerText.value.length }); renderPreview(); });
    els.optionsList.addEventListener('input', ()=>{ debugLog('input:optionsList'); renderPreview(); scheduleAutosave(); });
    if (els.answerPartsEditor) {
      els.answerPartsEditor.addEventListener('input', ()=>{ debugLog('input:answerPartsEditor'); renderPreview(); scheduleAutosave(); });
      els.answerPartsEditor.addEventListener('change', ()=>{ debugLog('change:answerPartsEditor'); renderPreview(); scheduleAutosave(); });
    }
    if (els.addAnswerPartBtn) els.addAnswerPartBtn.addEventListener('click', ()=>{ debugLog('event:addAnswerPartBtn'); appendAnswerPart(); syncAnswerPartEmptyState(); renderPreview(); scheduleAutosave(); });
    els.imageFile.addEventListener('change', handleImageFile);
    if (els.clearImageBtn) els.clearImageBtn.addEventListener('click', ()=>{ debugLog('event:clearImageBtn'); clearCurrentImage(); });
    if(els.subsetPathBuilder) els.subsetPathBuilder.addEventListener('input', ()=>{ debugLog('input:subsetPathBuilder'); syncSubsetHiddenField(); renderPreview(); scheduleAutosave(); });
    window.addEventListener('paste', handleClipboardPaste);
    window.addEventListener('keydown', handleKeyboardShortcuts);
    els.cardType.addEventListener('change', ()=>{ toggleType(); scheduleAutosave(); });
    [els.subsetPath, els.question, els.answerText].forEach(el => el.addEventListener('input', scheduleAutosave));
    window.addEventListener('beforeunload', ()=>{ debugLog('event:beforeunload'); saveDraft(); });
  }

  function isEditableTarget(target){
    return !!target && (
      target.matches('input, textarea, select, button') ||
      target.isContentEditable
    );
  }

  function handleKeyboardShortcuts(e){
    const key = e.key.toLowerCase();
    debugLog('keydown', { key: e.key, ctrlKey: e.ctrlKey, shiftKey: e.shiftKey, altKey: e.altKey, metaKey: e.metaKey, target: e.target && e.target.tagName });

    if (key === 'escape') {
      if (els.helpModal && els.helpModal.classList.contains('active')) {
        closeHelpModal();
        e.preventDefault();
        return;
      }
      const active = document.activeElement;
      if (active && active !== document.body) {
        active.blur();
        e.preventDefault();
      }
      return;
    }

    if (e.ctrlKey && !e.shiftKey && key === 's') {
      e.preventDefault();
      saveCardFromForm();
      return;
    }

    if (e.ctrlKey && !e.shiftKey && key === 'a' && !isEditableTarget(e.target)) {
      e.preventDefault();
      createNewCardShortcut();
      return;
    }

    if (key === 'arrowleft' && !e.altKey && !e.metaKey && !e.ctrlKey) {
      if (!isEditableTarget(e.target) || e.target === document.body) {
        e.preventDefault();
        switchCard(-1);
      }
      return;
    }

    if (key === 'arrowright' && !e.altKey && !e.metaKey && !e.ctrlKey) {
      if (!isEditableTarget(e.target) || e.target === document.body) {
        e.preventDefault();
        switchCard(1);
      }
    }
  }

  function createNewCardShortcut(){
    debugLog('action:createNewCardShortcut', { editingIndex, cards: cards.length });
    commitCurrentFormToCard();
    editingIndex = -1;
    currentImageData = null;
    renderFormFromCard(null);
    renderList();
    scheduleAutosave();
  }

  function resetToEmptyProject(){
    debugLog('action:resetToEmptyProject:start', { cards: cards.length, editingIndex, search: window.location.search });
    if (!confirm('Start a new empty set? This will clear the current session draft.')) return;

    cards = [];
    editingIndex = -1;
    currentImageData = null;
    autosaveTimer = null;
    localStorage.removeItem(LS_KEY);
    localStorage.removeItem(HANDOFF_KEY);
    history.replaceState({}, '', window.location.pathname);
    renderFormFromCard(null);
    renderList();
    renderPreview();
    debugLog('action:resetToEmptyProject:done', { cards: cards.length, editingIndex });
  }

  function buildCreatorSessionState(){
    return {
      version: CREATOR_SESSION_VERSION,
      cards,
      editingIndex,
      currentImageData: els.cardType.value === 'closed' ? currentImageData : null,
      form: collectFormState()
    };
  }

          currentImageData = null;
          restoredFormState = null;
  function encodeSessionState(state){
    const json = JSON.stringify(state);
    const bytes = new TextEncoder().encode(json);
    let binary = '';
    bytes.forEach(byte => { binary += String.fromCharCode(byte); });
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
  }

  function decodeSessionState(payload){
    const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    const padded = base64 + '==='.slice((base64.length + 3) % 4);
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
    return JSON.parse(new TextDecoder().decode(bytes));
  }

  function loadSessionFromUrl(){
    const params = new URLSearchParams(window.location.search);
    const session = params.get('session');
    if (!session) return false;

    try {
      const parsed = decodeSessionState(session);
      if (!parsed || !Array.isArray(parsed.cards)) return false;

      cards = normalizeCards(parsed.cards);
      editingIndex = clampEditingIndex(parsed.editingIndex, cards.length);
      currentImageData = parsed.currentImageData || null;
      restoredFormState = parsed.form || null;

      localStorage.setItem(LS_KEY, JSON.stringify({
        cards,
        editingIndex,
        currentImageData,
        form: restoredFormState || {}
      }));

      history.replaceState({}, '', window.location.pathname);
      return true;
    } catch (error) {
      console.error('Failed to load creator session:', error);
      return false;
    }
  }

  function loadSessionFromHandoff(){
    const sessionStored = sessionStorage.getItem(HANDOFF_KEY);
    const stored = sessionStored || localStorage.getItem(HANDOFF_KEY);
    if (!stored) return false;

    try {
      const parsed = JSON.parse(stored);
      if (!parsed || !Array.isArray(parsed.questions)) return false;

      cards = normalizeCards(parsed.questions);
      editingIndex = typeof parsed.editingIndex === 'number'
        ? clampEditingIndex(parsed.editingIndex, cards.length)
        : (cards.length ? 0 : -1);
      currentImageData = parsed.currentImageData || null;
      restoredFormState = parsed.form || null;
      localStorage.setItem(LS_KEY, JSON.stringify({
        cards,
        editingIndex,
        currentImageData,
        form: restoredFormState || {}
      }));
      sessionStorage.removeItem(HANDOFF_KEY);
      localStorage.removeItem(HANDOFF_KEY);
      history.replaceState({}, '', window.location.pathname);
      return true;
    } catch (error) {
      console.error('Failed to load creator handoff:', error);
      sessionStorage.removeItem(HANDOFF_KEY);
      localStorage.removeItem(HANDOFF_KEY);
      return false;
    }
  }

  async function saveSessionAsUrl(){
    const payload = encodeSessionState(buildCreatorSessionState());
    const url = new URL(window.location.href);
    url.searchParams.delete('from');
    url.searchParams.set('session', payload);

    try {
      await navigator.clipboard.writeText(url.toString());
      alert('Session URL copied to clipboard.');
    } catch (error) {
      window.prompt('Copy session URL:', url.toString());
    }
  }

  function openHelpModal(){
    if (!els.helpModal) return;
    els.helpModal.classList.add('active');
    els.helpModal.setAttribute('aria-hidden', 'false');
  }

  function closeHelpModal(){
    if (!els.helpModal) return;
    els.helpModal.classList.remove('active');
    els.helpModal.setAttribute('aria-hidden', 'true');
  }

  function toggleType(){
    const t = els.cardType.value;
    els.closedOptions.style.display = t === 'closed' ? 'block' : 'none';
    if (els.closedAnswer) els.closedAnswer.style.display = t === 'closed' ? 'block' : 'none';
    if (els.openAnswer) els.openAnswer.style.display = t === 'open' ? 'block' : 'none';
    if (els.imageSection) els.imageSection.style.display = t === 'closed' ? 'block' : 'none';
    if (els.clearImageBtn) els.clearImageBtn.style.display = currentImageData ? 'inline-flex' : 'none';
    renderPreview();
  }

  function getCurrentCard(){
    if(editingIndex < 0 || editingIndex >= cards.length) return null;
    return cards[editingIndex];
  }

  function normalizeSubsetPathInput(value){
    if (Array.isArray(value)) {
      return value.map(part => String(part || '').trim()).filter(Boolean);
    }
    if (typeof value === 'string') {
      return value
        .split(',')
        .map(part => part.trim())
        .filter(Boolean);
    }
    return [];
  }

  function getSubsetPathFromBuilder(){
    if (!els.subsetPathBuilder) return normalizeSubsetPathInput(els.subsetPath?.value || '');
    return Array.from(els.subsetPathBuilder.querySelectorAll('input[type="text"]'))
      .map(input => input.value.trim())
      .filter(Boolean);
  }

  function syncSubsetHiddenField(){
    if (!els.subsetPath) return;
    els.subsetPath.value = getSubsetPathFromBuilder().join(',');
  }

  function addSubsetLevelField(value = ''){
    if (!els.subsetPathBuilder) return;
    const row = document.createElement('div');
    row.className = 'subset-level';
    const input = document.createElement('input');
    input.type = 'text';
    input.value = value;
    input.placeholder = `Level ${els.subsetPathBuilder.children.length + 1}`;

    const addBtn = document.createElement('button');
    addBtn.type = 'button';
    addBtn.textContent = '+';
    addBtn.title = 'Add level below';
    addBtn.addEventListener('click', ()=>{
      const next = row.nextElementSibling;
      const newRow = createSubsetLevelRow('');
      els.subsetPathBuilder.insertBefore(newRow, next);
      syncSubsetHiddenField();
      renderPreview();
      scheduleAutosave();
    });

    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.textContent = '−';
    delBtn.title = 'Remove level';
    delBtn.addEventListener('click', ()=>{
      row.remove();
      if (!els.subsetPathBuilder.children.length) addSubsetLevelField('');
      syncSubsetHiddenField();
      renderPreview();
      scheduleAutosave();
    });

    input.addEventListener('input', ()=>{ syncSubsetHiddenField(); renderPreview(); scheduleAutosave(); });
    row.appendChild(input);
    row.appendChild(addBtn);
    row.appendChild(delBtn);
    els.subsetPathBuilder.appendChild(row);
    syncSubsetHiddenField();
  }

  function createSubsetLevelRow(value = ''){
    const row = document.createElement('div');
    row.className = 'subset-level';
    const input = document.createElement('input');
    input.type = 'text';
    input.value = value;
    input.placeholder = `Level ${els.subsetPathBuilder.children.length + 1}`;
    const addBtn = document.createElement('button');
    addBtn.type = 'button';
    addBtn.textContent = '+';
    addBtn.title = 'Add level below';
    addBtn.addEventListener('click', ()=>{
      const next = row.nextElementSibling;
      const newRow = createSubsetLevelRow('');
      els.subsetPathBuilder.insertBefore(newRow, next);
      syncSubsetHiddenField();
      renderPreview();
      scheduleAutosave();
    });
    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.textContent = '−';
    delBtn.title = 'Remove level';
    delBtn.addEventListener('click', ()=>{
      row.remove();
      if (!els.subsetPathBuilder.children.length) addSubsetLevelField('');
      syncSubsetHiddenField();
      renderPreview();
      scheduleAutosave();
    });
    input.addEventListener('input', ()=>{ syncSubsetHiddenField(); renderPreview(); scheduleAutosave(); });
    row.appendChild(input);
    row.appendChild(addBtn);
    row.appendChild(delBtn);
    return row;
  }

  function renderSubsetBuilder(pathArray = []){
    if (!els.subsetPathBuilder) return;
    const normalized = normalizeSubsetPathInput(pathArray);
    els.subsetPathBuilder.innerHTML = '';
    const levels = normalized.length ? normalized : [''];
    levels.forEach(level => els.subsetPathBuilder.appendChild(createSubsetLevelRow(level)));
    syncSubsetHiddenField();
  }

  function switchCard(delta){
    if(!cards.length) return;
    commitCurrentFormToCard();
    const nextIndex = Math.max(0, Math.min(cards.length - 1, editingIndex + delta));
    editingIndex = nextIndex;
    renderFormFromCard(cards[editingIndex]);
    renderList();
  }

  function openCardAtIndex(index){
    if (index < 0 || index >= cards.length) return;
    commitCurrentFormToCard();
    editingIndex = index;
    renderFormFromCard(cards[index]);
    renderList();
  }

  function updateCardPosition(){
    if(!els.cardPosition) return;
    if(!cards.length){
      els.cardPosition.textContent = 'No cards yet';
      return;
    }
    els.cardPosition.textContent = `Card ${editingIndex + 1} of ${cards.length}`;
    if(els.prevCardBtn) els.prevCardBtn.disabled = editingIndex <= 0;
    if(els.nextCardBtn) els.nextCardBtn.disabled = editingIndex >= cards.length - 1;
  }

  function addOptionField(text=''){
    const idx = els.optionsList.children.length;
    const row = document.createElement('div');
    row.style.display='flex'; row.style.alignItems='center'; row.style.gap='6px';
    const radio = document.createElement('input'); radio.type='radio'; radio.name='correctIdx'; radio.value=idx;
    const input = document.createElement('input'); input.type='text'; input.value = text; input.style.flex='1';
    const up = document.createElement('button'); up.type='button'; up.textContent='↑'; up.title='Move up';
    const down = document.createElement('button'); down.type='button'; down.textContent='↓'; down.title='Move down';
    const del = document.createElement('button'); del.type='button'; del.textContent='×'; del.title='Delete';

    up.addEventListener('click', ()=>{ const p = row.previousElementSibling; if(p) els.optionsList.insertBefore(row,p); reindexOptions(); renderPreview(); });
    down.addEventListener('click', ()=>{ const n = row.nextElementSibling; if(n) els.optionsList.insertBefore(n,row); reindexOptions(); renderPreview(); });
    del.addEventListener('click', ()=>{ row.remove(); reindexOptions(); renderPreview(); });
    radio.addEventListener('change', renderPreview);
    input.addEventListener('input', renderPreview);

    row.appendChild(radio); row.appendChild(input); row.appendChild(up); row.appendChild(down); row.appendChild(del);
    els.optionsList.appendChild(row);
    reindexOptions();
  }

  function reindexOptions(){
    Array.from(els.optionsList.children).forEach((row,i)=>{
      const radio = row.querySelector('input[type="radio"]');
      const input = row.querySelector('input[type="text"]');
      if(radio) radio.value = i;
    });
  }

  function renderList(){
    debugLog('renderList:start', { cards: cards.length, editingIndex });
    const previousRects = captureCardRects();
    els.cardsList.innerHTML = '';

    function createDropSlot(insertIndex, label){
      const slot = document.createElement('div');
      slot.className = 'card-drop-slot';
      slot.dataset.insertIndex = String(insertIndex);
      const line = document.createElement('div');
      line.className = 'card-drop-slot-line';
      const text = document.createElement('div');
      text.className = 'card-drop-slot-text';
      text.textContent = label;
      slot.appendChild(line);
      slot.appendChild(text);
      slot.addEventListener('dragenter', (event)=>{
        if (draggedCardIndex === null) return;
        event.preventDefault();
        slot.classList.add('active');
      });
      slot.addEventListener('dragover', (event)=>{
        if (draggedCardIndex === null) return;
        event.preventDefault();
        slot.classList.add('active');
      });
      slot.addEventListener('dragleave', ()=> slot.classList.remove('active'));
      slot.addEventListener('drop', (event)=>{
        event.preventDefault();
        slot.classList.remove('active');
        if (draggedCardIndex === null) return;
        moveCardToIndex(draggedCardIndex, insertIndex);
      });
      return slot;
    }

    els.cardsList.appendChild(createDropSlot(0, 'Before first'));
    cards.forEach((c,i)=>{
      if (!c) {
        debugLog('renderList:skipNullCard', { index: i, cardsSnapshot: cards.length });
        return;
      }
      const el = document.createElement('div'); el.className='card-row';
      if(i === editingIndex) el.classList.add('active-card');
      el.draggable = true;
      el.dataset.index = String(i);
      el.dataset.cardId = getCardId(c) || '';
      const titleWrap = document.createElement('div');
      titleWrap.className = 'card-row-text';
      const subset = document.createElement('div');
      subset.className = 'card-row-subset';
      subset.textContent = Array.isArray(c.subsetPath) && c.subsetPath.length ? c.subsetPath.join(' / ') : 'No subset';
      const title = document.createElement('div'); title.className = 'card-row-question'; title.textContent = (c.question||'[no question]').slice(0,60);
      titleWrap.appendChild(subset);
      titleWrap.appendChild(title);
      const actions = document.createElement('div');
      const dupBtn = document.createElement('button'); dupBtn.className = 'copy-btn'; dupBtn.type = 'button'; dupBtn.title = 'Copy card'; dupBtn.setAttribute('aria-label', 'Copy card'); dupBtn.textContent='⧉'; dupBtn.addEventListener('click', ()=>{ cards.splice(i+1,0,attachCardId(JSON.parse(JSON.stringify(c)))); saveDraft(); renderList(); });
      const delBtn = document.createElement('button'); delBtn.className = 'delete-btn'; delBtn.type = 'button'; delBtn.title = 'Delete card'; delBtn.setAttribute('aria-label', 'Delete card'); delBtn.textContent='🗑'; delBtn.addEventListener('click', ()=>{ cards.splice(i,1); saveDraft(); renderList(); });
      actions.appendChild(dupBtn); actions.appendChild(delBtn);
      el.appendChild(titleWrap); el.appendChild(actions); els.cardsList.appendChild(el);

      el.addEventListener('click', (event)=>{
        if (event.target.closest('button')) return;
        openCardAtIndex(i);
      });

      el.addEventListener('dragstart', ()=>{
        draggedCardIndex = i;
        el.classList.add('dragging');
      });
      el.addEventListener('dragend', ()=>{
        draggedCardIndex = null;
        el.classList.remove('dragging');
        Array.from(els.cardsList.querySelectorAll('.card-row')).forEach(row => row.classList.remove('drop-target'));
        Array.from(els.cardsList.querySelectorAll('.card-drop-slot')).forEach(slot => slot.classList.remove('active'));
      });

      els.cardsList.appendChild(createDropSlot(i + 1, i === cards.length - 1 ? 'After last' : 'Between cards'));
    });

    animateCardMoves(previousRects);
  }

  function moveCardToIndex(fromIndex, insertIndex){
    if (fromIndex === null || fromIndex < 0 || fromIndex >= cards.length) return;
    const normalizedInsertIndex = Math.max(0, Math.min(cards.length, insertIndex));
    const previousEditingIndex = editingIndex;
    const [moved] = cards.splice(fromIndex, 1);
    let targetIndex = normalizedInsertIndex;
    if (fromIndex < normalizedInsertIndex) targetIndex = normalizedInsertIndex - 1;
    cards.splice(targetIndex, 0, moved);
    if (previousEditingIndex === fromIndex) {
      editingIndex = targetIndex;
    } else if (fromIndex < previousEditingIndex && previousEditingIndex < normalizedInsertIndex) {
      editingIndex = previousEditingIndex - 1;
    } else if (normalizedInsertIndex <= previousEditingIndex && previousEditingIndex < fromIndex) {
      editingIndex = previousEditingIndex + 1;
    }
    draggedCardIndex = null;
    saveDraft();
    debugLog('drag:moveCardToIndex', { fromIndex, insertIndex: normalizedInsertIndex, targetIndex, editingIndex, cards: cards.length });
    renderList();
  }

  function renderFormFromCard(card){
    debugLog('renderFormFromCard', { hasCard: !!card, editingIndex, type: card && card.type, question: card && card.question });
    if(!card){
      els.cardType.value='open';
      els.question.value='';
      els.answerText.value='';
      els.optionsList.innerHTML='';
      currentImageData = null;
      renderSubsetBuilder(['']);
      renderAnswerPartsEditor([normalizeAnswerPart({})]);
      toggleType();
      editingIndex=-1;
      updateCardPosition();
      renderImageThumb();
      renderPreview();
      return;
    }

    els.cardType.value = card.type || 'open';
    renderSubsetBuilder(card.subsetPath || []);
    els.question.value = card.question || '';
    els.optionsList.innerHTML='';

    if ((card.type || 'open') === 'open') {
      els.answerText.value = '';
      currentImageData = null;
      renderAnswerPartsEditor(normalizeAnswerParts(card.answer_parts, card.answer || '', extractImageSrc(card.image)));
    } else {
      els.answerText.value = card.explanation || card.answer || '';
      currentImageData = extractImageSrc(card.image);
      renderAnswerPartsEditor([]);
    }

    renderImageThumb();
    if(card.options && card.options.length){ card.options.forEach(o=>addOptionField(o));
      if(typeof card.correctIndex === 'number'){
        const radios = els.optionsList.querySelectorAll('input[type="radio"]');
        if(radios[card.correctIndex]) radios[card.correctIndex].checked = true;
      }
    }
    toggleType(); renderPreview();
    updateCardPosition();
  }

  function saveCardFromForm(){
    debugLog('action:saveCardFromForm', { editingIndex, type: els.cardType.value });
    commitCurrentFormToCard(true);
  }

  function commitCurrentFormToCard(forceCreateNew=false){
    const subset = getSubsetPathFromBuilder();
    const hasContent = hasMeaningfulCardContent();
    debugLog('commitCurrentFormToCard:start', {
      forceCreateNew,
      editingIndex,
      hasContent: !!hasContent,
      subset,
      question: els.question.value,
      answerLength: els.answerText.value.length,
      optionCount: els.optionsList.querySelectorAll('input[type="text"]').length,
      cardsBefore: cards.length
    });
    if(editingIndex < 0 && !forceCreateNew && !hasContent) return;

    const type = els.cardType.value;
    const qtext = els.question.value.trim();
    const card = attachCardId({ type: type, question: qtext, subsetPath: subset });

    if(type === 'open'){
      card.answer_parts = getAnswerPartStates().map(serializeAnswerPart);
    } else {
      const options = Array.from(els.optionsList.querySelectorAll('input[type="text"]')).map(i=>i.value);
      const radios = Array.from(els.optionsList.querySelectorAll('input[type="radio"]'));
      const correctIndex = radios.findIndex(r=>r.checked);
      card.options = options;
      card.correctIndex = correctIndex >= 0 ? correctIndex : 0;
      card.explanation = els.answerText.value || '';
      if(currentImageData) card.image = { src: currentImageData };
      else delete card.image;
    }

    if(editingIndex >= 0){
      cards[editingIndex] = card;
    } else if(hasContent){
      cards.push(card);
      editingIndex = cards.length - 1;
    }

    saveDraft();
    renderList();
    updateCardPosition();
    debugLog('commitCurrentFormToCard:done', { editingIndex, cardsAfter: cards.length, cardType: card.type });
  }

  function deleteCurrentCard(){
    debugLog('action:deleteCurrentCard', { editingIndex, cardsBefore: cards.length });
    if(editingIndex>=0){ cards.splice(editingIndex,1); editingIndex = cards.length ? Math.min(editingIndex, cards.length - 1) : -1; saveDraft(); renderList(); renderFormFromCard(getCurrentCard()); }
  }

  function handleImportFile(e){ const f = e.target.files && e.target.files[0]; if(!f) return; debugLog('action:handleImportFile', { name: f.name, size: f.size, type: f.type }); const r=new FileReader(); r.onload = ev=>{ try{ const obj = JSON.parse(ev.target.result); if(obj.questions) cards = normalizeCards(obj.questions); else if(Array.isArray(obj)) cards = normalizeCards(obj); else alert('Unrecognized JSON'); editingIndex = cards.length ? 0 : -1; currentImageData = null; restoredFormState = null; saveDraft(); renderList(); renderFormFromCard(getCurrentCard()); debugLog('action:handleImportFile:done', { cards: cards.length, editingIndex }); }catch(err){ debugLog('action:handleImportFile:error', { message: err.message }); alert('Invalid JSON: '+err.message); } }; r.readAsText(f); }

  function exportJSON(){ const out = { title: 'Created with cards_creator', questions: cards }; const blob = new Blob([JSON.stringify(out,null,2)],{type:'application/json'}); const url = URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=(els.exportFilename && els.exportFilename.value ? els.exportFilename.value.trim() : 'cards_export.json'); document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url); }

  function openInCards(){
    debugLog('action:openInCards:start', { editingIndex, cards: cards.length });
    commitCurrentFormToCard(false);
    saveDraft();
    sessionStorage.setItem(HANDOFF_KEY, JSON.stringify({
      title: 'Cards Creator handoff',
      questions: cards
    }));
    localStorage.removeItem(HANDOFF_KEY);
    debugLog('action:openInCards:handoffSaved', { cards: cards.length });
    window.location.href = 'cards.html?from=creator';
  }

  function scheduleAutosave(){
    clearTimeout(autosaveTimer);
    debugLog('scheduleAutosave', { editingIndex, cards: cards.length });
    autosaveTimer = setTimeout(()=>{
      debugLog('autosave:timerFired', { editingIndex, cards: cards.length });
      commitCurrentFormToCard(false);
      saveDraft();
    }, 150);
  }

  function saveDraft(){
    const state = {
      cards,
      editingIndex,
      currentImageData: els.cardType.value === 'closed' ? currentImageData : null,
      form: collectFormState()
    };
    debugLog('saveDraft', { editingIndex, cards: cards.length, currentImageData: !!currentImageData, question: state.form.question, formType: state.form.type });
    localStorage.setItem(LS_KEY, JSON.stringify(state));
  }

  function loadDraft(){
    try{
      debugLog('loadDraft:start');
      const d = localStorage.getItem(LS_KEY);
      restoredFormState = null;
      if(!d) return;
      const parsed = JSON.parse(d);
      if(Array.isArray(parsed)){
        cards = normalizeCards(parsed);
        editingIndex = clampEditingIndex(0, cards.length);
        debugLog('loadDraft:legacyArray', { cards: cards.length, editingIndex });
        return;
      }
      cards = normalizeCards(parsed.cards);
      editingIndex = clampEditingIndex(parsed.editingIndex, cards.length);
      currentImageData = parsed.currentImageData || null;
      restoredFormState = parsed.form || null;
      localStorage.setItem(LS_KEY, JSON.stringify({
        cards,
        editingIndex,
        currentImageData,
        form: restoredFormState || {}
      }));
      debugLog('loadDraft:done', { cards: cards.length, editingIndex, hasForm: !!parsed.form });
    }catch(e){
      debugLog('loadDraft:error', { message: e.message });
      cards = [];
      editingIndex = -1;
      currentImageData = null;
      restoredFormState = null;
    }
  }

  function clearDraft(){ if(confirm('Clear draft?')){ localStorage.removeItem(LS_KEY); cards=[]; editingIndex=-1; currentImageData=null; restoredFormState=null; renderList(); renderFormFromCard(null); } }

  function handleImageFile(e){ const f = e.target.files && e.target.files[0]; if(!f) return; const r=new FileReader(); r.onload=ev=>{ currentImageData = ev.target.result; renderImageThumb(); renderPreview(); scheduleAutosave(); }; r.readAsDataURL(f); }

  function clearCurrentImage(){
    currentImageData = null;
    if (els.imageFile) els.imageFile.value = '';
    renderImageThumb();
    renderPreview();
    scheduleAutosave();
  }

  function handleClipboardPaste(e){
    const items = e.clipboardData && e.clipboardData.items;
    if (!items || !items.length) return;
    const imageItem = Array.from(items).find(item => item.kind === 'file' && item.type && item.type.startsWith('image/'));
    if (!imageItem) return;

    const file = imageItem.getAsFile();
    if (!file) return;

    e.preventDefault();
    const reader = new FileReader();
    reader.onload = ev => {
      if (els.cardType.value === 'open') {
        let row = getFocusedAnswerPartRow();
        if (!row) {
          if (!getAnswerPartRows().length) appendAnswerPart();
          row = getAnswerPartRows()[0];
        }
        if (row) setAnswerPartImage(row, ev.target.result);
      } else {
        currentImageData = ev.target.result;
        renderImageThumb();
      }
      renderPreview();
      scheduleAutosave();
    };
    reader.readAsDataURL(file);
  }

  function renderImageThumb(){
    if(!els.imagePreviewThumb) return;
    if(currentImageData){
      els.imagePreviewThumb.innerHTML = `<img src="${currentImageData}" alt="Pasted or uploaded figure preview">`;
    } else {
      els.imagePreviewThumb.innerHTML = '';
    }
    if (els.clearImageBtn) els.clearImageBtn.style.display = currentImageData ? 'inline-flex' : 'none';
  }

  function renderPreview(){
    if(!els.previewCard) return;
    const previewQuestion = buildPreviewQuestion();
    els.previewCard.className = 'card stack-0';
    els.previewCard.innerHTML = buildPreviewCardMarkup(previewQuestion);
    try{ renderMathInElement(els.previewCard, {delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}]}); }catch(e){}
  }

  function buildPreviewQuestion(){
    const type = els.cardType.value;
    const subsetPath = getSubsetPathFromBuilder();
    const question = {
      id: 'preview',
      type,
      question: els.question.value || '',
      subsetPath,
      category: subsetPath.join(' / '),
    };

    if (type === 'open') {
      question.answer_parts = getAnswerPartStates().map(serializeAnswerPart);
    } else {
      const options = Array.from(els.optionsList.querySelectorAll('input[type="text"]')).map(input => input.value);
      const correctIndex = Array.from(els.optionsList.querySelectorAll('input[type="radio"]')).findIndex(radio => radio.checked);
      question.options = options;
      question.correctIndex = correctIndex >= 0 ? correctIndex : 0;
      question.explanation = els.answerText.value || '';
      if(currentImageData) question.image = { src: currentImageData };
    }

    return question;
  }

  function buildPreviewCardMarkup(q){
    const hierarchyLabel = Array.isArray(q.subsetPath) && q.subsetPath.length > 0 ? q.subsetPath.join(' / ') : q.category;
    const categoryBadge = hierarchyLabel ? `<div class="category-badge">${escapeHtml(hierarchyLabel)}</div>` : '';

    let html = `
      <div class="card-content">
        <div class="card-header">
          <div class="card-top-row">
            <div class="card-number">Preview</div>
          </div>
          <div class="card-meta-row">
            ${categoryBadge}
            <button class="flag-btn" type="button" aria-label="Flag preview" disabled>🏳️</button>
          </div>
        </div>

        <div class="card-scrollable-content">
          <div class="card-question">${escapeHtml(q.question || '')}</div>
    `;

    const showAnswer = !els.showAnswerToggle || els.showAnswerToggle.checked;

    if (q.type === 'open') {
      html += `
        <div class="open-question-actions">
          <button class="action-btn show-answer" type="button" onclick="previewRevealOpenAnswer(this)">${showAnswer ? '🙈 Skrýt odpověď' : '👁️ Zobrazit odpověď'}</button>
          <div class="evaluation-buttons ${showAnswer ? 'visible' : ''}">
            <button class="action-btn correct-self" type="button" onclick="previewRateOpenAnswer(this, true)">✅ Věděl jsem</button>
            <button class="action-btn wrong-self" type="button" onclick="previewRateOpenAnswer(this, false)">❌ Nevěděl jsem</button>
          </div>
        </div>
        <div class="open-question-content ${showAnswer ? 'visible' : ''}">
          ${buildPreviewAnswerContent(q.answer_parts)}
        </div>
      `;
    } else {
      html += `<div class="card-options">`;
      (q.options || []).forEach((opt, i) => {
        html += `<button class="option-btn" type="button" onclick="previewCheckAnswer(this, ${i})">${String.fromCharCode(65 + i)}) ${escapeHtml(opt)}</button>`;
      });
      html += `</div>`;

      if (q.explanation) {
        html += `
          <div class="card-answer ${showAnswer ? 'show' : ''}" id="preview-explanation">
            <div class="answer-title">Vysvětlení:</div>
            <div class="answer-text">${escapeHtml(q.explanation)}</div>
          </div>
        `;
      }
    }

    html += `</div></div>`;
    return html;
  }

  function buildPreviewAnswerContent(parts){
    if (!parts || !Array.isArray(parts)) return '';
    return parts.map(part => {
      let content = `<div class="answer-part">`;
      if (part.title) content += `<h3>${escapeHtml(part.title)}</h3>`;
      if (part.image) {
        const src = typeof part.image === 'string' ? part.image : part.image.src;
        const caption = (typeof part.image === 'object' && part.image.caption) ? `<div class="answer-caption">${escapeHtml(part.image.caption)}</div>` : '';
        content += `<img src="${src}" class="answer-image" alt="Obrázek">${caption}`;
      }
      if (part.text) content += `<div class="answer-text">${escapeHtml(part.text)}</div>`;
      if (part.table_data) content += createTable(part.table_data);
      content += `</div>`;
      return content;
    }).join('');
  }

  window.previewRevealOpenAnswer = function(btn){
    const card = btn.closest('.card');
    const content = card.querySelector('.open-question-content');
    const evalBtns = card.querySelector('.evaluation-buttons');
    const isVisible = content.classList.toggle('visible');
    evalBtns.classList.toggle('visible', isVisible);
    btn.textContent = isVisible ? '🙈 Skrýt odpověď' : '👁️ Zobrazit odpověď';
    try{ renderMathInElement(content, {delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}]}); }catch(e){}
  };

  window.previewRateOpenAnswer = function(btn, knewIt){
    const card = btn.closest('.card');
    const content = card.querySelector('.open-question-content');
    content.classList.add('visible');
    card.querySelector('.evaluation-buttons').classList.add('visible');
    btn.classList.add(knewIt ? 'correct' : 'wrong');
  };

  window.previewCheckAnswer = function(btn, optionIndex){
    const card = btn.closest('.card');
    const buttons = card.querySelectorAll('.option-btn');
    const question = buildPreviewQuestion();
    buttons.forEach(button => button.disabled = true);
    if (buttons[question.correctIndex]) buttons[question.correctIndex].classList.add('correct');
    if (optionIndex !== question.correctIndex) btn.classList.add('wrong');
    const expl = card.querySelector('#preview-explanation');
    if (expl) expl.classList.add('show');
  };

  function escapeHtml(s){ if(!s) return ''; return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('\n','<br>'); }

  // init on DOM ready
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else init();

})();
