let questions = [];
let currentCardIndex = 0;
// Current Subject Key for local storage
let currentSubjectKey = 'default'; 

let stats = {
    correct: 0,
    wrong: 0,
    answered: new Set()
};
let questionStates = {};
let flaggedQuestions = new Set();
let isFlaggedMode = false;
let selectedSubsetPath = null;
let selectedSubjectPath = null;
let viewStates = {};
let pendingWrongAnswer = null;
const CREATOR_HANDOFF_KEY = 'cards_creator_handoff_v1';
const DEBUG_CARDS_LOGS = true;

const SUBSET_VALUE_SEPARATOR = '||>';
const REMINDER_WINDOWS = [
    { value: 10, min: 5, max: 15 },
    { value: 20, min: 10, max: 30 },
    { value: 50, min: 25, max: 75 },
    { value: 100, min: 50, max: 150 }
];

function debugCardsLog(message, details) {
    if (!DEBUG_CARDS_LOGS) return;
    if (typeof details === 'undefined') {
        console.log(`[cards] ${message}`);
        return;
    }
    console.log(`[cards] ${message}`, details);
}

function getQuestionStateKey(qId) {
    return String(qId);
}

function getQuestionState(qId, createIfMissing = true) {
    const key = getQuestionStateKey(qId);
    if (!questionStates[key] && createIfMissing) {
        questionStates[key] = { correct: false, wrong: 0 };
    }
    return questionStates[key] || null;
}

function isQuestionResolved(qId) {
    const state = getQuestionState(qId, false);
    return Boolean(state && state.correct);
}

function hasQuestionAttempt(qId) {
    const state = getQuestionState(qId, false);
    return Boolean(state && (state.correct || (state.wrong || 0) > 0));
}

function recordQuestionOutcome(qId, isCorrect) {
    const state = getQuestionState(qId);
    if (isCorrect) {
        state.correct = true;
    } else {
        state.wrong = (state.wrong || 0) + 1;
    }
}

function computeScopeProgress(scopeQuestions) {
    const progress = {
        total: scopeQuestions.length,
        correct: 0,
        wrong: 0,
        attempted: 0,
        remaining: scopeQuestions.length,
        accuracy: 0,
        percent: 0
    };

    scopeQuestions.forEach(question => {
        const state = getQuestionState(question.id, false);
        if (!state) return;
        if (state.correct) progress.correct += 1;
        if (state.wrong) progress.wrong += state.wrong;
        if (state.correct || (state.wrong || 0) > 0) progress.attempted += 1;
    });

    progress.remaining = Math.max(0, progress.total - progress.correct);
    progress.percent = progress.total === 0 ? 0 : Math.round((progress.correct / progress.total) * 100);
    progress.accuracy = progress.attempted === 0 ? 0 : Math.round((progress.correct / progress.attempted) * 100);
    return progress;
}

function persistCurrentScopeState() {
    const scopeState = getCurrentScopeState();
    if (scopeState) {
        scopeState.currentCardIndex = currentCardIndex;
    }
}

// Touch handling variables
let touchStartX = 0;
let touchStartY = 0;
let isDragging = false;
let currentCard = null;

// Initialize Dark Mode
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    document.documentElement.classList.add('dark-mode');
}

// === KEYBOARD NAVIGATION (Fix issue 3) ===
function isCurrentCardAnswerVisible() {
    const card = document.querySelector('.card.stack-0');
    if (!card) return false;

    return Boolean(
        card.querySelector('.open-question-content.visible') ||
        card.querySelector('.card-answer.show')
    );
}

function scrollCurrentCardContent(deltaY) {
    const card = document.querySelector('.card.stack-0');
    if (!card) return false;

    const scrollableContent = card.querySelector('.card-scrollable-content');
    if (!scrollableContent) return false;

    scrollableContent.scrollBy({ top: deltaY, behavior: 'smooth' });
    return true;
}

function getOpenAnswerShortcutChoice(event) {
    const key = event.key;
    const code = event.code;

    const choices = [
        { knewIt: true, keys: ['1', '+'], codes: ['Digit1', 'Numpad1'] },
        { knewIt: false, keys: ['2', 'ě'], codes: ['Digit2', 'Numpad2'] }
    ];

    return choices.find(choice => choice.keys.includes(key) || choice.codes.includes(code)) || null;
}

function handleOpenAnswerShortcut(event) {
    const choice = getOpenAnswerShortcutChoice(event);
    if (!choice) return false;

    const card = document.querySelector('.card.stack-0');
    if (!card) return false;

    const qId = currentQuestionIdFromCard(card);
    if (qId === null || qId === undefined) return false;

    rateOpenAnswer(qId, choice.knewIt);
    return true;
}

function currentQuestionIdFromCard(card) {
    if (!card) return null;

    const cardIndex = Number.parseInt(card.dataset.questionId, 10);
    return Number.isNaN(cardIndex) ? null : cardIndex;
}

