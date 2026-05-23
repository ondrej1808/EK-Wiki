// Minimal cards creator logic: list, edit, import/export, preview, autosave
(function(){
  const LS_KEY = 'cards_creator_draft_v1';
  let cards = [];
  let editingIndex = -1;

  const q = sel => document.querySelector(sel);
  const qa = sel => document.querySelectorAll(sel);

  const els = {
    newCardBtn: q('#newCardBtn'),
    importBtn: q('#importBtn'),
    exportBtn: q('#exportBtn'),
    importFile: q('#importFile'),
    cardsList: q('#cardsList'),
    cardType: q('#cardType'),
    subsetPath: q('#subsetPath'),
    question: q('#question'),
    optionsList: q('#optionsList'),
    addOptionBtn: q('#addOptionBtn'),
    answerText: q('#answerText'),
    imageFile: q('#imageFile'),
    saveCardBtn: q('#saveCardBtn'),
    deleteCardBtn: q('#deleteCardBtn'),
    clearDraftBtn: q('#clearDraftBtn'),
    previewContent: q('#previewContent'),
    closedOptions: q('#closedOptions')
  };

  function init(){
    bind();
    loadDraft();
    renderList();
    renderFormFromCard(null);
    renderPreview();
  }

  function bind(){
    els.newCardBtn.addEventListener('click', ()=>{ editingIndex = -1; renderFormFromCard(null); });
    els.importBtn.addEventListener('click', ()=> els.importFile.click());
    els.importFile.addEventListener('change', handleImportFile);
    els.exportBtn.addEventListener('click', exportJSON);
    els.cardType.addEventListener('change', toggleType);
    els.addOptionBtn.addEventListener('click', addOptionField);
    els.saveCardBtn.addEventListener('click', saveCardFromForm);
    els.deleteCardBtn.addEventListener('click', deleteCurrentCard);
    els.clearDraftBtn.addEventListener('click', clearDraft);
    els.question.addEventListener('input', renderPreview);
    els.answerText.addEventListener('input', renderPreview);
    els.optionsList.addEventListener('input', renderPreview);
    els.imageFile.addEventListener('change', handleImageFile);
  }

  function toggleType(){
    const t = els.cardType.value;
    els.closedOptions.style.display = t === 'closed' ? 'block' : 'none';
    els.openAnswer.style.display = t === 'open' ? 'block' : 'none';
    renderPreview();
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
    els.cardsList.innerHTML = '';
    cards.forEach((c,i)=>{
      const el = document.createElement('div'); el.className='card-row';
      const title = document.createElement('div'); title.textContent = (c.question||'[no question]').slice(0,60);
      const actions = document.createElement('div');
      const editBtn = document.createElement('button'); editBtn.textContent='Edit'; editBtn.addEventListener('click', ()=>{ editingIndex=i; renderFormFromCard(c); });
      const dupBtn = document.createElement('button'); dupBtn.textContent='Dup'; dupBtn.addEventListener('click', ()=>{ cards.splice(i+1,0,JSON.parse(JSON.stringify(c))); saveDraft(); renderList(); });
      const upBtn = document.createElement('button'); upBtn.textContent='↑'; upBtn.title='Move up'; upBtn.addEventListener('click', ()=>{ if(i>0){ const t=cards[i-1]; cards[i-1]=cards[i]; cards[i]=t; saveDraft(); renderList(); } });
      const downBtn = document.createElement('button'); downBtn.textContent='↓'; downBtn.title='Move down'; downBtn.addEventListener('click', ()=>{ if(i<cards.length-1){ const t=cards[i+1]; cards[i+1]=cards[i]; cards[i]=t; saveDraft(); renderList(); } });
      const delBtn = document.createElement('button'); delBtn.textContent='Del'; delBtn.addEventListener('click', ()=>{ cards.splice(i,1); saveDraft(); renderList(); });
      actions.appendChild(editBtn); actions.appendChild(dupBtn); actions.appendChild(delBtn);
      actions.appendChild(upBtn); actions.appendChild(downBtn);
      el.appendChild(title); el.appendChild(actions); els.cardsList.appendChild(el);
    });
  }

  function renderFormFromCard(card){
    if(!card){ els.cardType.value='open'; els.subsetPath.value=''; els.question.value=''; els.answerText.value=''; els.optionsList.innerHTML=''; addOptionField(); toggleType(); editingIndex=-1; return; }
    els.cardType.value = card.type || 'open';
    els.subsetPath.value = (card.subsetPath||[]).join(',');
    els.question.value = card.question || '';
    els.answerText.value = card.answer || '';
    els.optionsList.innerHTML='';
    if(card.options && card.options.length){ card.options.forEach(o=>addOptionField(o));
      // mark correct index if present
      if(typeof card.correctIndex === 'number'){
        const radios = els.optionsList.querySelectorAll('input[type="radio"]');
        if(radios[card.correctIndex]) radios[card.correctIndex].checked = true;
      }
    }
    toggleType(); renderPreview();
  }

  function saveCardFromForm(){
    const type = els.cardType.value;
    const qtext = els.question.value.trim();
    const subset = els.subsetPath.value.split(',').map(s=>s.trim()).filter(Boolean);
    const image = currentImageData || null;
    let card = { type: type, question: qtext, subsetPath: subset };
    if(type==='open'){ card.answer_parts = [{ title:'', text: els.answerText.value || '' }]; }
    else { // closed
      const options = Array.from(els.optionsList.querySelectorAll('input[type="text"]')).map(i=>i.value);
      const radios = Array.from(els.optionsList.querySelectorAll('input[type="radio"]'));
      const correctIndex = radios.findIndex(r=>r.checked);
      card.options = options; card.correctIndex = correctIndex>=0?correctIndex:0;
    }
    if(image) card.image = { src: image };

    if(editingIndex>=0){ cards[editingIndex] = card; }
    else { cards.push(card); editingIndex = cards.length-1; }
    saveDraft(); renderList(); renderPreview();
  }

  function deleteCurrentCard(){ if(editingIndex>=0){ cards.splice(editingIndex,1); editingIndex=-1; renderList(); renderFormFromCard(null); saveDraft(); } }

  function handleImportFile(e){ const f = e.target.files && e.target.files[0]; if(!f) return; const r=new FileReader(); r.onload = ev=>{ try{ const obj = JSON.parse(ev.target.result); if(obj.questions) cards = obj.questions; else if(Array.isArray(obj)) cards = obj; else alert('Unrecognized JSON'); saveDraft(); renderList(); }catch(err){ alert('Invalid JSON: '+err.message); } }; r.readAsText(f); }

  function exportJSON(){ const out = { title: 'Created with cards_creator', questions: cards }; const blob = new Blob([JSON.stringify(out,null,2)],{type:'application/json'}); const url = URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='cards_export.json'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url); }

  function saveDraft(){ localStorage.setItem(LS_KEY, JSON.stringify(cards)); }
  function loadDraft(){ try{ const d = localStorage.getItem(LS_KEY); if(d){ cards = JSON.parse(d); } }catch(e){ cards = []; } }
  function clearDraft(){ if(confirm('Clear draft?')){ localStorage.removeItem(LS_KEY); cards=[]; renderList(); renderFormFromCard(null); } }

  let currentImageData = null;
  function handleImageFile(e){ const f = e.target.files && e.target.files[0]; if(!f) return; const r=new FileReader(); r.onload=ev=>{ currentImageData = ev.target.result; renderPreview(); }; r.readAsDataURL(f); }

  function renderPreview(){ const type = els.cardType.value; const qtxt = els.question.value; const answer = els.answerText.value; let html = '';
    html += '<div><strong>Q:</strong><div>'+escapeHtml(qtxt)+'</div></div>';
    if(type==='open'){ html += '<div><strong>A:</strong><div>'+escapeHtml(answer)+'</div></div>'; }
    else {
      const optTexts = Array.from(els.optionsList.querySelectorAll('input[type="text"]')).map(i=>i.value);
      html += '<div><strong>Options:</strong><ol>' + optTexts.map(o=>'<li>'+escapeHtml(o)+'</li>').join('') + '</ol></div>';
    }
    if(currentImageData) html += '<div><img src="'+currentImageData+'" style="max-width:200px"></div>';
    els.previewContent.innerHTML = html;
    try{ renderMathInElement(els.previewContent, {delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}]}); }catch(e){}
  }

  function escapeHtml(s){ if(!s) return ''; return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('\n','<br>'); }

  // init on DOM ready
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else init();

})();
