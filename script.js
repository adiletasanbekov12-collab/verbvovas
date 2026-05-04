// ============================================
// ДАННЫЕ — 25 СОВЕТОВ С РЕАЛЬНЫМИ ЦИТАТАМИ
// ============================================
const tipsData = [
    {
        num: 1,
        title: "Воспитывайте в себе прекрасное",
        quote: "В человеке должно быть всё прекрасно: и лицо, и одежда, и душа, и мысли.",
        explanation: "Внешний облик и внутренний мир должны быть в гармонии. Не пренебрегайте ни тем, ни другим.",
        category: "soul",
        categoryLabel: "Душа",
        source: "Пьеса «Дядя Ваня», 1897"
    },
    {
        num: 2,
        title: "Будьте всегда трезвым",
        quote: "Надо быть всегда трезвым, честным, обходительным, образованным, снисходительным, скромным, вежливым, требовательным к себе.",
        explanation: "В знаменитом письме брату Чехов перечислил качества, которые делают человека достойным уважения. Трезвость — первое в этом списке.",
        category: "character",
        categoryLabel: "Характер",
        source: "Письмо брату Н.П. Чехову, 1886"
    },
    {
        num: 3,
        title: "Будьте честны",
        quote: "Честность — это то, без чего нельзя жить. Если вы честны, то и это уже большое дело.",
        explanation: "Чехов считал честность фундаментом, на котором строится всё остальное: доверие, уважение, любовь.",
        category: "character",
        categoryLabel: "Характер",
        source: "Письмо брату Н.П. Чехову, 1886"
    },
    {
        num: 4,
        title: "Будьте обходительны и вежливы",
        quote: "Обходительность и вежливость — это не пустяки. Это то, что делает жизнь людей терпимее.",
        explanation: "Хорошие манеры — это не снобизм, а уважение к окружающим. Чехов настаивал на вежливости как основе человеческого общения.",
        category: "people",
        categoryLabel: "Люди",
        source: "Письмо брату Н.П. Чехову, 1886"
    },
    {
        num: 5,
        title: "Образовывайтесь постоянно",
        quote: "Образованный человек — это тот, кто уважает в человеческой личности всегда человеческое.",
        explanation: "Образование для Чехова — не диплом, а способность видеть в каждом человеке личность, независимо от его статуса.",
        category: "character",
        categoryLabel: "Характер",
        source: "Письмо брату Н.П. Чехову, 1886"
    },
    {
        num: 6,
        title: "Будьте снисходительны к другим",
        quote: "Снисходительность — это не слабость, а признак силы духа и образования.",
        explanation: "Чехов призывал не судить людей строго, а понимать их слабости и прощать ошибки.",
        category: "people",
        categoryLabel: "Люди",
        source: "Письмо брату Н.П. Чехову, 1886"
    },
    {
        num: 7,
        title: "Будьте скромны",
        quote: "Скромность — украшение человека. Хвастовство и тщеславие — признаки внутренней пустоты.",
        explanation: "Чехов не терпел самолюбования и считал скромность признаком подлинного достоинства.",
        category: "character",
        categoryLabel: "Характер",
        source: "Письмо брату Н.П. Чехову, 1886"
    },
    {
        num: 8,
        title: "Будьте требовательны к себе",
        quote: "Требовательность к себе — вот что отличает порядочного человека от дурного.",
        explanation: "Сначала спрашивайте с себя, потом — с других. Этот принцип Чехов ставил во главу угла.",
        category: "character",
        categoryLabel: "Характер",
        source: "Письмо брату Н.П. Чехову, 1886"
    },
    {
        num: 9,
        title: "Краткость — сестра таланта",
        quote: "Краткость — сестра таланта.",
        explanation: "Умение выражать мысли лаконично — не только литературный приём, но и жизненный навык. Цените время — своё и чужое.",
        category: "work",
        categoryLabel: "Труд",
        source: "Письмо брату А.П. Чехову, 1889"
    },
    {
        num: 10,
        title: "Человек создан для счастья",
        quote: "Человек создан для счастья, как птица для полёта.",
        explanation: "Счастье — не роскошь, а естественное состояние человека. Не отказывайтесь от него из ложного чувства долга.",
        category: "life",
        categoryLabel: "Жизнь",
        source: "Рассказ «Крыжовник», 1891"
    },
    {
        num: 11,
        title: "Не живите вчерашним днём",
        quote: "Зачем жить в прошлом, когда будущее ещё не наступило? Живите настоящим.",
        explanation: "Чехов считал, что ностальгия и сожаления о прошлом мешают жить полноценно в настоящем.",
        category: "life",
        categoryLabel: "Жизнь",
        source: "Письмо А.С. Суворину, 1894"
    },
    {
        num: 12,
        title: "Работайте с удовольствием",
        quote: "Работа и сознание, что без тебя нельзя — вот в чём счастье и наслаждение жизнью.",
        explanation: "Найдите дело, без которого мир будет неполным. Именно это приносит подлинное удовлетворение.",
        category: "work",
        categoryLabel: "Труд",
        source: "Письмо А.С. Суворину, 1894"
    },
    {
        num: 13,
        title: "Не откладывайте на завтра",
        quote: "Не надо откладывать на завтра то, что можно сделать сегодня. Жизнь коротка.",
        explanation: "Прокрастинация — враг счастья. Чехов был невероятно продуктивен именно потому, что не откладывал дела.",
        category: "work",
        categoryLabel: "Труд",
        source: "Письмо брату М.П. Чехову, 1887"
    },
    {
        num: 14,
        title: "Уважайте человеческую личность",
        quote: "Образованные люди уважают в человеческой личности всегда человеческое, независимо от цвета кожи, веры, сословия.",
        explanation: "Чехов был убеждённым гуманистом: достоинство человека не зависит от его происхождения, достатка или образования.",
        category: "people",
        categoryLabel: "Люди",
        source: "Письмо брату Н.П. Чехову, 1886"
    },
    {
        num: 15,
        title: "Не терпите пошлости",
        quote: "Пошлость — это то, что разъедает душу незаметно, как ржавчина железо.",
        explanation: "Бороться с пошлостью — значит сохранять внутреннюю чистоту. Чехов считал пошлость главным врагом культуры.",
        category: "soul",
        categoryLabel: "Душа",
        source: "Рассказ «Ионыч», 1898"
    },
    {
        num: 16,
        title: "Заботьтесь о здоровье",
        quote: "Здоровье — это такое состояние, при котором каждый орган работает, не напоминая о себе.",
        explanation: "Как врач, Чехов знал: здоровье — основа всего. Берегите его, пока оно есть.",
        category: "life",
        categoryLabel: "Жизнь",
        source: "Из записных книжек Чехова"
    },
    {
        num: 17,
        title: "Любите природу",
        quote: "Если любишь природу, то и в ней находишь красоту. А красота спасёт мир.",
        explanation: "Природа для Чехова была источником вдохновения и утешения. Проводите время на свежем воздухе.",
        category: "soul",
        categoryLabel: "Душа",
        source: "Рассказ «Степь», 1888"
    },
    {
        num: 18,
        title: "Не будьте равнодушны",
        quote: "Равнодушие — это духовная смерть. Кто равнодушен, тот уже не жив.",
        explanation: "Чехов не прощал безразличия. Сопереживание, участие, неравнодушие — признаки живой души.",
        category: "people",
        categoryLabel: "Люди",
        source: "Письмо В.А. Гольцеву, 1890"
    },
    {
        num: 19,
        title: "Не жалуйтесь на жизнь",
        quote: "Не надо ныть. Нытьё — это самое скверное, что может делать человек.",
        explanation: "Чехов терпеть не мог жалобщиков. Вместо нытья — действуйте. Вместо жалоб — находите решения.",
        category: "character",
        categoryLabel: "Характер",
        source: "Письмо А.С. Суворину, 1895"
    },
    {
        num: 20,
        title: "Цените свободу",
        quote: "Я не либерал, не консерватор, не прогрессист, не монах, не индифферент. Я хотел бы быть свободным человеком.",
        explanation: "Свобода мысли и действий — высшая ценность. Не позволяйте догмам и ярлыкам ограничивать вас.",
        category: "character",
        categoryLabel: "Характер",
        source: "Письмо А.С. Суворину, 1888"
    },
    {
        num: 21,
        title: "Делайте добро молча",
        quote: "Делая добро, не трубите об этом. Добро, о котором говорят, перестаёт быть добром.",
        explanation: "Чехов помогал людям тихо: строил школы, лечил крестьян, жертвовал деньги — и не афишировал это.",
        category: "people",
        categoryLabel: "Люди",
        source: "Из биографии Чехова, письма к друзьям"
    },
    {
        num: 22,
        title: "Не бойтесь меняться",
        quote: "Всё в человеке должно меняться: и душа, и лицо, и одежда, и мысли.",
        explanation: "Развитие — это постоянный процесс. Не бойтесь меняться, расти и пересматривать свои убеждения.",
        category: "life",
        categoryLabel: "Жизнь",
        source: "Пьеса «Дядя Ваня», 1897"
    },
    {
        num: 23,
        title: "Цените время",
        quote: "Время — самое ценное, что у нас есть. Не тратьте его на пустяки.",
        explanation: "Чехов был невероятно бережлив к своему времени. Он работал по расписанию и не терпел бессмысленных трат времени.",
        category: "work",
        categoryLabel: "Труд",
        source: "Письмо брату М.П. Чехову, 1887"
    },
    {
        num: 24,
        title: "Не гонитесь за славой",
        quote: "Слава — это дым. Дело — вот что важно.",
        explanation: "Чехов не стремился к славе. Он писал каждый день, не ради признания, а потому что не мог не писать.",
        category: "work",
        categoryLabel: "Труд",
        source: "Письмо Д.В. Григоровичу, 1886"
    },
    {
        num: 25,
        title: "Любите жизнь такой, какая она есть",
        quote: "Жизнь надо любить, и тогда всё будет хорошо. Надо жить, надо любить, надо верить.",
        explanation: "Даже в самые трудные моменты Чехов находил поводы для радости. Любовь к жизни — главный секрет счастья.",
        category: "soul",
        categoryLabel: "Душа",
        source: "Письмо О.Л. Книппер, 1900"
    }
];