document.addEventListener('keydown', (e) => {
    if (isWrongAnswerPopupOpen()) {
        if (handleWrongAnswerShortcut(e)) {
            e.preventDefault();
        }
        return;
    }

    // Only navigate if no modal is open (menu)
    if (document.querySelector('.menu-overlay').classList.contains('active')) return;

    if (isCurrentCardAnswerVisible() && handleOpenAnswerShortcut(e)) {
        e.preventDefault();
        return;
    }
    
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        if (isCurrentCardAnswerVisible() && scrollCurrentCardContent(e.key === 'ArrowUp' ? -120 : 120)) {
            e.preventDefault();
        }
    } else if (e.key === 'ArrowRight') {
        nextCard();
    } else if (e.key === 'ArrowLeft') {
        prevCard();
    } else if (e.key === ' ' || e.key === 'Enter') {
        // Optional: Reveal answer on Space/Enter
        const card = document.querySelector('.card.stack-0');
        if (card) {
            const showBtn = card.querySelector('.show-answer');
            if (showBtn && showBtn.style.display !== 'none') {
                revealOpenAnswer(showBtn);
                e.preventDefault();
            }
        }
    }
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

function toggleMenu() {
    const overlay = document.querySelector('.menu-overlay');
    const popup = document.querySelector('.menu-popup');
    const isActive = overlay.classList.contains('active');
    
    if (!isActive) {
        // Copy controls to mobile menu
        const menuContent = document.getElementById('mobileMenuContent');
        menuContent.innerHTML = '';
        
        // Add Subject Select to mobile menu
        const selectContainer = document.createElement('div');
        selectContainer.className = 'select-wrapper';
        selectContainer.style.marginBottom = '12px';
        
        // Clone the select from desktop
        const originalSelect = document.getElementById('subjectSelect');
        const clonedSelect = originalSelect.cloneNode(true);
        clonedSelect.id = 'mobileSubjectSelect';
        clonedSelect.style.width = '100%';
        clonedSelect.value = originalSelect.value;
        clonedSelect.onchange = (e) => {
            changeSubject(e.target.value);
            toggleMenu();
        };
        selectContainer.appendChild(clonedSelect);
        menuContent.appendChild(selectContainer);

        const originalSubjectFilter = document.getElementById('subjectFilterSelect');
        if (originalSubjectFilter) {
            const subjectFilterContainer = document.createElement('div');
            subjectFilterContainer.className = 'select-wrapper';
            subjectFilterContainer.style.marginBottom = '12px';

            const clonedSubjectFilter = originalSubjectFilter.cloneNode(true);
            clonedSubjectFilter.id = 'mobileSubjectFilterSelect';
            clonedSubjectFilter.style.width = '100%';
            clonedSubjectFilter.value = originalSubjectFilter.value;
            clonedSubjectFilter.onchange = (e) => {
                changeSubjectFilter(e.target.value);
                toggleMenu();
            };
            subjectFilterContainer.appendChild(clonedSubjectFilter);
            menuContent.appendChild(subjectFilterContainer);
        }

        const originalSubsetSelect = document.getElementById('subsetSelect');
        if (originalSubsetSelect) {
            const subsetContainer = document.createElement('div');
            subsetContainer.className = 'select-wrapper';
            subsetContainer.style.marginBottom = '12px';

            const clonedSubsetSelect = originalSubsetSelect.cloneNode(true);
            clonedSubsetSelect.id = 'mobileSubsetSelect';
            clonedSubsetSelect.style.width = '100%';
            clonedSubsetSelect.value = originalSubsetSelect.value;
            clonedSubsetSelect.onchange = (e) => {
                changeSubsetFilter(e.target.value);
                toggleMenu();
            };
            subsetContainer.appendChild(clonedSubsetSelect);
            menuContent.appendChild(subsetContainer);
        }

        const controls = [
            { text: '📂 Nahrát vlastní', class: 'btn-primary', action: "document.getElementById('fileInput').click()" },
            { text: '🔄 Import Anki', class: 'btn-warning', action: "document.getElementById('ankiInput').click()" },
            { text: '🔀 Zamíchat set', class: 'btn-secondary', action: 'shuffleCurrentSet()' },
            { text: '✏️ Otevřít v editoru', class: 'btn-secondary', action: "openCurrentSetInEditor()" },
            { text: '↺ Resetovat', class: 'btn-secondary', action: "resetProgress()" },
            { text: '🧹 Smazat cache', class: 'btn-warning', action: "clearAppCache()" },
            { text: '⬇️ Stáhnout chyby', class: 'btn-success', action: "downloadFailed()" }
        ];

        controls.forEach(btn => {
            const button = document.createElement('button');
            button.className = `btn ${btn.class}`;
            button.textContent = btn.text;
            button.setAttribute('onclick', `${btn.action}; toggleMenu();`);
            menuContent.appendChild(button);
        });

        const flagDiv = document.createElement('div');
        flagDiv.className = 'filter-checkbox';
        flagDiv.style.marginTop = '10px';
        flagDiv.innerHTML = `
            <input type="checkbox" ${isFlaggedMode ? 'checked' : ''} onchange="toggleFlaggedMode(); toggleMenu();">
            <label>🚩 Zobrazit pouze označené</label>
        `;
        menuContent.appendChild(flagDiv);
    }

    overlay.classList.toggle('active');
    popup.classList.toggle('active');
}

function normalizeSubsetPath(question) {
    if (!question || typeof question !== 'object') return [];

    const source = question.subsetPath || question.hierarchyPath;
    if (Array.isArray(source)) {
        return source
            .map(part => String(part || '').trim())
            .filter(Boolean);
    }

    if (typeof source === 'string') {
        return source
            .split('>')
            .map(part => part.trim())
            .filter(Boolean);
    }

    if (typeof question.category === 'string' && question.category.trim()) {
        return [question.category.trim()];
    }

    return [];
}

function getSubjectPath(question) {
    if (!question || typeof question !== 'object') return '';
    if (Array.isArray(question.subsetPath) && question.subsetPath.length > 0) {
        return String(question.subsetPath[0] || '').trim();
    }
    return '';
}

function getAvailableSubjectPaths() {
    const subjects = [];
    const seen = new Set();
    questions.forEach(q => {
        const subject = getSubjectPath(q);
        if (subject && !seen.has(subject)) {
            seen.add(subject);
            subjects.push(subject);
        }
    });
    return subjects;
}

function encodeSubsetPath(pathArray) {
    if (!Array.isArray(pathArray) || pathArray.length === 0) return '';
    return pathArray.join(SUBSET_VALUE_SEPARATOR);
}

function decodeSubsetPath(encoded) {
    if (!encoded) return null;
    const decoded = encoded
        .split(SUBSET_VALUE_SEPARATOR)
        .map(part => part.trim())
        .filter(Boolean);
    return decoded.length ? decoded : null;
}

function isPathPrefix(prefixPath, fullPath) {
    if (!Array.isArray(prefixPath) || !Array.isArray(fullPath)) return false;
    if (prefixPath.length > fullPath.length) return false;
    return prefixPath.every((part, i) => part === fullPath[i]);
}

function syncSubsetSelects() {
    const value = encodeSubsetPath(selectedSubsetPath || []);
    const desktop = document.getElementById('subsetSelect');
    const mobile = document.getElementById('mobileSubsetSelect');
    if (desktop) desktop.value = value;
    if (mobile) mobile.value = value;
}

function syncSubjectFilterSelects() {
    const value = selectedSubjectPath || '';
    const desktop = document.getElementById('subjectFilterSelect');
    const mobile = document.getElementById('mobileSubjectFilterSelect');
    if (desktop) desktop.value = value;
    if (mobile) mobile.value = value;
}

function getQuestionIdKey(qId) {
    return String(qId);
}

function getCurrentScopeKey() {
    const subsetKey = encodeSubsetPath(selectedSubsetPath || []);
    const subjectKey = selectedSubjectPath ? `subject:${selectedSubjectPath}` : 'subject:__all__';
    return `${subjectKey}::${subsetKey || '__all__'}::${isFlaggedMode ? 'flagged' : 'all'}`;
}

function getCurrentScopeState(createIfMissing = true) {
    const scopeKey = getCurrentScopeKey();
    if (!viewStates[scopeKey] && createIfMissing) {
        viewStates[scopeKey] = {
            order: [],
            reminders: {},
            sequence: 0,
            currentCardIndex: 0
        };
    }

    const state = viewStates[scopeKey];
    if (!state) return null;
    if (!Array.isArray(state.order)) state.order = [];
    if (!state.reminders || typeof state.reminders !== 'object') state.reminders = {};
    if (typeof state.sequence !== 'number') state.sequence = 0;
    if (typeof state.currentCardIndex !== 'number') state.currentCardIndex = 0;
    return state;
}

function buildFilteredQuestionMap() {
    const filteredQuestions = getFilteredQuestions();
    const questionMap = new Map();
    filteredQuestions.forEach(q => {
        questionMap.set(getQuestionIdKey(q.id), q);
    });
    return { filteredQuestions, questionMap };
}

function ensureVisibleOrder() {
    const scopeState = getCurrentScopeState();
    const { filteredQuestions, questionMap } = buildFilteredQuestionMap();
    const filteredIdSet = new Set(filteredQuestions.map(q => getQuestionIdKey(q.id)));
    const pendingReminderIds = new Set(Object.keys(scopeState.reminders).map(getQuestionIdKey));
    const seen = new Set();
    const normalizedOrder = [];

    scopeState.order.forEach(id => {
        const key = getQuestionIdKey(id);
        if (filteredIdSet.has(key) && !seen.has(key) && questionMap.has(key)) {
            seen.add(key);
            normalizedOrder.push(questionMap.get(key).id);
        }
    });

    filteredQuestions.forEach(q => {
        const key = getQuestionIdKey(q.id);
        if (!seen.has(key) && !pendingReminderIds.has(key)) {
            seen.add(key);
            normalizedOrder.push(q.id);
        }
    });

    scopeState.order = normalizedOrder;
    return normalizedOrder.map(id => questionMap.get(getQuestionIdKey(id))).filter(Boolean);
}

function shuffleArray(items) {
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
}

function shuffleCurrentSet() {
    const visibleQuestions = ensureVisibleOrder();
    if (visibleQuestions.length < 2) {
        showMessage('Na zamíchání nejsou dost otázek.', 'info');
        return;
    }

    const scopeState = getCurrentScopeState();
    scopeState.order = shuffleArray(visibleQuestions.map(q => q.id));
    currentCardIndex = 0;
    saveProgress();
    updateUI();
    showMessage('Aktuální set byl zamíchán.', 'success');
}

function setReminder(qId, delay, event) {
    if (event) event.stopPropagation();

    const scheduled = scheduleReminderInternal(qId, sampleReminderDelay(delay));
    if (!scheduled) {
        showMessage('Tuto otázku nelze připomenout v aktuálním zobrazení.', 'info');
        return;
    }
    const window = getReminderWindow(delay);
    showMessage(`Připomínka nastavena přibližně za ${window.min}-${window.max} karet.`, 'success');
}

function advanceReminderTimers(scopeState) {
    const dueReminders = [];

    Object.entries(scopeState.reminders).forEach(([qKey, reminder]) => {
        reminder.remaining -= 1;
        if (reminder.remaining <= 0) {
            dueReminders.push({ qKey, sequence: reminder.sequence });
        }
    });

    dueReminders.sort((a, b) => a.sequence - b.sequence);

    let insertOffset = 0;
    dueReminders.forEach(({ qKey }) => {
        const question = questions.find(q => getQuestionIdKey(q.id) === qKey);
        if (question) {
            const alreadyVisible = scopeState.order.some(id => getQuestionIdKey(id) === qKey);
            if (!alreadyVisible) {
                const insertAt = Math.min(currentCardIndex + 1 + insertOffset, scopeState.order.length);
                scopeState.order.splice(insertAt, 0, question.id);
                insertOffset += 1;
            }
        }
        delete scopeState.reminders[qKey];
    });
}

function getReminderWindow(baseValue) {
    const min = Math.max(1, Math.floor(baseValue / 2));
    const max = Math.max(min, Math.ceil(baseValue * 1.5));
    return { min, max };
}

function sampleReminderDelay(baseValue) {
    const window = getReminderWindow(baseValue);
    return Math.floor(Math.random() * (window.max - window.min + 1)) + window.min;
}

function sampleShuffleDelay() {
    const window = REMINDER_WINDOWS[Math.floor(Math.random() * REMINDER_WINDOWS.length)];
    return sampleReminderDelay(window.value);
}

function scheduleReminderInternal(qId, delay, updateView = true) {
    const scopeState = getCurrentScopeState();
    const visibleQuestions = ensureVisibleOrder();
    const qKey = getQuestionIdKey(qId);
    const removalIndex = scopeState.order.findIndex(id => getQuestionIdKey(id) === qKey);
    const question = visibleQuestions.find(q => getQuestionIdKey(q.id) === qKey);

    if (!question || removalIndex === -1) {
        return false;
    }

    scopeState.reminders[qKey] = {
        remaining: delay,
        sequence: ++scopeState.sequence
    };

    scopeState.order.splice(removalIndex, 1);

    if (removalIndex < currentCardIndex) {
        currentCardIndex--;
    }

    if (currentCardIndex >= scopeState.order.length) {
        currentCardIndex = Math.max(0, scopeState.order.length - 1);
    }

    saveProgress();
    if (updateView) updateUI();
    return true;
}

function openWrongAnswerPopup(qId) {
    pendingWrongAnswer = qId;
    const overlay = document.getElementById('wrongAnswerOverlay');
    const popup = document.getElementById('wrongAnswerPopup');
    if (overlay) overlay.classList.add('active');
    if (popup) popup.classList.add('active');
}

function closeWrongAnswerPopup() {
    pendingWrongAnswer = null;
    const overlay = document.getElementById('wrongAnswerOverlay');
    const popup = document.getElementById('wrongAnswerPopup');
    if (overlay) overlay.classList.remove('active');
    if (popup) popup.classList.remove('active');
}

function handleWrongAnswerChoice(action, baseValue = null, event) {
    if (event) event.stopPropagation();
    const qId = pendingWrongAnswer;
    if (qId === null || qId === undefined) return;

    closeWrongAnswerPopup();
    recordQuestionOutcome(qId, false);

    let scheduled = false;
    let toastText = 'Nevěděl jsem';
    if (action === 'remind' && baseValue !== null) {
        toastText = `Nevěděl jsem → připomenout za ${baseValue} karet`;
        scheduled = scheduleReminderInternal(qId, sampleReminderDelay(baseValue), false);
    } else if (action === 'random') {
        toastText = 'Nevěděl jsem → náhodné zamíchání do dalších karet';
        scheduled = scheduleReminderInternal(qId, sampleShuffleDelay(), false);
    }

    showMessage(toastText, 'info');
    updateStats();

    if (scheduled) {
        const currentCardElement = document.querySelector('.card.stack-0');
        if (currentCardElement) {
            currentCardElement.classList.add('swipe-left');
        }
        setTimeout(() => updateUI(), 200);
    }
}

function populateSubsetFilter() {
    const subsetSelect = document.getElementById('subsetSelect');
    if (!subsetSelect) return;

    const prevValue = encodeSubsetPath(selectedSubsetPath || []);
    subsetSelect.innerHTML = '<option value="">🧭 Všechny subsety</option>';

    const nodes = new Map();
    questions.forEach(q => {
        const path = Array.isArray(q.subsetPath) ? q.subsetPath : [];
        if (selectedSubjectPath && path[0] !== selectedSubjectPath) {
            return;
        }
        const startIndex = selectedSubjectPath ? 2 : 1;
        for (let i = startIndex; i <= path.length; i++) {
            const nodePath = path.slice(0, i);
            const key = encodeSubsetPath(nodePath);
            if (!nodes.has(key)) {
                nodes.set(key, {
                    path: nodePath,
                    count: 0,
                    firstIndex: typeof q.originalIndex === 'number' ? q.originalIndex : 0
                });
            } else {
                const node = nodes.get(key);
                if (node && typeof q.originalIndex === 'number') {
                    node.firstIndex = Math.min(node.firstIndex, q.originalIndex);
                }
            }
        }
    });

    nodes.forEach(node => {
        const nodeQuestions = questions.filter(q => isPathPrefix(node.path, q.subsetPath));
        const nodeProgress = computeScopeProgress(nodeQuestions);
        node.count = nodeProgress.correct;
        node.total = nodeProgress.total;
        node.wrong = nodeProgress.wrong;
    });

    const sorted = Array.from(nodes.values()).sort((a, b) => {
        if (a.firstIndex !== b.firstIndex) return a.firstIndex - b.firstIndex;
        return a.path.length - b.path.length;
    });

    sorted.forEach(node => {
        const option = document.createElement('option');
        const labelPath = selectedSubjectPath ? node.path.slice(1) : node.path;
        const depth = labelPath.length;
        const indent = depth > 1 ? `${' '.repeat((depth - 1) * 2)}↳ ` : '';
        option.value = encodeSubsetPath(node.path);
        option.textContent = `${indent}${labelPath[labelPath.length - 1]} (${node.count}/${node.total})`;
        option.title = `Správně: ${node.count}, špatně: ${node.wrong}, celkem: ${node.total}`;
        subsetSelect.appendChild(option);
    });

    if (prevValue && nodes.has(prevValue)) {
        subsetSelect.value = prevValue;
    } else {
        selectedSubsetPath = null;
        subsetSelect.value = '';
    }

    syncSubsetSelects();
}

function populateSubjectFilter() {
    const subjectSelect = document.getElementById('subjectFilterSelect');
    if (!subjectSelect) return;

    const prevValue = selectedSubjectPath || '';
    subjectSelect.innerHTML = '<option value="">📚 Vybrat předmět...</option>';

    const subjects = getAvailableSubjectPaths();
    subjects.forEach(subject => {
        const option = document.createElement('option');
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);
    });

    if (prevValue && subjects.includes(prevValue)) {
        selectedSubjectPath = prevValue;
        subjectSelect.value = prevValue;
    } else {
        selectedSubjectPath = null;
        subjectSelect.value = '';
    }

    subjectSelect.disabled = subjects.length === 0;
    syncSubjectFilterSelects();
}

