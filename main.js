// ── Raqamli Media — Main JS ──
// ── PAGE LOADER ──
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    document.body.classList.remove('loading');
  }, 600);
});

// ── SCROLL FADE-IN ──
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fi').forEach(el => obs.observe(el));

// ── NAV SCROLL ──
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
  updateActiveNav();
});

// ── ACTIVE NAV LINKS ──
function updateActiveNav() {
  const sections = ['xizmatlar','natijalar','narxlar','faq'];
  const links = document.querySelectorAll('.nav-links a');
  let current = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });
  links.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

// ── MOBILE MENU ──
let menuOpen = false;
function toggleMenu() {
  menuOpen = !menuOpen;
  const burger = document.getElementById('burger');
  burger.classList.toggle('open', menuOpen);
  // ✅ FIX 6: aria-expanded yangilanadi
  burger.setAttribute('aria-expanded', menuOpen ? 'true' : 'false');
  document.getElementById('mobileMenu').classList.toggle('open', menuOpen);
  document.body.style.overflow = menuOpen ? 'hidden' : '';
}
function closeMenu() {
  menuOpen = false;
  const burger = document.getElementById('burger');
  burger.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow = '';
}

// ── FAQ TOGGLE ──
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  // Close all
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

// ✅ FIX 7: Dinamik yil — footer copyright
document.getElementById('footerCopy').textContent =
  '© ' + new Date().getFullYear() + ' Raqamli Media. Barcha huquqlar himoyalangan.';
</script>
