/* =====================================================
   1. ДЕРЕКТЕР
   Мәліметтерді осы жерден өзгертуге болады.
   ===================================================== */

/* Ұстаздар.
   Мысал: { name: "Аты-жөні", subject: "Пән", photo: "teacher1.jpg" }
   photo көрсетпесеңіз, аты-жөнінің бірінші әрпі шығады. */
const teachers = [];

/* Әлімхан Ермековтің хронологиясы.
   era: bala | alash | ilim | kugyn | soniki */
const events = [
  { y: "1891, 25 мамыр",  age: "0 жас",     era: "bala",   t: "Қарқаралы уезінің Бөріктас өңірінде дүниеге келді." },
  { y: "1899",            age: "8 жас",     era: "bala",   t: "Қарқаралы қалалық училищесіне оқуға түсті." },
  { y: "1905",            age: "14 жас",    era: "bala",   t: "Қарқаралы училищесін аяқтап, Семей ерлер гимназиясына қабылданды." },
  { y: "1912",            age: "21 жас",    era: "bala",   t: "Семей гимназиясын алтын медальмен бітірді және Томск технологиялық институтының тау-кен факультетіне түсті. Томскіде Григорий Потанинмен танысты." },
  { y: "1913",            age: "22 жас",    era: "bala",   t: "Потаниннің Қарқаралы уезіне жасаған сапарына қатысты." },
  { y: "1917, сәуір–мамыр", age: "26 жас",  era: "alash",  t: "Семей облыстық қазақ съезіне қатысты." },
  { y: "1917",            age: "26 жас",    era: "alash",  t: "Институттағы оқуын уақытша тоқтатып, Семейге оралды." },
  { y: "1917, желтоқсан", age: "26 жас",    era: "alash",  t: "Алашорда үкіметінің мүшесі болды." },
  { y: "1918, наурыз",    age: "27 жас",    era: "alash",  t: "Халел Ғаббасовпен бірге Мәскеудегі большевик басшылығымен телеграф арқылы байланысып, қазақ автономиясын тану мәселесін көтерді." },
  { y: "1920, тамыз",     age: "29 жас",    era: "alash",  t: "Мәскеудегі мәжілістерде Қазақ автономиясының аумағы туралы баяндама жасап, қазақ жерін біртұтас автономия құрамына біріктіру қажеттігін қорғады. 17 тамыздағы мәжілісте Владимир Ленин төрағалық етті." },
  { y: "1920, 26 тамыз",  age: "29 жас",    era: "alash",  t: "Қырғыз (Қазақ) Автономиялық Кеңестік Социалистік Республикасын құру туралы декрет қабылданды." },
  { y: "1921",            age: "30 жас",    era: "ilim",   t: "Қарқаралыда екі сатылы мектеп пен педагогикалық техникум ұйымдастыруға атсалысты." },
  { y: "1921",            age: "30 жас",    era: "ilim",   t: "Профессор Михаил Усовты Баянауыл өңіріне шақырып, Қаныш Сәтбаевты онымен таныстырды." },
  { y: "1921–1924",       age: "30–33 жас", era: "ilim",   t: "Қарқаралыдағы екінші сатылы мектепте директор және оқытушы қызметін атқарды." },
  { y: "1923",            age: "32 жас",    era: "ilim",   t: "Тау-кен инженері дипломын алды." },
  { y: "1924–1925",       age: "33–34 жас", era: "ilim",   t: "Семей педагогикалық техникумында математикадан сабақ берді." },
  { y: "1925",            age: "34 жас",    era: "ilim",   t: "Қазақстанның Мемлекеттік жоспарлау комиссиясының жұмысына тартылды." },
  { y: "1926",            age: "35 жас",    era: "ilim",   t: "Ташкенттегі Жоғары педагогикалық институтта математикадан дәріс оқыды." },
  { y: "1920-жылдардың соңы – 1937", age: "", era: "ilim", t: "Алматыдағы Қазақ педагогикалық институтында, Алматы зооветеринарлық институтында және Алматы тау-кен металлургия институтында қызмет етті. Соңғысында математика және теориялық механика кафедрасын басқарып, жалпы техникалық факультеттің деканы болды." },
  { y: "1930",            age: "39 жас",    era: "kugyn",  t: "Бұрынғы Алаш қайраткерлеріне қатысты саяси тергеуге алынды." },
  { y: "1935",            age: "44 жас",    era: "ilim",   t: "Математика және теориялық механика саласы бойынша профессор атағы берілді. Қазақтан шыққан тұңғыш профессор-математик ретінде танылды." },
  { y: "1935",            age: "44 жас",    era: "ilim",   t: "Қазақ тіліндегі «Ұлы математика курсы» еңбегінің бірінші бөлімі жарық көрді." },
  { y: "1935–1936",       age: "44–45 жас", era: "ilim",   t: "Қазақ тіліндегі математикалық терминологияны жүйелеу жұмысына қатысты." },
  { y: "1937",            age: "46 жас",    era: "kugyn",  t: "Куйбышев қаласына барып, жоспарлау институтында математика кафедрасын басқарды." },
  { y: "1938",            age: "47 жас",    era: "kugyn",  t: "Контрреволюциялық қызметке қатысы бар деген айыппен тұтқындалды. Алғашқыда он жылға сотталды." },
  { y: "1947",            age: "56 жас",    era: "kugyn",  t: "Қамаудан босап, Шымкент технологиялық институтында математика кафедрасын басқарды." },
  { y: "1948",            age: "57 жас",    era: "kugyn",  t: "Қайта тұтқындалып, он жылға бас бостандығынан айыру жазасы белгіленді." },
  { y: "1955",            age: "64 жас",    era: "soniki", t: "Бостандыққа шықты және Қарағанды тау-кен институтында жұмысын бастады." },
  { y: "1957, 26 қараша", age: "66 жас",    era: "soniki", t: "Толық ақталды." },
  { y: "1958",            age: "67 жас",    era: "soniki", t: "Зейнетке шықты." },
  { y: "1960",            age: "",          era: "soniki", t: "Жұбайы Рахия Шағабетдинова дүниеден өтті." },
  { y: "1970, 22 маусым", age: "79 жас",    era: "soniki", t: "Қарағанды қаласында дүниеден өтті." }
];