function changeSubsetFilter(encodedPath) {
    persistCurrentScopeState();
    selectedSubsetPath = decodeSubsetPath(encodedPath);
    const scopeState = getCurrentScopeState();
    currentCardIndex = scopeState ? scopeState.currentCardIndex || 0 : 0;
    syncSubsetSelects();
    updateUI();
}

function changeSubjectFilter(value) {
    persistCurrentScopeState();
    selectedSubjectPath = value || null;
    selectedSubsetPath = null;
    const scopeState = getCurrentScopeState();
    currentCardIndex = scopeState ? scopeState.currentCardIndex || 0 : 0;
    populateSubsetFilter();
    syncSubsetSelects();
    syncSubjectFilterSelects();
    updateUI();
}

// === FILE LOADING LOGIC ===

async function changeSubject(path) {
    if (!path) return;
    
    try {
        debugCardsLog('changeSubject:start', { path, currentSubjectKey, selectedSubsetPath, totalQuestions: questions.length });
        const response = await fetch(path);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        
        const select = document.getElementById('subjectSelect');
        if(select) select.value = path;
        
        // Save choice
        localStorage.setItem('tsi_last_subject', path);
        
        // Set unique key for this subject for persistence
        // We use the filename as ID
        currentSubjectKey = path; 

        debugCardsLog('changeSubject:loaded-json', {
            path,
            title: data && data.title,
            questionCount: Array.isArray(data && data.questions) ? data.questions.length : 0,
            keys: data && typeof data === 'object' ? Object.keys(data).slice(0, 10) : []
        });
        loadQuestions(data);
    } catch (error) {
        console.error("Error loading subject:", error);
        showMessage(`Nepodařilo se načíst soubor: ${path} (Běžíte na localhost?)`, 'error');
    }
}