const timelineData = [
    { year: 1860, title: "Рождение в Таганроге", text: "Антон Чехов родился 29 января в семье купца третьей гильдии. Детство в лавке отца стало школой наблюдения за людьми." },
    { year: 1879, title: "Учёба в Москве", text: "Поступил на медицинский факультет Московского университета. Начал писать юмористические рассказы под псевдонимом «Антоша Чехонте»." },
    { year: 1886, title: "Знаменитое письмо брату", text: "Написал брату Николаю письмо с восемью заповедями образованного человека — один из самых известных текстов Чехова." },
    { year: 1890, title: "Путешествие на Сахалин", text: "Проехал через всю Сибирь до острова Сахалин, где изучал жизнь каторжан. Впечатления легли в основу книги «Остров Сахалин»." },
    { year: 1892, title: "Мелихово", text: "Купил имение Мелихово под Москвой. Построил школы, больницы, лечил крестьян. Здесь созданы «Палата №6», «Дядя Ваня»." },
    { year: 1897, title: "Переезд в Крым", text: "Из-за болезни лёгких переехал в Ялту. Основал Ялтинскую больницу и санаторий для туберкулёзных больных." },
    { year: 1901, title: "Женитьба", text: "Женился на актрисе МХТ Ольге Книппер. Их переписка — один из самых красивых литературных эпистоляриев в русской истории." },
    { year: 1904, title: "Наследие", text: "Чехов скончался 15 июля в Баденвайлере. Оставил миру более 600 рассказов, пьесы, ставшие классикой, и мудрость, актуальную по сей день." }
];