/* =====================================================
   2. ЭЛЕМЕНТТЕРДІ ТАУЫП АЛУ
   ===================================================== */

const header   = document.getElementById('header');
const burger   = document.getElementById('burger');
const menu     = document.getElementById('menu');
const pages    = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.menu a');


/* =====================================================
   3. ҰСТАЗДАРДЫ ШЫҒАРУ
   ===================================================== */

function renderTeachers() {
  const container = document.getElementById('teachers');
  if (!container) return;

  if (teachers.length === 0) {
    container.innerHTML = '<div class="empty-note">Ұстаздар туралы ақпарат жақында толықтырылады.</div>';
    return;
  }

  container.innerHTML = teachers.map((t, i) => `
    <article class="teacher reveal d${i % 3}">
      <div class="teacher-photo">
        ${t.photo
          ? `<img src="${t.photo}" alt="${t.name}">`
          : `<span>${t.name.charAt(0)}</span>`}
      </div>
      <div class="teacher-info">
        <h3>${t.name}</h3>
        <p>Ұстаз</p>
        <span class="tag">${t.subject}</span>
      </div>
    </article>
  `).join('');
}


/* =====================================================
   4. ХРОНОЛОГИЯНЫ ШЫҒАРУ ЖӘНЕ СҮЗГІ
   ===================================================== */

function renderTimeline() {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;

  timeline.innerHTML = events.map(e => `
    <div class="tl-item era-${e.era} reveal" data-era="${e.era}">
      <div class="tl-meta">
        <span class="tl-year">${e.y}</span>
        ${e.age ? `<span class="tl-age">${e.age}</span>` : ''}
      </div>
      <p>${e.t}</p>
    </div>
  `).join('');
}

function setupTimelineFilter() {
  const filterBtns = document.querySelectorAll('.filter');
  const timeline   = document.getElementById('timeline');
  const emptyNote  = document.getElementById('tlEmpty');
  if (!filterBtns.length || !timeline) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const era = btn.dataset.era;
      let visibleCount = 0;

      timeline.querySelectorAll('.tl-item').forEach(item => {
        const show = era === 'all' || item.dataset.era === era;
        item.classList.toggle('hidden', !show);
        if (show) visibleCount++;
      });

      emptyNote.style.display = visibleCount ? 'none' : 'block';
    });
  });
}


/* =====================================================
   5. ШАПКА ЖӘНЕ МОБИЛЬДІ МӘЗІР
   ===================================================== */

function setupHeader() {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
  header.classList.toggle('scrolled', window.scrollY > 40);
}

function setupBurger() {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
  });
}


/* =====================================================
   6. БӨЛІМДЕР АРАСЫНДА АУЫСУ (#хэш бойынша)
   ===================================================== */

function showPageFromHash() {
  const id = location.hash.slice(1);
  const target = document.getElementById(id);
  const pageId = (target && target.classList.contains('page')) ? id : 'home';

  pages.forEach(page => {
    page.hidden = page.id !== pageId;
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + pageId);
  });

  burger.classList.remove('open');
  menu.classList.remove('open');
  window.scrollTo(0, 0);
}


/* =====================================================
   7. ПАЙДА БОЛУ АНИМАЦИЯСЫ
   ===================================================== */

function setupRevealAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}


/* =====================================================
   8. ІСКЕ ҚОСУ
   Алдымен карточкалар шығады, содан кейін анимация қосылады.
   ===================================================== */

renderTeachers();
renderTimeline();
setupTimelineFilter();
setupHeader();
setupBurger();
window.addEventListener('hashchange', showPageFromHash);
showPageFromHash();
setupRevealAnimation();