# Raqamli Media — Fayl xaritasi

Asl `index.html` (1630 qator) modulyar holatga keltirildi. CSS va JS
tashqi fayllarga ajratildi, HTML esa bitta `index.html` (760 qator)
sifatida qoldirildi — chunki HTML ichida katta base64 rasmlar bor va
bitta sahifalik marketing sayti uchun SEO/first-paint buzilmasligi kerak.

## 📂 Struktura

```
raqamli-media/
├── index.html              ← asosiy fayl, brauzer shuni ochadi
├── css/
│   ├── base.css
│   ├── nav.css
│   ├── hero.css
│   ├── sections.css
│   ├── content.css
│   ├── components.css
│   └── responsive.css
├── js/
│   ├── navigation.js
│   └── interactions.js
└── README.md               ← shu fayl
```

## 🗺️ Har bir fayl nimaga javob beradi

### `index.html` — 760 qator
To'liq sahifa HTML strukturasi. Barcha `<section>` bloklari shu yerda:
page loader, toast, floating Telegram tugmasi, orqa fon orblari,
mobile menu, nav, hero, stats, xizmatlar, jarayon, natijalar,
testimonials, narxlar, FAQ, asoschi, CTA, footer. CSS va JS fayllari
`<head>` va `</body>` oldidan ulangan.

Tahrirlash kerak bo'lganda: matn, rasm, link, yangi section qo'shish —
hammasi shu yerda.

---

### CSS fayllari (`css/` papkasi)

#### `base.css` — 60 qator
Eng asosiy bazaviy qoidalar: CSS o'zgaruvchilari (`--accent`, `--bg`,
`--text` va h.k.), `*` reset, `body` shrifti, page loader (`.page-loader`,
`.loader-logo`), orqa fon orblari (`.bg-wrap`, `.orb`, `.o1..o4`), va
`loaderPulse` + `orb1` keyframe animatsiyalari.

Qachon tahrirlanadi: rang palitrasi o'zgarsa, umumiy shrift almashsa,
loader ko'rinishi o'zgarsa.

#### `nav.css` — 122 qator
Yuqoridagi fiksirlangan navigation bar: `nav`, `.nav-logo`,
story ring animatsiyasi (`.nav-logo-ring`, `storyRing` keyframe),
`.nav-links`, `.nav-tg`/`.nav-ig` tugmalari, burger tugmasi
(`.burger`), va mobile menu (`.mobile-menu`).

Qachon tahrirlanadi: nav menu elementlari, logotip uslubi,
mobile menu ko'rinishi o'zgarsa.

#### `hero.css` — 145 qator
Hero section va uning visual phone mockup elementi.
`.wrap` container, `.hero`, `.hero-inner`, `.hero h1`, `.hero-btns`,
`.btn-tg`/`.btn-ig`/`.btn-ghost`, hero visual phone
(`.phone`, `.ph-header`, `.ph-avatar`, `.ph-stat`, `.ph-posts`, va h.k.),
`float`/`spin`/`float2` animatsiyalari, va `.stats`/`.stat-n`/`.stat-l`
blokalari.

Qachon tahrirlanadi: bosh ekran ko'rinishi yoki phone mockup o'zgarsa.

#### `sections.css` — 141 qator
O'rtadagi asosiy section'lar uchun umumiy va individual uslublar:
`section` (padding, common), `.section-tag`, `.section-title`,
`.section-desc`; services (`.services`, `.service-card`, `.svc-icon`);
process (`.process`, `.proc-step`, `.proc-num`); results (`.results`,
`.result-card`, `.result-stats`, `.result-badge`); pricing
(`.pricing`, `.price-card`, `.price-val`, `.price-btn`, va popular
badge).

Qachon tahrirlanadi: xizmatlar ro'yxati, narx kartalari, natijalar
kartalari ko'rinishi o'zgarsa.

#### `content.css` — 164 qator
Pastki content section'lari: testimonials (`.testimonials`, `.testi`,
`.testi-avatar`, verified badge); FAQ accordion (`.faq-item`, `.faq-q`,
`.faq-a`, ochilish animatsiyasi); founder bloki (`.founder`,
`.founder-avatar`, fallback avatar, `.founder-bio`, `.founder-stats`);
CTA banner (`.cta`, `.cta-inner`); footer (`footer`, `.footer-links`,
`.footer-soc`).

Qachon tahrirlanadi: mijoz izohlari, FAQ savollari, asoschi bio,
footer o'zgarsa.

