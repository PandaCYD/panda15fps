/* ─── CORE INIT ───────────────────────────────────────────────────────────────
   Entry point. Wires interactive behaviors after DOM is ready.
   Dependencies (loaded before this file):
     translations.js  → i18n, currentLang, applyLang
     devlogs.js       → DEVLOGS_CONFIG, loadDevLogs  (index only)
     form.js          → FORM_CONFIG, handleForm       (index only)
   ─────────────────────────────────────────────────────────────────────────── */

/* Animate elements into view on scroll using IntersectionObserver */
function initScrollAnim() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.07 });

  const targets = '.proj-card, .about-card, .eco-card, .testi-card, .stat-cell, .edu-item, .devlog-card';
  document.querySelectorAll(targets).forEach(el => {
    el.classList.add('anim-ready');
    observer.observe(el);
  });
}

/* Native smooth scroll for all anchor links */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
}

/* Mobile hamburger menu toggle */
function initMobileMenu() {
  const btn  = document.getElementById('nav-hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? '✕' : '☰';
  });

  /* Auto-close on link click */
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.textContent = '☰';
    });
  });

  /* Close on outside click */
  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('open');
      btn.textContent = '☰';
    }
  });
}

/* Scroll-to-top button visibility and action */
function initScrollToTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ─── ENTRY POINT ─── */
document.addEventListener('DOMContentLoaded', () => {
  /* Lang selector */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  /* Contact form — present on index only */
  const form = document.getElementById('contact-form');
  if (form && typeof handleForm === 'function') {
    form.addEventListener('submit', handleForm);
  }

  initSmoothScroll();
  initMobileMenu();
  initScrollToTop();

  /* Apply saved or default language */
  applyLang(currentLang);

  /* DevLogs — present on index only */
  if (typeof loadDevLogs === 'function') loadDevLogs();

  initScrollAnim();
});