function loadQuestions(data) {
    if (data.questions && Array.isArray(data.questions)) {
        debugCardsLog('loadQuestions:start', {
            title: data.title || 'TSI Kartičky',
            rawQuestionCount: data.questions.length,
            currentSubjectKey,
            selectedSubsetPath,
            hadProgressState: Boolean(localStorage.getItem('tsi_save_' + currentSubjectKey))
        });
        questions = data.questions.map((q, i) => ({
            ...q,
            originalIndex: i,
            id: q.id || i,
            type: q.type || 'closed',
            subsetPath: normalizeSubsetPath(q)
        }));

        questions = questions.map(q => ({
            ...q,
            category: q.category || (q.subsetPath[0] || '')
        }));

        document.querySelector('.header-title h1').textContent = data.title || "TSI Kartičky";
        
        // If loading custom file, use title as key
        if(currentSubjectKey === 'default') {
             currentSubjectKey = data.title ? 'custom_' + data.title.replace(/\s+/g, '_') : 'custom_file';
        }

    } else {
        showMessage('Neplatný formát JSON souboru!', 'error');
        return;
    }
    
    // Reset internal state
    stats = { correct: 0, wrong: 0, answered: new Set() };
    questionStates = {};
    currentCardIndex = 0;
    viewStates = {};
    selectedSubsetPath = null;
    selectedSubjectPath = null;
    closeWrongAnswerPopup();
    
    // Try to restore progress for this specific subject (Fix issue 2)
    loadProgress();
    populateSubjectFilter();
    populateSubsetFilter();
    
    updateUI();
        debugCardsLog('loadQuestions:after-update', {
            loadedQuestionCount: questions.length,
            currentCardIndex,
            selectedSubsetPath,
            flaggedCount: flaggedQuestions.size,
            viewStateKeys: Object.keys(viewStates),
            stats: {
                correct: stats.correct,
                wrong: stats.wrong,
                answered: stats.answered.size
            }
        });
    showMessage(`Načteno ${questions.length} otázek`, 'success');
}

