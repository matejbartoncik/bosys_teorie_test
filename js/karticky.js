/**
 * karticky.js — Flashcard page logic
 */
(function () {
  let cards = [];
  let filteredCards = [];
  let currentIndex = 0;
  let isFlipped = false;
  let cringeMode = false;
  let answerAccepted = false;
  let debounceTimer = null;
  let keyHandler = null;

  /* ── DOM refs ── */
  let sectionSelect, shuffleBtn, progressLabel, cringeToggle;
  let cardScene, cardInner, cardFront, cardBack;
  let questionText, sectionLabel;
  let answerWrapper, answerRevealLabel, answerTextEl, answerPlainEl;
  let cringeArea, cringeTextarea, checkIndicator;
  let btnPrev, btnNext, btnContinue;

  function normalize(str) {
    return str
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function keyWords(str) {
    return normalize(str).split(' ').filter(w => w.length > 2);
  }

  function fuzzyMatch(input, answer) {
    const inputN = normalize(input);
    const answerN = normalize(answer);
    const aWords = keyWords(answerN);
    const iWords = keyWords(inputN);
    if (aWords.length === 0) return true;

    // Check word overlap
    const matched = aWords.filter(w => iWords.includes(w)).length;
    if (matched / aWords.length >= 0.45) return true;

    // Check 3 consecutive words
    const aArr = answerN.split(' ');
    const iStr = inputN;
    for (let i = 0; i <= aArr.length - 3; i++) {
      const phrase = aArr.slice(i, i + 3).join(' ');
      if (phrase.length > 5 && iStr.includes(phrase)) return true;
    }
    return false;
  }

  function buildSectionOptions() {
    const sections = window.KARTICKY_DATA.sections || [];
    let opts = '<option value="">Všechny sekce</option>';
    sections.forEach(sec => {
      opts += `<option value="${sec.index}">${sec.index}. ${escHtml(sec.title)}</option>`;
    });
    sectionSelect.innerHTML = opts;
  }

  function applyFilter() {
    const val = sectionSelect.value;
    if (!val) {
      filteredCards = [...cards];
    } else {
      const idx = parseInt(val, 10);
      filteredCards = cards.filter(c => c.section_index === idx);
    }
    currentIndex = 0;
    renderCard();
  }

  function shuffleCards() {
    for (let i = filteredCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredCards[i], filteredCards[j]] = [filteredCards[j], filteredCards[i]];
    }
    currentIndex = 0;
    renderCard();
  }

  function updateProgress() {
    if (progressLabel) {
      progressLabel.textContent = `${currentIndex + 1} / ${filteredCards.length}`;
    }
  }

  function resetCardState() {
    isFlipped = false;
    answerAccepted = false;
    cardInner.classList.remove('flipped');
    cardScene.classList.remove('flipped-mode');
    if (cringeTextarea) cringeTextarea.value = '';
    if (checkIndicator) { checkIndicator.textContent = ''; checkIndicator.className = 'check-indicator'; }
    if (answerTextEl) answerTextEl.classList.remove('revealed');
    if (answerRevealLabel) answerRevealLabel.classList.remove('revealed-state');
    updateNavButtons();
  }

  function renderCard() {
    if (!filteredCards.length) {
      questionText.textContent = 'Žádné kartičky v této sekci.';
      updateProgress();
      return;
    }
    const card = filteredCards[currentIndex];
    sectionLabel.textContent = `Sekce ${card.section_index}: ${card.section}`;
    questionText.textContent = card.question;
    answerTextEl.textContent = card.answer;
    if (answerPlainEl) answerPlainEl.textContent = card.answer;
    if (cringeTextarea) cringeTextarea.placeholder = card.answer;
    resetCardState();
    updateProgress();
  }

  function flipCard() {
    if (!filteredCards.length) return;
    isFlipped = !isFlipped;
    cardInner.classList.toggle('flipped', isFlipped);
    cardScene.classList.toggle('flipped-mode', isFlipped);
    updateNavButtons();
  }

  function updateNavButtons() {
    const canNavigate = !isFlipped || !cringeMode || answerAccepted;

    // Plain answer (no blur): cringe mode OFF, card flipped
    if (answerPlainEl) answerPlainEl.style.display = (!cringeMode && isFlipped) ? '' : 'none';
    // Blur wrapper: cringe mode ON only
    const answerWrapper = document.getElementById('k-answer-wrapper');
    if (answerWrapper) answerWrapper.style.display = cringeMode ? '' : 'none';

    if (btnContinue) {
      btnContinue.style.display = (isFlipped && !cringeMode) ? '' : 'none';
    }
    if (cringeArea) {
      cringeArea.style.display = (isFlipped && cringeMode) ? '' : 'none';
    }
    btnPrev.disabled = currentIndex === 0 || !canNavigate;
    btnNext.disabled = currentIndex >= filteredCards.length - 1 || !canNavigate;
  }

  function goNext() {
    if (currentIndex < filteredCards.length - 1) {
      currentIndex++;
      renderCard();
    }
  }

  function goPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      renderCard();
    }
  }

  function checkAnswer() {
    if (!filteredCards.length) return;
    const card = filteredCards[currentIndex];
    const input = cringeTextarea.value;
    answerAccepted = fuzzyMatch(input, card.answer);
    checkIndicator.textContent = answerAccepted ? '✓ Správně!' : '✗ Zkus to lépe…';
    checkIndicator.className = 'check-indicator ' + (answerAccepted ? 'ok' : 'fail');
    updateNavButtons();
  }

  function loadCringeMode() {
    cringeMode = localStorage.getItem('cringe_mode') === '1';
    updateCringeButton();
  }

  function updateCringeButton() {
    if (!cringeToggle) return;
    if (cringeMode) {
      cringeToggle.textContent = '🎭 Cringe mód: ZAP';
      cringeToggle.classList.add('on');
    } else {
      cringeToggle.textContent = '🎭 Cringe mód: OFF';
      cringeToggle.classList.remove('on');
    }
    updateNavButtons();
  }

  function toggleCringe() {
    cringeMode = !cringeMode;
    localStorage.setItem('cringe_mode', cringeMode ? '1' : '0');
    updateCringeButton();
    resetCardState();
  }

  function escHtml(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function buildDOM() {
    const page = document.getElementById('page-karticky');
    page.innerHTML = `
      <div class="toolbar">
        <select id="k-section-select"></select>
        <button class="btn btn-ghost" id="k-shuffle">&#x21BA; Zamíchat</button>
        <button class="btn btn-secondary cringe-toggle" id="k-cringe">🎭 Cringe mód: OFF</button>
        <span class="progress-label" id="k-progress">1 / 1</span>
      </div>

      <div class="card-scene" id="k-scene">
        <div class="card-inner" id="k-inner">
          <!-- FRONT -->
          <div class="card-face card-front" id="k-front">
            <div class="card-band" id="k-section-label">Sekce</div>
            <div class="card-body">
              <div class="card-question" id="k-question">…</div>
              <div class="card-hint">Klikni na kartičku nebo stiskni <kbd>Mezerník</kbd> pro zobrazení odpovědi</div>
            </div>
          </div>
          <!-- BACK -->
          <div class="card-face card-back" id="k-back">
            <div class="card-band">Odpověď</div>
            <div class="card-body">
              <!-- Plain answer (cringe mode OFF) -->
              <div class="answer-plain" id="k-answer-plain"></div>
              <!-- Blurred reveal (cringe mode ON) -->
              <div class="answer-reveal-wrapper" id="k-answer-wrapper">
                <div class="answer-reveal-label" id="k-reveal-label">Správná odpověď (klikni pro zobrazení)</div>
                <div class="answer-text" id="k-answer-text"></div>
              </div>
              <div class="cringe-area" id="k-cringe-area" style="display:none">
                <textarea id="k-textarea" rows="3" placeholder="Napiš odpověď…"></textarea>
                <div class="check-indicator" id="k-check"></div>
              </div>
              <button class="btn btn-primary" id="k-continue" style="display:none">Pokračovat →</button>
            </div>
          </div>
        </div>
      </div>

      <div class="nav-row">
        <button class="btn btn-secondary btn-nav" id="k-prev">&#8592;</button>
        <button class="btn btn-secondary btn-nav" id="k-next">&#8594;</button>
      </div>
    `;
  }

  function bindDOM() {
    sectionSelect   = document.getElementById('k-section-select');
    shuffleBtn      = document.getElementById('k-shuffle');
    progressLabel   = document.getElementById('k-progress');
    cringeToggle    = document.getElementById('k-cringe');
    cardScene       = document.getElementById('k-scene');
    cardInner       = document.getElementById('k-inner');
    cardFront       = document.getElementById('k-front');
    cardBack        = document.getElementById('k-back');
    questionText    = document.getElementById('k-question');
    sectionLabel    = document.getElementById('k-section-label');
    answerWrapper   = document.getElementById('k-answer-wrapper');
    answerRevealLabel = document.getElementById('k-reveal-label');
    answerTextEl    = document.getElementById('k-answer-text');
    answerPlainEl   = document.getElementById('k-answer-plain');
    cringeArea      = document.getElementById('k-cringe-area');
    cringeTextarea  = document.getElementById('k-textarea');
    checkIndicator  = document.getElementById('k-check');
    btnPrev         = document.getElementById('k-prev');
    btnNext         = document.getElementById('k-next');
    btnContinue     = document.getElementById('k-continue');
  }

  function bindEvents() {
    sectionSelect.addEventListener('change', applyFilter);
    shuffleBtn.addEventListener('click', shuffleCards);
    cringeToggle.addEventListener('click', toggleCringe);
    cardScene.addEventListener('click', function (e) {
      if (e.target.closest('#k-answer-wrapper')) return;
      if (e.target.closest('#k-cringe-area')) return;
      if (e.target.closest('#k-continue')) return;
      flipCard();
    });
    answerWrapper.addEventListener('click', function () {
      answerTextEl.classList.toggle('revealed');
      answerRevealLabel.classList.toggle('revealed-state');
    });
    cringeTextarea.addEventListener('input', function () {
      clearTimeout(debounceTimer);
      // Reveal answer text once user starts typing
      answerTextEl.classList.add('revealed');
      answerRevealLabel.classList.add('revealed-state');
      debounceTimer = setTimeout(checkAnswer, 300);
    });
    btnContinue.addEventListener('click', goNext);
    btnPrev.addEventListener('click', goPrev);
    btnNext.addEventListener('click', goNext);

    keyHandler = function (e) {
      if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        flipCard();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (!btnNext.disabled) goNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (!btnPrev.disabled) goPrev();
      }
    };
    document.addEventListener('keydown', keyHandler);
  }

  function init() {
    buildDOM();
    bindDOM();
    cards = (window.KARTICKY_DATA && window.KARTICKY_DATA.cards) || [];
    filteredCards = [...cards];
    buildSectionOptions();
    loadCringeMode();
    renderCard();
    bindEvents();
  }

  function destroy() {
    if (keyHandler) document.removeEventListener('keydown', keyHandler);
    keyHandler = null;
    clearTimeout(debounceTimer);
  }

  window.Router.registerModule('karticky', { init, destroy });
})();
