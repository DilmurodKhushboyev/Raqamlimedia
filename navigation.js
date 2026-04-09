// ══ NAVIGATION ══
// Page loader, scroll-based nav styling, active link highlighting,
// mobile menu toggling.

// ── PAGE LOADER ──
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    document.body.classList.remove('loading');
  }, 600);
});

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