function loadCreatorHandoff() {
    const sessionStored = sessionStorage.getItem(CREATOR_HANDOFF_KEY);
    const stored = sessionStored || localStorage.getItem(CREATOR_HANDOFF_KEY);
    debugCardsLog('loadCreatorHandoff:start', {
        hasSessionStorage: Boolean(sessionStored),
        hasLocalStorage: Boolean(localStorage.getItem(CREATOR_HANDOFF_KEY))
    });
    if (!stored) {
        debugCardsLog('loadCreatorHandoff:empty');
        return false;
    }

    try {
        const data = JSON.parse(stored);
        localStorage.removeItem(CREATOR_HANDOFF_KEY);
        if (data && Array.isArray(data.questions)) {
            debugCardsLog('loadCreatorHandoff:parsed', {
                title: data.title,
                questionCount: data.questions.length,
                editingIndex: data.editingIndex,
                firstQuestionId: data.questions[0] && data.questions[0].id
            });
            loadQuestions(data);
            return true;
        }
        debugCardsLog('loadCreatorHandoff:invalid-payload', {
            hasData: Boolean(data),
            keys: data && typeof data === 'object' ? Object.keys(data) : []
        });
    } catch (error) {
        console.error('Failed to load creator handoff:', error);
        localStorage.removeItem(CREATOR_HANDOFF_KEY);
        debugCardsLog('loadCreatorHandoff:error', { message: error.message });
    }

    return false;
}

function openCurrentSetInEditor() {
    if (!questions.length) {
        showMessage('Nejsou načtené žádné otázky k otevření v editoru.', 'info');
        return;
    }

    const currentVisibleQuestion = getFilteredQuestions()[currentCardIndex] || questions[0];
    const editingIndex = currentVisibleQuestion
        ? questions.findIndex(q => q.id === currentVisibleQuestion.id || q.originalIndex === currentVisibleQuestion.originalIndex)
        : 0;
    const handoffQuestions = questions.map(q => ({
        ...q,
        subsetPath: Array.isArray(q.subsetPath) ? q.subsetPath.slice() : normalizeSubsetPath(q)
    }));

    sessionStorage.setItem(CREATOR_HANDOFF_KEY, JSON.stringify({
        title: document.querySelector('.header-title h1')?.textContent || 'Kartičky',
        questions: handoffQuestions,
        editingIndex: editingIndex >= 0 ? editingIndex : 0
    }));
    localStorage.removeItem(CREATOR_HANDOFF_KEY);

    window.location.href = 'cards_creator.html?from=cards';
}

function getFilteredQuestions() {
    let filtered = questions;

    if (selectedSubjectPath) {
        filtered = filtered.filter(q => Array.isArray(q.subsetPath) && q.subsetPath[0] === selectedSubjectPath);
    }

    if (selectedSubsetPath && selectedSubsetPath.length > 0) {
        filtered = filtered.filter(q => isPathPrefix(selectedSubsetPath, q.subsetPath || []));
    }

    if (isFlaggedMode) {
        filtered = filtered.filter(q => flaggedQuestions.has(q.id));
    }

    return filtered;
}

// === RENDER LOGIC ===

function renderMath(element) {
    // Fix issue 6: Extended delimiters config for matrices
    renderMathInElement(element, {
        delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\(', right: '\\)', display: false},
            {left: '\\[', right: '\\]', display: true},
            {left: "\\begin{equation}", right: "\\end{equation}", display: true},
            {left: "\\begin{align}", right: "\\end{align}", display: true},
            {left: "\\begin{pmatrix}", right: "\\end{pmatrix}", display: true},
            {left: "\\begin{matrix}", right: "\\end{matrix}", display: true},
            {left: "\\begin{vmatrix}", right: "\\end{vmatrix}", display: true}
        ],
        throwOnError: false,
        trust: true
    });
}

function updateUI() {
    const grid = document.getElementById('cardsGrid');
    grid.innerHTML = '';
    
    const visibleQuestions = ensureVisibleOrder();
    const filteredQuestions = getFilteredQuestions();
    const total = visibleQuestions.length;
    const deckTotal = filteredQuestions.length;

    if (total > 0 && currentCardIndex >= total) {
        currentCardIndex = total - 1;
    }
    
    if (total === 0) {
        grid.innerHTML = `
            <div class="card stack-0">
                <div class="card-content" style="justify-content: center; text-align: center;">
                    <h2>Žádné otázky k zobrazení</h2>
                    <p>${isFlaggedMode ? 'Nemáte žádné označené otázky.' : 'Vyberte předmět nebo nahrajte soubor.'}</p>
                </div>
            </div>`;
        updateStats();
        return;
    }

    for (let i = 0; i < 3; i++) {
        const index = currentCardIndex + i;
        if (index < total) {
            const cardQuestion = visibleQuestions[index];
            const deckIndex = filteredQuestions.findIndex(q => q.id === cardQuestion.id);
            const card = createCard(cardQuestion, deckIndex >= 0 ? deckIndex : index, deckTotal, i);
            grid.appendChild(card);
            
            // Render Math immediately
            renderMath(card);
        }
    }

    updateStats();
    attachSwipeListeners();
    
    document.getElementById('prevBtn').disabled = currentCardIndex === 0;
    document.getElementById('nextBtn').disabled = currentCardIndex >= total - 1;
}

