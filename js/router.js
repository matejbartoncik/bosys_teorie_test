/**
 * router.js — hash-based SPA router
 * Works with file:// protocol (no server required).
 */
(function () {
  const PAGES = {
    karticky: { pageId: 'page-karticky', module: null },
    abcd:     { pageId: 'page-abcd',     module: null },
    test:     { pageId: 'page-test',     module: null },
  };

  const DEFAULT_HASH = 'karticky';

  let currentPage = null;

  function getHash() {
    const h = window.location.hash.replace('#', '').trim();
    return PAGES[h] ? h : DEFAULT_HASH;
  }

  function navigate(hash) {
    // Destroy current page
    if (currentPage && PAGES[currentPage] && PAGES[currentPage].module) {
      try { PAGES[currentPage].module.destroy(); } catch (e) { /* ignore */ }
    }

    // Hide all pages, deactivate nav links
    document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));

    // Show target page
    const target = PAGES[hash];
    if (!target) return;

    const pageEl = document.getElementById(target.pageId);
    if (pageEl) pageEl.classList.add('active');

    const navLink = document.querySelector(`.nav-link[data-page="${hash}"]`);
    if (navLink) navLink.classList.add('active');

    currentPage = hash;

    // Init module
    if (target.module) {
      try { target.module.init(); } catch (e) { console.error('Page init error:', e); }
    }
  }

  function registerModule(name, module) {
    if (PAGES[name]) {
      PAGES[name].module = module;
    }
  }

  function handleHashChange() {
    navigate(getHash());
  }

  function boot() {
    window.addEventListener('hashchange', handleHashChange);

    // Ensure correct hash in URL on load
    const h = getHash();
    if (!window.location.hash || window.location.hash === '#') {
      window.location.hash = h;
      // hashchange will fire
    } else {
      navigate(h);
    }
  }

  window.Router = { boot, registerModule };
})();
