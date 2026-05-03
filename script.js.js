// ============================================
// ДАННЫЕ
// ============================================
const tipsData = [
    { num: 1, title: "Будьте порядочны", text: "«В человеке должно быть всё прекрасно: и лицо, и одежда, и душа, и мысли.» Честность и порядочность — фундамент счастливой жизни.", category: "soul", categoryLabel: "Душа" },
    { num: 2, title: "Трудитесь с удовольствием", text: "«Человек создан для счастья, как птица для полёта.» Найдите дело, которое приносит радость, и труд станет источником удовлетворения, а не тягостью.", category: "work", categoryLabel: "Труд" },
    { num: 3, title: "Не откладывайте жизнь", text: "«Завтрак, обед, ужин, сон — вот и вся жизнь, а между тем проходит она быстро, и не заметишь, как она промелькнёт.» Живите настоящим моментом.", category: "life", categoryLabel: "Жизнь" },
    { num: 4, title: "Заботьтесь о здоровье", text: "«Здоровье — это такое состояние, при котором каждый орган работает, не напоминая о себе.» Берегите своё тело — это единственный дом, в котором вам жить.", category: "health", categoryLabel: "Здоровье" },
    { num: 5, title: "Будьте щедры", text: "«Делая добро другим, вы сами облагораживаетесь.» Чехов щедро лечил крестьян бесплатно и считал помощь ближним естественным долгом.", category: "people", categoryLabel: "Люди" },
    { num: 6, title: "Учитесь всю жизнь", text: "«Человек должен учиться всю жизнь.» Образование и самообразование — ключи к развитию личности и пониманию мира вокруг.", category: "life", categoryLabel: "Жизнь" },
    { num: 7, title: "Не завидуйте", text: "«Зависть — это чувство, которое разъедает душу.» Сосредоточьтесь на собственном пути, а не на чужих достижениях.", category: "soul", categoryLabel: "Душа" },
    { num: 8, title: "Живите просто", text: "«Простота — вот что облагораживает.» Не стремитесь к роскоши ради роскоши. Истинная красота — в простоте и естественности.", category: "life", categoryLabel: "Жизнь" },
    { num: 9, title: "Цените природу", text: "«Природа — это великий храм, в котором человек может обрести покой.» Прогулки на свежем воздухе, наблюдения за природой — источник душевного равновесия.", category: "health", categoryLabel: "Здоровье" },
    { num: 10, title: "Будьте терпимы", text: "«Терпимость — это не слабость, а великая сила духа.» Принимайте людей такими, какие они есть, не пытаясь переделать каждого под себя.", category: "people", categoryLabel: "Люди" },
    { num: 11, title: "Не бойтесь одиночества", text: "«Одиночество — это не всегда плохо. Иногда оно необходимо, чтобы услышать себя.» Чехов ценил тишину и уединение как источник творчества.", category: "soul", categoryLabel: "Душа" },
    { num: 12, title: "Работайте систематически", text: "«Без работы нельзя жить.» Систематический труд дисциплинирует ум и приносит настоящее удовлетворение, которого не дают разовые порывы.", category: "work", categoryLabel: "Труд" },
    { num: 13, title: "Уважайте чужой труд", text: "«Каждый человек имеет право на уважение.» Цените труд других людей — от писателя до дворника. Каждый вносит свой вклад в общее дело.", category: "people", categoryLabel: "Люди" },
    { num: 14, title: "Не теряйте чувство юмора", text: "«Смех — великая сила.» Чехов сам был мастером юмора и считал, что умение смеяться над собой и миром — признак здоровой души.", category: "soul", categoryLabel: "Душа" },
    { num: 15, title: "Помогайте другим", text: "«По-настоящему счастлив только тот, кто делает добро другим.» Чехов построил школы, больницы и помогал нуждающимся на протяжении всей жизни.", category: "people", categoryLabel: "Люди" },
    { num: 16, title: "Не жалуйтесь", text: "«Жалобы не решают проблем.» Вместо того чтобы жаловаться на жизнь, ищите способы её улучшить. Действуйте, а не сетуйте.", category: "life", categoryLabel: "Жизнь" },
    { num: 17, title: "Развивайте вкус", text: "«Вкус нужно воспитывать.» Читайте хорошую литературу, слушайте музыку, посещайте театры — облагораживайте свой внутренний мир.", category: "soul", categoryLabel: "Душа" },
    { num: 18, title: "Не будьте фанатиком", text: "«Фанатизм — враг разума.» Подходите ко всему критически и взвешенно. Истина обычно находится где-то между крайностями.", category: "life", categoryLabel: "Жизнь" },
    { num: 19, title: "Цените семью", text: "«Семья — это гавань, в которой мы находим покой.» Несмотря на занятость, Чехов всегда находил время для близких людей.", category: "people", categoryLabel: "Люди" },
    { num: 20, title: "Не ленитесь", text: "«Лень — это ржавчина, которая разъедает душу.» Даже в минуты отдыха Чехов не прекращал наблюдать, размышлять и записывать.", category: "work", categoryLabel: "Труд" },
    { num: 21, title: "Будьте реалистом", text: "«Смотрите на вещи такими, какие они есть, а не такими, какими вам хочется их видеть.» Трезвый взгляд на жизнь помогает принимать правильные решения.", category: "life", categoryLabel: "Жизнь" },
    { num: 22, title: "Заботьтесь о чистоте", text: "«Чистота — залог здоровья и душевного спокойствия.» Чехов, будучи врачом, знал: порядок вокруг создаёт порядок внутри.", category: "health", categoryLabel: "Здоровье" },
    { num: 23, title: "Не гонитесь за славой", text: "«Слава — это дым, который рассеивается.» Делайте дело ради самого дела, а не ради признания. Истинная награда — в удовлетворении от работы.", category: "work", categoryLabel: "Труд" },
    { num: 24, title: "Путешествуйте", text: "«Путешествия расширяют кругозор.» Поездка на Сахалин изменила Чехова и обогатила его творчество. Новые места открывают новые горизонты.", category: "life", categoryLabel: "Жизнь" },
    { num: 25, title: "Любите жизнь", text: "«Жизнь прекрасна, несмотря ни на что.» Даже в трудные времена Чехов находил поводы для радости и благодарности. Любите жизнь — и она ответит взаимностью.", category: "soul", categoryLabel: "Душа" }
];