function createCard(q, index, total, stackIndex) {
    const card = document.createElement('div');
    card.className = `card stack-${stackIndex}`;
    card.dataset.questionId = String(q.id);
    if (isQuestionResolved(q.id) || hasQuestionAttempt(q.id)) card.classList.add('answered');
    if (flaggedQuestions.has(q.id)) card.classList.add('flagged');
    
    const isFlagged = flaggedQuestions.has(q.id);
    const hierarchyLabel = Array.isArray(q.subsetPath) && q.subsetPath.length > 0
        ? q.subsetPath.join(' / ')
        : q.category;
    const categoryBadge = hierarchyLabel ? `<div class="category-badge">${hierarchyLabel}</div>` : '';

    // === NEW HEADER STRUCTURE (Fix issues 1, 4, 5) ===
    let html = `
        <div class="card-content">
            <div class="card-header">
                <div class="card-top-row">
                    <div class="card-number">Otázka ${index + 1} / ${total}</div>
                </div>
                <div class="card-meta-row">
                    ${categoryBadge}
                    <button class="flag-btn ${isFlagged ? 'flagged' : ''}" onclick="toggleFlag(${q.id}, event)">
                        ${isFlagged ? '🚩' : '🏳️'}
                    </button>
                </div>
                <div class="card-reminder-actions">
                    <span class="reminder-label">Připomenout za n otázek:</span>
                    ${REMINDER_WINDOWS.map(reminder => {
                        const window = getReminderWindow(reminder.value);
                        return `<button class="reminder-btn" title="Přibližně za ${window.min}-${window.max} karet" onclick="setReminder(${q.id}, ${reminder.value}, event)">${reminder.value}</button>`;
                    }).join('')}
                </div>
            </div>
            
            <div class="card-scrollable-content">
                <div class="card-question">${q.question}</div>
    `;
    // === END NEW HEADER ===

    if (q.type === 'open') {
        const isAnswered = isQuestionResolved(q.id);
        html += `
                <div class="open-question-actions">
                    <button class="action-btn show-answer" onclick="revealOpenAnswer(this)">👁️ Zobrazit odpověď <span class="shortcut-hint">⌨ Enter / Mezerník</span></button>
                    <div class="evaluation-buttons">
                        <button class="action-btn correct-self" onclick="rateOpenAnswer(${q.id}, true)">✅ Věděl jsem <span class="shortcut-hint">⌨ 1 / +</span></button>
                        <button class="action-btn wrong-self" onclick="rateOpenAnswer(${q.id}, false)">❌ Nevěděl jsem <span class="shortcut-hint">⌨ 2 / ě</span></button>
                    </div>
                </div>
                <div class="open-question-content">
                    ${buildAnswerContent(q.answer_parts)}
                </div>
        `;
        if (isAnswered) card.classList.add('answered');
    } else {
        // Fix for isAnswered scope
        const isAnswered = hasQuestionAttempt(q.id);
        
        html += `<div class="card-options">`;
        q.options.forEach((opt, i) => {
            let statusClass = '';
            if (isAnswered) {
                if (i === q.correctIndex) statusClass = 'correct';
            }
            html += `<button class="option-btn ${statusClass}" 
                onclick="checkAnswer(${q.id}, ${i}, this)" 
                ${isAnswered ? 'disabled' : ''}>
                ${String.fromCharCode(65 + i)}) ${opt}
            </button>`;
        });
        html += `</div>`;
        
        if (q.explanation) {
            html += `
                <div class="card-answer ${isAnswered ? 'show' : ''}" id="explanation-${q.id}">
                    <div class="answer-title">Vysvětlení:</div>
                    <div class="answer-text">${formatTextWithLineBreaks(q.explanation)}</div>
                </div>
            `;
        }
    }

    html += `</div></div>`;
    card.innerHTML = html;

    const openAnswerContent = card.querySelector('.open-question-content');
    if (openAnswerContent) renderMath(openAnswerContent);
    const explanation = card.querySelector('.card-answer');
    if (explanation) renderMath(explanation);
    return card;
}

function buildAnswerContent(parts) {
    if (!parts || !Array.isArray(parts)) return '';
    return parts.map(part => {
        let content = `<div class="answer-part">`;
        if (part.title) content += `<h3>${part.title}</h3>`;
        if (part.image) {
            const src = typeof part.image === 'string' ? part.image : part.image.src;
            const caption = (typeof part.image === 'object' && part.image.caption) ? `<div class="answer-caption">${part.image.caption}</div>` : '';
            content += `<img src="${src}" class="answer-image" alt="Obrázek">${caption}`;
        }
        if (part.text) content += `<div class="answer-text">${formatTextWithLineBreaks(part.text)}</div>`;
        if (part.table_data) content += createTable(part.table_data);
        content += `</div>`;
        return content;
    }).join('');
}

function formatTextWithLineBreaks(text) {
    if (text === null || text === undefined) return '';
    return String(text).replace(/\r\n|\r|\n/g, '<br>');
}

function createTable(data) {
    if (!data || !Array.isArray(data) || data.length === 0) return '';
    let html = '<table class="custom-table"><tbody>';
    data.forEach(row => {
        html += '<tr>';
        Object.values(row).forEach(val => html += `<td>${val}</td>`);
        html += '</tr>';
    });
    html += '</tbody></table>';
    return html;
}

function checkAnswer(qId, optionIndex, btnElement) {
    if (hasQuestionAttempt(qId)) return;
    const question = questions.find(q => q.id === qId);
    const isCorrect = optionIndex === question.correctIndex;

    recordQuestionOutcome(qId, isCorrect);

    const card = btnElement.closest('.card');
    const options = card.querySelectorAll('.option-btn');
    options[question.correctIndex].classList.add('correct');
    if (!isCorrect) btnElement.classList.add('wrong');
    
    const expl = card.querySelector('.card-answer');
    if (expl) expl.classList.add('show');
    
    // Render math in explanation if needed
    if(expl) renderMath(expl);
    
    card.classList.add('answered');
    updateStats();
}

function revealOpenAnswer(btn) {
    const card = btn.closest('.card');
    const content = card.querySelector('.open-question-content');
    const evalBtns = card.querySelector('.evaluation-buttons');
    btn.style.display = 'none';
    content.classList.add('visible');
    evalBtns.classList.add('visible');
    
    renderMath(content);
}

function rateOpenAnswer(qId, knewIt) {
    if (knewIt) {
        if (isQuestionResolved(qId)) return;
        recordQuestionOutcome(qId, true);
        document.querySelector('.card.stack-0').classList.add('answered');
        updateStats();
        setTimeout(() => nextCard(), 300);
    } else {
        openWrongAnswerPopup(qId);
    }
}