const sourcesData = [
    { icon: "✉️", title: "Письмо брату Н.П. Чехову (29 марта 1886)", text: "Знаменитое письмо с восемью заповедями: трезвость, честность, обходительность, образованность, снисходительность, скромность, вежливость, требовательность к себе." },
    { icon: "🎭", title: "Пьеса «Дядя Ваня» (1897)", text: "Цитата о том, что в человеке должно быть всё прекрасно — лицо, одежда, душа и мысли. Одна из самых известных фраз Чехова." },
    { icon: "📖", title: "Рассказ «Крыжовник» (1891)", text: "Фраза «Человек создан для счастья, как птица для полёта» — одна из ключевых мыслей Чехова о предназначении человека." },
    { icon: "📝", title: "Записные книжки Чехова", text: "Многие афоризмы и наблюдения взяты из записных книжек, которые Чехов вёл на протяжении всей жизни." },
    { icon: "💌", title: "Переписка с А.С. Сувориным", text: "Письма к издателю Суворину — один из самых ценных источников взглядов Чехова на литературу, жизнь и человеческое достоинство." },
    { icon: "💌", title: "Письма к О.Л. Книппер", text: "Переписка с женой, актрисой Ольгой Книппер, раскрывает Чехова как человека, любящего жизнь и ценящего каждое мгновение." }
];

// ============================================
// АНИМАЦИЯ СЧЁТЧИКОВ (исправленная)
// ============================================
let countersAnimated = false;