const timelineData = [
    { year: 1860, title: "Рождение в Таганроге", text: "Антон Чехов родился 29 января в семье купца третьей гильдии. Детство в лавке отца стало школой наблюдения за людьми." },
    { year: 1879, title: "Учёба в Москве", text: "Поступил на медицинский факультет Московского университета. Начал писать юмористические рассказы под псевдонимом «Чехонте»." },
    { year: 1886, title: "Признание", text: "Дмитрий Григорович заметил талант молодого писателя и написал ему письмо с признанием. Чехов начал серьёзно относиться к литературе." },
    { year: 1890, title: "Путешествие на Сахалин", text: "Проехал через всю Сибирь до острова Сахалин, где изучал жизнь каторжан. Впечатления легли в основу книги «Остров Сахалин»." },
    { year: 1892, title: "Мелихово", text: "Купил имение Мелихово под Москвой. Построил школы, больницы, лечил крестьян. Здесь созданы «Палата №6», «Вишнёвый сад» и другие шедевры." },
    { year: 1897, title: "Поездка в Ниццу", text: "Из-за болезни лёгких переехал в Крым. Основал Ялтинскую больницу и санаторий для туберкулёзных больных." },
    { year: 1901, title: "Женитьба", text: "Женился на актрисе Московского Художественного театра Ольге Книппер. Их переписка — один из самых красивых литературных эпистоляриев." },
    { year: 1904, title: "Наследие", text: "Чехов скончался 15 июля в Баденвайлере. Оставил миру более 600 рассказов, пьесы, ставшие классикой, и мудрость, актуальную по сей день." }
];

// ============================================
// РЕНДЕР КОНТЕНТА
// ============================================
function renderTips(filter = 'all') {
    const grid = document.getElementById('tipsGrid');
    const filtered = filter === 'all' ? tipsData : tipsData.filter(t => t.category === filter);
    
    grid.innerHTML = filtered.map((tip, i) => `
        <div class="tip-card" data-category="${tip.category}" style="transition-delay: ${i * 0.05}s">
            <div class="tip-number">${tip.num}</div>
            <h3 class="tip-title">${tip.title}</h3>
            <p class="tip-text">${tip.text}</p>
            <span class="tip-category">${tip.categoryLabel}</span>
        </div>
    `).join('');

    observeCards();
}

function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    container.innerHTML = timelineData.map(item => `
        <div class="timeline-item">
            <div class="timeline-dot">${item.year}</div>
            <div class="timeline-content">
                <h4>${item.title}</h4>
                <p>${item.text}</p>
            </div>
        </div>
    `).join('');
    observeTimeline();
}

// ============================================
// АНИМАЦИИ ПРИ СКРОЛЛЕ
// ============================================
function observeCards() {
    const cards = document.querySelectorAll('.tip-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    cards.forEach(card => observer.observe(card));
}

function observeTimeline() {
    const items = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    items.forEach(item => observer.observe(item));
}

// ============================================
// СОБЫТИЯ ИНТЕРФЕЙСА
// ============================================
document.getElementById('filterBar').addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        renderTips(e.target.dataset.filter);
    }
});

window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    const scrollTop = document.getElementById('scrollTop');
    const progressBar = document.getElementById('progressBar');
    
    if (window.scrollY > 100) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
    
    if (window.scrollY > 500) scrollTop.classList.add('visible');
    else scrollTop.classList.remove('visible');
    
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progressBar.style.width = `${(winScroll / height) * 100}%`;
});

document.getElementById('scrollTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.getElementById('navToggle').addEventListener('click', () => document.getElementById('navLinks').classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
});

// ============================================
// СЧЁТЧИКИ
// ============================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.count);
        const duration = 2000;
        const start = performance.now();
        
        const update = (time) => {
            const progress = Math.min((time - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.floor(eased * target);
            if (progress < 1) requestAnimationFrame(update);
            else counter.textContent = target >= 100 ? target + '+' : target;
        };
        requestAnimationFrame(update);
    });
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// ============================================
// ЗАПУСК
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderTips();
    renderTimeline();
    statsObserver.observe(document.querySelector('.stats'));
});