function nextCard() {
    const scopeState = getCurrentScopeState();
    const visibleQuestions = ensureVisibleOrder();
    const total = visibleQuestions.length;

    if (currentCardIndex < total - 1) {
        const currentCard = document.querySelector('.card.stack-0');
        currentCard.classList.add('swipe-left');
        const currentQuestion = visibleQuestions[currentCardIndex];
        setTimeout(() => {
            if (currentQuestion) {
                const currentKey = getQuestionIdKey(currentQuestion.id);
                const removalIndex = scopeState.order.findIndex(id => getQuestionIdKey(id) === currentKey);
                if (removalIndex !== -1 && scopeState.reminders[currentKey]) {
                    scopeState.order.splice(removalIndex, 1);
                    if (removalIndex < currentCardIndex) {
                        currentCardIndex--;
                    }
                } else {
                    currentCardIndex++;
                }
            } else {
                currentCardIndex++;
            }

            advanceReminderTimers(scopeState);

            if (currentCardIndex >= scopeState.order.length) {
                currentCardIndex = Math.max(0, scopeState.order.length - 1);
            }

            saveProgress();
            updateUI();
        }, 200);
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateUI();
    }
}

function toggleFlag(qId, event) {
    if (event) event.stopPropagation();
    if (flaggedQuestions.has(qId)) flaggedQuestions.delete(qId);
    else flaggedQuestions.add(qId);
    
    const btn = event.target.closest('.flag-btn');
    if (btn) {
        if (flaggedQuestions.has(qId)) {
            btn.textContent = '🚩';
            btn.classList.add('flagged');
        } else {
            btn.textContent = '🏳️';
            btn.classList.remove('flagged');
        }
    }
    saveProgress();
}

function toggleFlaggedMode() {
    persistCurrentScopeState();
    isFlaggedMode = !isFlaggedMode;
    document.getElementById('onlyFlagged').checked = isFlaggedMode;
    const scopeState = getCurrentScopeState();
    currentCardIndex = scopeState ? scopeState.currentCardIndex || 0 : 0;
    updateUI();
}

function updateStats() {
    const visibleQuestions = ensureVisibleOrder();
    const filteredQuestions = getFilteredQuestions();
    const total = filteredQuestions.length;
    const scopeProgress = computeScopeProgress(filteredQuestions);
    const scopeState = getCurrentScopeState();
    const pendingReminderIds = Object.keys(scopeState.reminders || {});
    const hiddenByReminders = Math.max(0, filteredQuestions.length - visibleQuestions.length);

    stats.correct = scopeProgress.correct;
    stats.wrong = scopeProgress.wrong;
    stats.answered = new Set(filteredQuestions.filter(q => hasQuestionAttempt(q.id)).map(q => q.id));

    const totalAnswered = scopeProgress.attempted;
    const actualRemaining = scopeProgress.remaining;
    const accuracy = scopeProgress.accuracy;

    debugCardsLog('updateStats', {
        currentSubjectKey,
        selectedSubsetPath,
        loadedQuestionCount: questions.length,
        filteredQuestionCount: filteredQuestions.length,
        visibleTotal: total,
        hiddenByReminders,
        pendingReminderCount: pendingReminderIds.length,
        pendingReminderIds,
        answeredInCurrentFilter: scopeProgress.attempted,
        totalAnswered,
        actualRemaining,
        accuracy,
        progressPercent: scopeProgress.percent,
        currentCardIndex,
        visibleQuestionIds: visibleQuestions.slice(0, 10).map(q => q.id),
        scopeKey: getCurrentScopeKey(),
        orderSize: scopeState.order.length,
        reminderSequences: Object.fromEntries(Object.entries(scopeState.reminders || {}).map(([id, reminder]) => [id, reminder.sequence]))
    });

    document.getElementById('totalCount').textContent = total;
    document.getElementById('remainingCount').textContent = actualRemaining;
    document.getElementById('correctCount').textContent = stats.correct;
    document.getElementById('wrongCount').textContent = stats.wrong;
    document.getElementById('accuracy').textContent = `${accuracy}%`;

    document.getElementById('mobileRemaining').textContent = actualRemaining;
    document.getElementById('mobileAccuracy').textContent = `${accuracy}%`;

    const progress = scopeProgress.percent;
    
    document.getElementById('progressBar').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `🎯 Pokrok: ${Math.round(progress)}%`;
    
    saveProgress();
}

function resetStats() {
    currentCardIndex = 0;
    stats = { correct: 0, wrong: 0, answered: new Set() };
    // DO NOT updateStats() here blindly if called from loadQuestions, 
    // because loadProgress will overwrite it immediately.
}

function resetProgress() {
    if(confirm("Opravdu chcete resetovat celý postup?")) {
        stats = { correct: 0, wrong: 0, answered: new Set() };
        questionStates = {};
        currentCardIndex = 0;
        flaggedQuestions.clear();
        viewStates = {};
        closeWrongAnswerPopup();
        saveProgress(); // Save the wipe
        updateUI();
    }
}

function clearAppCache() {
    const message = [
        'Opravdu chcete smazat celou cache aplikace?',
        'Tím se smaže postup, poslední předmět, dark mode, creator draft i handoff.'
    ].join('\n');

    if (!confirm(message)) return;

    const localKeysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key) continue;
        if (
            key.startsWith('tsi_save_') ||
            key === 'tsi_last_subject' ||
            key === 'darkMode' ||
            key === 'cards_creator_draft_v1' ||
            key === CREATOR_HANDOFF_KEY
        ) {
            localKeysToRemove.push(key);
        }
    }

    localKeysToRemove.forEach(key => localStorage.removeItem(key));
    sessionStorage.removeItem(CREATOR_HANDOFF_KEY);

    questions = [];
    currentCardIndex = 0;
    stats = { correct: 0, wrong: 0, answered: new Set() };
    questionStates = {};
    flaggedQuestions.clear();
    isFlaggedMode = false;
    selectedSubsetPath = null;
    selectedSubjectPath = null;
    viewStates = {};
    pendingWrongAnswer = null;

    debugCardsLog('clearAppCache:done', { removedLocalKeys: localKeysToRemove, sessionHandOffCleared: true });
    window.location.reload();
}

function downloadFailed() {
    const exportData = {
        title: "TSI - Export Chyb",
        questions: questions.filter(q => flaggedQuestions.has(q.id))
    };
    if (exportData.questions.length === 0) {
        showMessage("Žádné označené otázky k exportu", "info");
        return;
    }
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
    const a = document.createElement('a');
    a.href = dataStr;
    a.download = "tsi_export_chyb.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
}

