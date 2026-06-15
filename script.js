```javascript
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const specsData = {
    gaming: {
        title: 'Игровая конфигурация',
        desc: 'Ориентирована на максимальную частоту кадров и визуальное качество.',
        items: [
            { name: 'Процессор', val: 'Intel Core i9-14900K / Ryzen 7 7800X3D', pct: 95 },
            { name: 'Видеокарта', val: 'NVIDIA RTX 4080 SUPER 16GB', pct: 98 },
            { name: 'Оперативная память', val: '32GB DDR5 6000MHz CL30', pct: 85 },
            { name: 'Накопитель', val: '2TB NVMe SSD PCIe 4.0', pct: 90 }
        ]
    },
    work: {
        title: 'Офисная конфигурация',
        desc: 'Баланс производительности, энергоэффективности и надёжности.',
        items: [
            { name: 'Процессор', val: 'Intel Core i5-14400 / Ryzen 5 7600', pct: 65 },
            { name: 'Видеокарта', val: 'Интегрированная / RTX 3050 6GB', pct: 40 },
            { name: 'Оперативная память', val: '16GB DDR5 5200MHz', pct: 60 },
            { name: 'Накопитель', val: '512GB NVMe SSD', pct: 50 }
        ]
    },
    creative: {
        title: 'Творческая конфигурация',
        desc: 'Мощность для рендеринга, монтажа и работы с графикой высокого разрешения.',
        items: [
            { name: 'Процессор', val: 'AMD Ryzen 9 7950X / Intel Core i9-14900K', pct: 98 },
            { name: 'Видеокарта', val: 'NVIDIA RTX 4090 24GB', pct: 100 },
            { name: 'Оперативная память', val: '64GB DDR5 6400MHz', pct: 95 },
            { name: 'Накопитель', val: '4TB NVMe SSD PCIe 4.0 (RAID)', pct: 95 }
        ]
    },
    science: {
        title: 'Научная конфигурация',
        desc: 'Вычислительная мощность для моделирования и анализа данных.',
        items: [
            { name: 'Процессор', val: 'AMD Threadripper 7960X (24 ядра)', pct: 100 },
            { name: 'Видеокарта', val: 'NVIDIA RTX 6000 Ada 48GB', pct: 100 },
            { name: 'Оперативная память', val: '128GB DDR5 ECC', pct: 100 },
            { name: 'Накопитель', val: '8TB NVMe Enterprise SSD', pct: 98 }
        ]
    }
};

function switchTab(tabKey) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.dataset.tab === tabKey) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    const data = specsData[tabKey];
    const container = document.getElementById('specContent');
    
    let html = `
        <div class="mb-8">
            <h3 class="text-2xl font-medium mb-2">${data.title}</h3>
            <p class="text-zinc-500 text-sm">${data.desc}</p>
        </div>
        <div class="space-y-6">
    `;
    
    data.items.forEach((item) => {
        html += `
            <div>
                <div class="flex justify-between items-baseline mb-2">
                    <span class="text-sm font-medium text-zinc-300">${item.name}</span>
                    <span class="text-xs text-zinc-500">${item.pct}%</span>
                </div>
                <div class="w-full h-1.5 rounded-full progress-bg overflow-hidden">
                    <div class="progress-fill h-full rounded-full" style="width: 0%" data-width="${item.pct}%"></div>
                </div>
                <div class="text-xs text-zinc-600 mt-1.5">${item.val}</div>
            </div>
        `;
    });
    html += '</div>';
    container.innerHTML = html;

    setTimeout(() => {
        container.querySelectorAll('.progress-fill').forEach(bar => {
            bar.style.width = bar.dataset.width;
        });
    }, 50);
}

switchTab('gaming');
```