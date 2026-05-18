/**
 * abcd.js — ABCD quiz page logic
 */
(function () {
  let questions = [];
  let filtered = [];
  let currentIndex = 0;
  let selected = null;
  let checked = false;
  let keyHandler = null;

  /* ── DOM refs ── */
  let sectionSelect, shuffleBtn, progressLabel;
  let questionEl, optionsEl, actionsEl, explanationEl, navRow;
  let btnCheck, btnPrev, btnNext;

  function escHtml(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function buildSectionOptions() {
    const sections = (window.ABCD_DATA && window.ABCD_DATA.sections) || [];
    let opts = '<option value="">Všechny sekce</option>';
    sections.forEach(sec => {
      opts += `<option value="${sec.index}">${sec.index}. ${escHtml(sec.title)}</option>`;
    });
    sectionSelect.innerHTML = opts;
  }

  function applyFilter() {
    const val = sectionSelect.value;
    if (!val) {
      filtered = [...questions];
    } else {
      const idx = parseInt(val, 10);
      filtered = questions.filter(q => q.section_index === idx);
    }
    currentIndex = 0;
    renderQuestion();
  }

  function shuffle() {
    for (let i = filtered.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
    }
    currentIndex = 0;
    renderQuestion();
  }

  function updateProgress() {
    if (progressLabel) progressLabel.textContent = `${currentIndex + 1} / ${filtered.length}`;
  }

  function renderQuestion() {
    if (!filtered.length) {
      questionEl.textContent = 'Žádné otázky v této sekci.';
      optionsEl.innerHTML = '';
      updateProgress();
      return;
    }
    selected = null;
    checked = false;
    const q = filtered[currentIndex];
    questionEl.textContent = q.question;

    const opts = ['a','b','c','d'];
    optionsEl.innerHTML = opts.map(key => {
      const text = q.options[key] || '';
      return `
        <button class="abcd-option" data-key="${key}">
          <span class="option-label">${key.toUpperCase()}</span>
          <span class="option-text">${escHtml(text)}</span>
        </button>`;
    }).join('');

    explanationEl.classList.remove('visible');
    explanationEl.textContent = '';
    btnCheck.disabled = true;
    btnCheck.style.display = '';
    updateProgress();
    updateNavButtons();

    // Bind option clicks
    optionsEl.querySelectorAll('.abcd-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (checked) return;
        selectOption(btn.dataset.key);
      });
    });
  }

  function selectOption(key) {
    if (checked) return;
    selected = key;
    optionsEl.querySelectorAll('.abcd-option').forEach(btn => {
      btn.classList.toggle('selected', btn.dataset.key === key);
    });
    btnCheck.disabled = false;
  }

  function checkAnswer() {
    if (checked) return;
    checked = true;
    const q = filtered[currentIndex];
    const correct = q.correct;

    optionsEl.querySelectorAll('.abcd-option').forEach(btn => {
      btn.classList.add('disabled');
      if (btn.dataset.key === correct) btn.classList.add('correct');
      if (btn.dataset.key === selected && selected !== correct) btn.classList.add('wrong');
    });

    if (q.explanation) {
      explanationEl.textContent = q.explanation;
      explanationEl.classList.add('visible');
    }

    btnCheck.disabled = true;
    updateNavButtons();
  }

  function updateNavButtons() {
    if (btnPrev) btnPrev.disabled = currentIndex === 0;
    if (btnNext) btnNext.disabled = currentIndex >= filtered.length - 1;
  }

  function goNext() {
    if (currentIndex < filtered.length - 1) {
      currentIndex++;
      renderQuestion();
    }
  }

  function goPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion();
    }
  }

  function buildDOM() {
    const page = document.getElementById('page-abcd');
    page.innerHTML = `
      <div class="toolbar">
        <select id="ab-section-select"></select>
        <button class="btn btn-ghost" id="ab-shuffle">&#x21BA; Zamíchat</button>
        <span class="progress-label" id="ab-progress">1 / 151</span>
      </div>

      <div class="abcd-card">
        <div class="abcd-card-header" id="ab-section-label">Sekce</div>
        <div class="abcd-question" id="ab-question">…</div>
        <div class="abcd-options" id="ab-options"></div>
        <div class="abcd-actions" id="ab-actions">
          <button class="btn btn-primary" id="ab-check" disabled>Zkontrolovat</button>
        </div>
        <div class="abcd-explanation" id="ab-explanation"></div>
      </div>

      <div class="abcd-nav-row">
        <button class="btn btn-secondary btn-nav" id="ab-prev">&#8592;</button>
        <button class="btn btn-secondary btn-nav" id="ab-next">&#8594;</button>
      </div>
    `;
  }

  function bindDOM() {
    sectionSelect  = document.getElementById('ab-section-select');
    shuffleBtn     = document.getElementById('ab-shuffle');
    progressLabel  = document.getElementById('ab-progress');
    questionEl     = document.getElementById('ab-question');
    optionsEl      = document.getElementById('ab-options');
    actionsEl      = document.getElementById('ab-actions');
    explanationEl  = document.getElementById('ab-explanation');
    btnCheck       = document.getElementById('ab-check');
    btnPrev        = document.getElementById('ab-prev');
    btnNext        = document.getElementById('ab-next');
  }

  function updateSectionLabel() {
    const labelEl = document.getElementById('ab-section-label');
    if (!labelEl || !filtered.length) return;
    const q = filtered[currentIndex];
    if (labelEl) labelEl.textContent = `Sekce ${q.section_index}: ${q.section}`;
  }

  function bindEvents() {
    sectionSelect.addEventListener('change', applyFilter);
    shuffleBtn.addEventListener('click', shuffle);
    btnCheck.addEventListener('click', checkAnswer);
    btnPrev.addEventListener('click', goPrev);
    btnNext.addEventListener('click', goNext);

    keyHandler = function (e) {
      if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
      if (e.key === 'ArrowRight') { e.preventDefault(); if (!btnNext.disabled) goNext(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); if (!btnPrev.disabled) goPrev(); }
      else if (e.key === 'Enter') { e.preventDefault(); if (!checked && selected) checkAnswer(); }
      else if (['a','b','c','d'].includes(e.key.toLowerCase())) {
        e.preventDefault();
        selectOption(e.key.toLowerCase());
      }
    };
    document.addEventListener('keydown', keyHandler);
  }

  // Patch renderQuestion to also update section label
  const _origRenderQuestion = renderQuestion;
  function renderQuestionWithLabel() {
    _origRenderQuestion();
    updateSectionLabel();
  }

  function init() {
    buildDOM();
    bindDOM();
    questions = (window.ABCD_DATA && window.ABCD_DATA.questions) || [];
    filtered = [...questions];
    buildSectionOptions();
    renderQuestion();
    updateSectionLabel();
    bindEvents();
  }

  function destroy() {
    if (keyHandler) document.removeEventListener('keydown', keyHandler);
    keyHandler = null;
  }

  window.Router.registerModule('abcd', { init, destroy });
})();