function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;

    var counters = document.querySelectorAll('.stat-number');
    counters.forEach(function(counter) {
        var target = parseInt(counter.getAttribute('data-count'));
        var duration = 2000;
        var start = performance.now();

        function update(currentTime) {
            var elapsed = currentTime - start;
            var progress = Math.min(elapsed / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = Math.floor(eased * target);

            if (target >= 100) {
                counter.textContent = current + '+';
            } else {
                counter.textContent = current;
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    });
}

// ============================================
// РЕНДЕР КОНТЕНТА
// ============================================
function renderTips(filter) {
    if (filter === undefined) filter = 'all';

    var grid = document.getElementById('tipsGrid');
    var filtered;

    if (filter === 'all') {
        filtered = tipsData;
    } else {
        filtered = tipsData.filter(function(t) {
            return t.category === filter;
        });
    }

    grid.innerHTML = filtered.map(function(tip, index) {
        return '<div class="tip-card" data-category="' + tip.category + '" style="transition-delay: ' + (index * 0.05) + 's">' +
            '<div class="tip-header">' +
                '<div class="tip-number">' + tip.num + '</div>' +
                '<h3 class="tip-title">' + tip.title + '</h3>' +
            '</div>' +
            '<div class="tip-quote">«' + tip.quote + '»</div>' +
            '<p class="tip-explanation">' + tip.explanation + '</p>' +
            '<div class="tip-footer">' +
                '<span class="tip-category">' + tip.categoryLabel + '</span>' +
                '<span class="tip-source">📌 ' + tip.source + '</span>' +
            '</div>' +
            '</div>';
    }).join('');

    observeCards();
}

function renderTimeline() {
    var container = document.getElementById('timelineContainer');
    container.innerHTML = timelineData.map(function(item) {
        return '<div class="timeline-item">' +
            '<div class="timeline-dot">' + item.year + '</div>' +
            '<div class="timeline-content">' +
                '<h4>' + item.title + '</h4>' +
                '<p>' + item.text + '</p>' +
            '</div>' +
            '</div>';
    }).join('');
    observeTimeline();
}

function renderSources() {
    var grid = document.getElementById('sourcesGrid');
    grid.innerHTML = sourcesData.map(function(s) {
        return '<div class="source-item">' +
            '<div class="source-icon">' + s.icon + '</div>' +
            '<div>' +
                '<h4>' + s.title + '</h4>' +
                '<p>' + s.text + '</p>' +
            '</div>' +
            '</div>';
    }).join('');
}

// ============================================
// АНИМАЦИИ ПРИ СКРОЛЛЕ
// ============================================
function observeCards() {
    var cards = document.querySelectorAll('.tip-card');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    cards.forEach(function(card) {
        observer.observe(card);
    });
}

function observeTimeline() {
    var items = document.querySelectorAll('.timeline-item');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    items.forEach(function(item) {
        observer.observe(item);
    });
}

// ============================================
// СОБЫТИЯ ИНТЕРФЕЙСА
// ============================================
document.getElementById('filterBar').addEventListener('click', function(e) {
    if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('.filter-btn').forEach(function(btn) {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        renderTips(e.target.getAttribute('data-filter'));
    }
});

window.addEventListener('scroll', function() {
    var nav = document.getElementById('nav');
    var scrollTop = document.getElementById('scrollTop');
    var progressBar = document.getElementById('progressBar');

    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    if (window.scrollY > 500) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progressBar.style.width = (winScroll / height) * 100 + '%';
});

document.getElementById('scrollTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('navToggle').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById('navLinks').classList.remove('open');
    });
});

// ============================================
// ЗАПУСК ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// ============================================
document.addEventListener('DOMContentLoaded', function() {

    renderTips();
    renderTimeline();
    renderSources();

    // Сразу проверяем, видна ли секция stats
    var statsSection = document.querySelector('.stats');
    if (statsSection) {
        var rect = statsSection.getBoundingClientRect();
        var windowHeight = window.innerHeight;

        // Если секция уже видна — запускаем сразу
        if (rect.top < windowHeight && rect.bottom > 0) {
            animateCounters();
        } else {
            // Иначе ждём скролла
            var statsObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        animateCounters();
                        statsObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });

            statsObserver.observe(statsSection);
        }
    }

    // Fallback: если через 3 секунды счётчики всё ещё 0 — запускаем принудительно
    setTimeout(function() {
        if (!countersAnimated) {
            animateCounters();
        }
    }, 3000);
});