// === PERSISTENCE (Fix issue 2) ===
function saveProgress() {
    persistCurrentScopeState();
    const state = {
        version: 2,
        idx: currentCardIndex,
        subjectPath: selectedSubjectPath,
        subsetPath: selectedSubsetPath,
        flags: Array.from(flaggedQuestions),
        viewStates,
        questionStates
    };
    // Use unique key per subject
    localStorage.setItem('tsi_save_' + currentSubjectKey, JSON.stringify(state));
}

function loadProgress() {
    const saved = localStorage.getItem('tsi_save_' + currentSubjectKey);
    if (saved) {
        try {
            const state = JSON.parse(saved);
            // Restore only if index is valid within new set
            if (state.questionStates && typeof state.questionStates === 'object') {
                questionStates = state.questionStates;
            } else if (state.stats && state.stats.answered) {
                questionStates = {};
                state.stats.answered.forEach(qId => {
                    questionStates[getQuestionStateKey(qId)] = { correct: true, wrong: 0 };
                });
            }

            if(state.idx < questions.length) currentCardIndex = state.idx || 0;

            if (Array.isArray(state.subsetPath)) {
                selectedSubsetPath = state.subsetPath;
            }

            if (typeof state.subjectPath === 'string' && state.subjectPath.trim()) {
                selectedSubjectPath = state.subjectPath;
            }
            
            if (state.flags) flaggedQuestions = new Set(state.flags);

            if (state.viewStates && typeof state.viewStates === 'object') {
                viewStates = state.viewStates;
            }

            const scopeState = getCurrentScopeState();
            if (scopeState && typeof scopeState.currentCardIndex === 'number') {
                currentCardIndex = scopeState.currentCardIndex;
            }
        } catch (e) { console.error("Save load error", e); }
    }

    syncSubsetSelects();
    syncSubjectFilterSelects();
}

function attachSwipeListeners() {
    const card = document.querySelector('.card.stack-0');
    if (!card) return;
    card.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        isDragging = true;
        currentCard = card;
        card.style.transition = 'none';
    }, {passive: true});
    card.addEventListener('touchmove', e => {
        if (!isDragging) return;
        const diffX = e.touches[0].clientX - touchStartX;
        if (Math.abs(diffX) > Math.abs(e.touches[0].clientY - touchStartY)) {
            card.style.transform = `translateX(${diffX}px) rotate(${diffX * 0.1}deg)`;
        }
    }, {passive: true});
    const endSwipe = (e) => {
        if (!isDragging) return;
        isDragging = false;
        card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        const diffX = (e.changedTouches ? e.changedTouches[0].clientX : e.clientX) - touchStartX;
        if (diffX > 100) prevCard();
        else if (diffX < -100) nextCard();
        else card.style.transform = 'translateY(0) scale(1)';
    };
    card.addEventListener('touchend', endSwipe);
    card.addEventListener('touchcancel', endSwipe);
}

// File Inputs
document.getElementById('fileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                // Reset select because we are loading custom file
                currentSubjectKey = 'custom_' + file.name;
                document.getElementById('subjectSelect').value = "";
                loadQuestions(JSON.parse(e.target.result));
            } catch (err) { showMessage('Chyba JSON!', 'error'); }
        };
        reader.readAsText(file);
    }
});

document.getElementById('ankiInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const lines = e.target.result.split('\n');
                const newQuestions = [];
                lines.forEach((line, index) => {
                    if (!line.trim() || line.startsWith('#')) return;
                    const parts = line.split('\t');
                    if (parts.length >= 2) {
                        newQuestions.push({
                            id: Date.now() + index,
                            type: 'open',
                            category: 'Anki Import',
                            question: parts[0],
                            answer_parts: [{ text: parts[1] }]
                        });
                    }
                });
                currentSubjectKey = 'anki_' + file.name;
                document.getElementById('subjectSelect').value = "";
                loadQuestions({title: "Import Anki", questions: newQuestions});
                showMessage(`Importováno ${questions.length} otázek!`, 'success');
            } catch (err) { showMessage('Chyba importu!', 'error'); }
        };
        reader.readAsText(file);
    }
});

function showMessage(text, type = 'info') {
    const container = document.getElementById('messageContainer');
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    container.innerHTML = '';
    container.appendChild(message);
    setTimeout(() => message.remove(), 5000);
}

// Startup Logic
window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const fromCreator = params.get('from') === 'creator';
    const subjectParam = params.get('subject');

    if (fromCreator && loadCreatorHandoff()) {
        return;
    }

    if (subjectParam) {
        await changeSubject('json/szz-open-micro.json');
        if (getAvailableSubjectPaths().includes(subjectParam)) {
            changeSubjectFilter(subjectParam);
        }
        return;
    }

    // Check if there was a last selected subject
    const lastSubject = localStorage.getItem('tsi_last_subject');

    if (lastSubject) {
        changeSubject(lastSubject);
    } else {
        updateUI();
    }
});

function isBlockingDialogOpen() {
    return document.querySelector('.menu-overlay')?.classList.contains('active')
        || document.querySelector('.wrong-answer-overlay')?.classList.contains('active');
}

function isWrongAnswerPopupOpen() {
    return document.getElementById('wrongAnswerPopup')?.classList.contains('active');
}

function getWrongAnswerShortcutChoice(event) {
    const key = event.key;
    const code = event.code;

    const choices = [
        { type: 'remind', baseValue: 10, keys: ['1', '+'], codes: ['Digit1', 'Numpad1'] },
        { type: 'remind', baseValue: 20, keys: ['2', 'ě'], codes: ['Digit2', 'Numpad2'] },
        { type: 'remind', baseValue: 50, keys: ['3', 'š'], codes: ['Digit3', 'Numpad3'] },
        { type: 'remind', baseValue: 100, keys: ['4', 'č'], codes: ['Digit4', 'Numpad4'] },
        { type: 'random', baseValue: null, keys: ['5', 'ř'], codes: ['Digit5', 'Numpad5'] }
    ];

    return choices.find(choice => choice.keys.includes(key) || choice.codes.includes(code)) || null;
}

function handleWrongAnswerShortcut(event) {
    const choice = getWrongAnswerShortcutChoice(event);
    if (!choice) return false;

    if (choice.type === 'random') {
        handleWrongAnswerChoice('random', null, event);
    } else {
        handleWrongAnswerChoice('remind', choice.baseValue, event);
    }

    return true;
}
