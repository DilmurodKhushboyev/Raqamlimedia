// ══ INTERACTIONS ══
// Scroll fade-in observer, FAQ accordion, animated stat counters,
// toast notifications, dynamic footer year.

// ── SCROLL FADE-IN ──
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fi').forEach(el => obs.observe(el));

// ── FAQ TOGGLE ──
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
  });
  if (!isOpen) {
    item.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
}

// ── STAT COUNTER ANIMATION ──
let countersStarted = false;
function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const statsObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting && !countersStarted) {
      countersStarted = true;
      document.querySelectorAll('.stat-n[data-count]').forEach(animateCounter);
      statsObs.disconnect();
    }
  });
}, { threshold: 0.4 });
const statsRow = document.getElementById('statsRow');
if (statsRow) statsObs.observe(statsRow);

// ── TOAST ──
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  clearTimeout(toastTimer);
  t.classList.add('show');
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// ── DYNAMIC YEAR ──
document.getElementById('footerCopy').textContent =
  '© ' + new Date().getFullYear() + ' Raqamli Media. Barcha huquqlar himoyalangan.';