#### `components.css` — 75 qator
Qayta ishlatiluvchi kichik komponentlar:
- `.fi`/`.vis` — scroll fade-in animatsiyasi
- `.float-tg` — pastki o'ng burchakdagi suzuvchi Telegram tugmasi
  (`floatBtn` keyframe bilan)
- `.urgency-banner` — hero ustidagi "shoshilinch" banner (`subtlePop`
  keyframe)
- `.scroll-top` — yuqoriga qaytish tugmasi
- `.toast` — notification toast (`.toast-dot` pulsatsiya bilan)
- `.icon-sm` va umumiy SVG helperlar

Qachon tahrirlanadi: qo'shimcha UI komponent yoki animatsiya kerak
bo'lsa.

#### `responsive.css` — 60 qator
Barcha `@media` query'lari bir joyda:
- `max-width: 1200px` — hero grid stack
- `max-width: 960px` — mobile nav rejimi (burger ko'rinadi, nav-links
  yashiriladi)
- `max-width: 768px` — planshet/telefon uchun shrift va padding
  kichiklashishlari
- `max-width: 480px` — kichik telefonlar uchun moslashtirish

Bundan tashqari, `.result-card-logo` uslubi (natijalar kartasida
logotip ko'rinishi) ham shu faylda.

Qachon tahrirlanadi: mobile ko'rinishda muammo topilsa yoki yangi
breakpoint kerak bo'lsa.

---

### JS fayllari (`js/` papkasi)

#### `navigation.js` — 52 qator
Sahifa bo'ylab harakatlanish bilan bog'liq hamma narsa:
- **Page loader** — `window.load` da 600ms kutib loader'ni yashiradi
- **Nav scroll** — 60px scroll dan keyin `nav.scrolled` qo'shadi,
  400px dan keyin `scrollTop` tugmasini ko'rsatadi
- **`updateActiveNav()`** — scroll holatiga qarab qaysi section
  ko'rinayotganini aniqlab, nav link'ini `.active` qiladi
- **`toggleMenu()` / `closeMenu()`** — burger bosilganda mobile menu
  ochish/yopish, body scroll'ni lock qilish, `aria-expanded` yangilash

Qachon tahrirlanadi: yangi section qo'shilsa (uni `sections` massiviga
qo'shing), loader timingi o'zgartirilsa, mobile menu mantiqi
o'zgartirilsa.

#### `interactions.js` — 67 qator
Foydalanuvchi bilan interaktivlik:
- **Fade-in observer** — `.fi` classidagi har bir element scrollga
  tushganda `.vis` olib ko'rinadi (IntersectionObserver)
- **`toggleFaq(btn)`** — FAQ accordion: boshqa ochiqlarini yopib,
  bosilganini ochadi
- **`animateCounter(el)`** — `data-count` atributidagi raqamga
  1800ms ichida cubic easing bilan sanaydi (stats section uchun)
- **Stats observer** — stats section 40% ko'ringanda bir marta
  counter'larni ishga tushiradi
- **`showToast(msg)`** — pastdan chiqadigan notification, 2.8 sekund
  turadi
- **Dynamic year** — footer copyright'idagi yilni avtomatik yangilaydi

Qachon tahrirlanadi: yangi interaktiv element qo'shilsa (masalan,
tab component), counter tezligi o'zgartirilsa, toast davomiyligi
o'zgartirilsa.

---

## 🚀 Qanday ishlatish

1. Butun `raqamli-media/` papkasini Netlify'ga yoki istalgan statik
   hostingga yuklang.
2. `index.html` root'da bo'lishi kerak, `css/` va `js/` papkalari esa
   uning yonida.
3. Qo'shimcha build step kerak emas — bu oddiy statik HTML/CSS/JS sayti.

## 🔧 Lokal sinov

Brauzerda `index.html` ni to'g'ridan-to'g'ri ochish mumkin, lekin
CORS muammosini oldini olish uchun oddiy server ishga tushirgan
ma'qul:

```bash
cd raqamli-media
python3 -m http.server 8000
# keyin brauzerda: http://localhost:8000
```

## ✏️ Tahrirlash qoidalari

- **Matn, rasm, section tartibi** → `index.html`
- **Ranglar, shriftlar, fon** → `css/base.css`
- **Nav yoki mobile menu** → `css/nav.css` + `js/navigation.js`
- **Bosh ekran (hero)** → `css/hero.css`
- **O'rta section'lar** → `css/sections.css`
- **Pastki section'lar** → `css/content.css`
- **Mobile ko'rinish muammosi** → `css/responsive.css`
- **Interaktivlik (FAQ, counter, toast)** → `js/interactions.js`
