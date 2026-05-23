let questions = [];
let currentCardIndex = 0;
// Current Subject Key for local storage
let currentSubjectKey = 'default'; 

let stats = {
    correct: 0,
    wrong: 0,
    answered: new Set()
};
let flaggedQuestions = new Set();
let isFlaggedMode = false;
let selectedSubsetPath = null;

const SUBSET_VALUE_SEPARATOR = '||>';

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
document.addEventListener('keydown', (e) => {
    // Only navigate if no modal is open (menu)
    if (document.querySelector('.menu-overlay').classList.contains('active')) return;
    
    if (e.key === 'ArrowRight') {
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
        clonedSelect.onchange = (e) => {
            changeSubject(e.target.value);
            toggleMenu();
        };
        selectContainer.appendChild(clonedSelect);
        menuContent.appendChild(selectContainer);

        const originalSubsetSelect = document.getElementById('subsetSelect');
        if (originalSubsetSelect) {
            const subsetContainer = document.createElement('div');
            subsetContainer.className = 'select-wrapper';
            subsetContainer.style.marginBottom = '12px';

            const clonedSubsetSelect = originalSubsetSelect.cloneNode(true);
            clonedSubsetSelect.id = 'mobileSubsetSelect';
            clonedSubsetSelect.style.width = '100%';
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
            { text: '↺ Resetovat', class: 'btn-secondary', action: "resetProgress()" },
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

function populateSubsetFilter() {
    const subsetSelect = document.getElementById('subsetSelect');
    if (!subsetSelect) return;

    const prevValue = encodeSubsetPath(selectedSubsetPath || []);
    subsetSelect.innerHTML = '<option value="">🧭 Všechny subsety</option>';

    const nodes = new Map();
    questions.forEach(q => {
        const path = Array.isArray(q.subsetPath) ? q.subsetPath : [];
        for (let i = 1; i <= path.length; i++) {
            const nodePath = path.slice(0, i);
            const key = encodeSubsetPath(nodePath);
            if (!nodes.has(key)) {
                nodes.set(key, {
                    path: nodePath,
                    count: 0
                });
            }
        }
    });

    nodes.forEach(node => {
        node.count = questions.filter(q => isPathPrefix(node.path, q.subsetPath)).length;
    });

    const sorted = Array.from(nodes.values()).sort((a, b) => {
        const aKey = a.path.join(' / ').toLowerCase();
        const bKey = b.path.join(' / ').toLowerCase();
        return aKey.localeCompare(bKey, 'cs');
    });

    sorted.forEach(node => {
        const option = document.createElement('option');
        const depth = node.path.length;
        const indent = depth > 1 ? `${' '.repeat((depth - 1) * 2)}↳ ` : '';
        option.value = encodeSubsetPath(node.path);
        option.textContent = `${indent}${node.path[node.path.length - 1]} (${node.count})`;
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

function changeSubsetFilter(encodedPath) {
    selectedSubsetPath = decodeSubsetPath(encodedPath);
    currentCardIndex = 0;
    syncSubsetSelects();
    updateUI();
}

// === FILE LOADING LOGIC ===

async function changeSubject(path) {
    if (!path) return;
    
    try {
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

        loadQuestions(data);
    } catch (error) {
        console.error("Error loading subject:", error);
        showMessage(`Nepodařilo se načíst soubor: ${path} (Běžíte na localhost?)`, 'error');
    }
}

function loadQuestions(data) {
    if (data.questions && Array.isArray(data.questions)) {
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
    currentCardIndex = 0;
    
    // Try to restore progress for this specific subject (Fix issue 2)
    loadProgress();
    populateSubsetFilter();
    
    updateUI();
    showMessage(`Načteno ${questions.length} otázek`, 'success');
}

function getFilteredQuestions() {
    let filtered = questions;

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
    
    const filteredQuestions = getFilteredQuestions();
    const total = filteredQuestions.length;
    
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
            const card = createCard(filteredQuestions[index], index, total, i);
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
    if (stats.answered.has(q.id)) card.classList.add('answered');
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
            </div>
            
            <div class="card-scrollable-content">
                <div class="card-question">${q.question}</div>
    `;
    // === END NEW HEADER ===

    if (q.type === 'open') {
        html += `
                <div class="open-question-actions">
                    <button class="action-btn show-answer" onclick="revealOpenAnswer(this)">👁️ Zobrazit odpověď</button>
                    <div class="evaluation-buttons">
                        <button class="action-btn correct-self" onclick="rateOpenAnswer(${q.id}, true)">✅ Věděl jsem</button>
                        <button class="action-btn wrong-self" onclick="rateOpenAnswer(${q.id}, false)">❌ Nevěděl jsem</button>
                    </div>
                </div>
                <div class="open-question-content">
                    ${buildAnswerContent(q.answer_parts)}
                </div>
        `;
    } else {
        // Fix for isAnswered scope
        const isAnswered = stats.answered.has(q.id);
        
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
                    <div class="answer-text">${q.explanation}</div>
                </div>
            `;
        }
    }

    html += `</div></div>`;
    card.innerHTML = html;
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
        if (part.text) content += `<div class="answer-text">${part.text}</div>`;
        if (part.table_data) content += createTable(part.table_data);
        content += `</div>`;
        return content;
    }).join('');
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
    if (stats.answered.has(qId)) return;
    const question = questions.find(q => q.id === qId);
    const isCorrect = optionIndex === question.correctIndex;

    if (isCorrect) stats.correct++;
    else stats.wrong++;
    stats.answered.add(qId);

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
    if (stats.answered.has(qId)) return;
    if (knewIt) stats.correct++;
    else stats.wrong++;
    stats.answered.add(qId);
    document.querySelector('.card.stack-0').classList.add('answered');
    updateStats();
    setTimeout(() => nextCard(), 300);
}

function nextCard() {
    const total = getFilteredQuestions().length;
    if (currentCardIndex < total - 1) {
        const currentCard = document.querySelector('.card.stack-0');
        currentCard.classList.add('swipe-left');
        setTimeout(() => {
            currentCardIndex++;
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
    isFlaggedMode = !isFlaggedMode;
    document.getElementById('onlyFlagged').checked = isFlaggedMode;
    currentCardIndex = 0;
    updateUI();
}

function updateStats() {
    const total = getFilteredQuestions().length;
    const answeredInCurrentFilter = getFilteredQuestions().filter(q => stats.answered.has(q.id)).length;
    
    // Zjistíme počet skutečně zodpovězených unikátních otázek
    const totalAnswered = stats.answered.size; 
    
    const actualRemaining = total - answeredInCurrentFilter;
    const accuracy = totalAnswered === 0 ? 0 : Math.round((stats.correct / totalAnswered) * 100);

    document.getElementById('totalCount').textContent = total;
    document.getElementById('remainingCount').textContent = actualRemaining;
    document.getElementById('correctCount').textContent = stats.correct;
    document.getElementById('wrongCount').textContent = stats.wrong;
    document.getElementById('accuracy').textContent = `${accuracy}%`;

    document.getElementById('mobileRemaining').textContent = actualRemaining;
    document.getElementById('mobileAccuracy').textContent = `${accuracy}%`;

    // OPRAVA ZDE: Progress bar se nyní počítá podle počtu zodpovězených / celkem
    const progress = total === 0 ? 0 : (answeredInCurrentFilter / total) * 100;
    
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
        currentCardIndex = 0;
        flaggedQuestions.clear();
        saveProgress(); // Save the wipe
        updateUI();
    }
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
    const state = {
        idx: currentCardIndex,
        subsetPath: selectedSubsetPath,
        flags: Array.from(flaggedQuestions),
        stats: {
            correct: stats.correct,
            wrong: stats.wrong,
            answered: Array.from(stats.answered)
        }
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
            if(state.idx < questions.length) currentCardIndex = state.idx || 0;

            if (Array.isArray(state.subsetPath)) {
                selectedSubsetPath = state.subsetPath;
            }
            
            if (state.flags) flaggedQuestions = new Set(state.flags);
            
            if (state.stats) {
                stats.correct = state.stats.correct || 0;
                stats.wrong = state.stats.wrong || 0;
                if(state.stats.answered) stats.answered = new Set(state.stats.answered);
            }
        } catch (e) { console.error("Save load error", e); }
    }

    syncSubsetSelects();
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
window.addEventListener('load', () => {
    // Check if there was a last selected subject
    const lastSubject = localStorage.getItem('tsi_last_subject');
    
    if (lastSubject) {
        changeSubject(lastSubject);
    } else {
        updateUI();
    }
});