const collections = [
  {
    name: 'Apex One',
    price: '$84,000',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg',
    desc: 'A skeletonised performance piece with sharp geometry and carbon reinforcement.',
    tags: ['Titanium', 'Skeleton dial', 'Limited']
  },
  {
    name: 'Stratos 8',
    price: '$96,500',
    image: 'https://images.pexels.com/photos/60147/pexels-photo-60147.jpeg?cs=srgb&dl=pexels-caio-60147.jpg&fm=jpg',
    desc: 'Designed for collectors who want a lighter case, richer contrast, and deep texture.',
    tags: ['Ceramic', 'Lightweight', 'Automatic']
  },
  {
    name: 'Noir Ultra',
    price: '$112,000',
    image: 'https://images.pexels.com/photos/13009534/pexels-photo-13009534.jpeg?cs=srgb&dl=pexels-obi-onyeador-1787470-13009534.jpg&fm=jpg',
    desc: 'A high-contrast statement model with matte surfaces and a technical profile.',
    tags: ['Black DLC', 'Tourbillon', 'Rare']
  },
  {
    name: 'Vector S',
    price: '$88,250',
    image: 'https://images.pexels.com/photos/3809175/pexels-photo-3809175.jpeg?cs=srgb&dl=pexels-leef-parks-1921359-3809175.jpg&fm=jpg',
    desc: 'A clean architecture with a sculptural dial and subtle racing accents.',
    tags: ['Aero case', 'Micro-rotor', 'Sport']
  },
  {
    name: 'Chrono X',
    price: '$103,400',
    image: 'https://images.pexels.com/photos/3651587/pexels-photo-3651587.jpeg?cs=srgb&dl=pexels-lucanardone-3651587.jpg&fm=jpg',
    desc: 'Built for fast-moving lifestyles with strong wrist presence and refined finishing.',
    tags: ['Chronograph', 'Carbon', 'Edition']
  },
  {
    name: 'Kinetic RS',
    price: '$118,900',
    image: 'https://images.pexels.com/photos/37322602/pexels-photo-37322602.jpeg?cs=srgb&dl=pexels-atelierbyvineeth-37322602.jpg&fm=jpg',
    desc: 'The flagship expression of the house, balancing performance and quiet opulence.',
    tags: ['Flagship', 'Hand-finished', 'Collector']
  }
];

const partners = [
  {
    name: 'Luca Varen',
    role: 'Formula athlete',
    image: 'https://images.pexels.com/photos/19190733/pexels-photo-19190733.jpeg?cs=srgb&dl=pexels-mohammed-mzabi-354361-19190733.jpg&fm=jpg',
    desc: 'A speed specialist whose precision and discipline match the house philosophy.',
    tags: ['Racing', 'Ambassador']
  },
  {
    name: 'Maya Solis',
    role: 'Endurance captain',
    image: 'https://images.pexels.com/photos/9267843/pexels-photo-9267843.jpeg?cs=srgb&dl=pexels-faizialiphotography-9267843.jpg&fm=jpg',
    desc: 'A modern competitor known for composure, stamina, and elegant presence.',
    tags: ['Endurance', 'Partner']
  },
  {
    name: 'Theo Kade',
    role: 'Motorsport icon',
    image: 'https://images.pexels.com/photos/37547216/pexels-photo-37547216.jpeg?cs=srgb&dl=pexels-parth-patel-2161339175-37547216.jpg&fm=jpg',
    desc: 'An athlete-partner whose public profile reflects movement, power, and style.',
    tags: ['Motorsport', 'Collaborator']
  },
  {
    name: 'Apex Sailing Lab',
    role: 'Brand partner',
    image: 'https://images.pexels.com/photos/3419331/pexels-photo-3419331.jpeg?cs=srgb&dl=pexels-sairam-rasa-587546-3419331.jpg&fm=jpg',
    desc: 'A technical collaboration with a design-led performance outfit.',
    tags: ['Design', 'Innovation']
  }
];

const showcaseSlides = [
  {
    name: 'RM-01 Motion',
    subtitle: 'Ultra-light flagship',
    price: '$134,000',
    image: 'https://images.pexels.com/photos/30250930/pexels-photo-30250930.jpeg?cs=srgb&dl=pexels-perfect-shutters-1353567885-30250930.jpg&fm=jpg',
    copy: 'A dramatic open-worked profile that frames the movement with a racing-inspired stance.'
  },
  {
    name: 'RM-02 Carbon Core',
    subtitle: 'Technical everyday wear',
    price: '$97,500',
    image: 'https://images.pexels.com/photos/19810831/pexels-photo-19810831.jpeg?cs=srgb&dl=pexels-lesandu-alokabandara-670648380-19810831.jpg&fm=jpg',
    copy: 'Carbon accents, deep contrast, and a more understated case shape for daily use.'
  },
  {
    name: 'RM-03 Horizon',
    subtitle: 'Collector edition',
    price: '$149,800',
    image: 'https://images.pexels.com/photos/37322602/pexels-photo-37322602.jpeg?cs=srgb&dl=pexels-atelierbyvineeth-37322602.jpg&fm=jpg',
    copy: 'A special edition with a stronger dial expression and a dramatic case silhouette.'
  }
];

const news = [
  {
    date: '07 Jun 2026',
    title: 'The atelier reveals a new titanium finish',
    image: 'https://images.pexels.com/photos/8839604/pexels-photo-8839604.jpeg?cs=srgb&dl=pexels-vvs-440853-8839604.jpg&fm=jpg'
  },
  {
    date: '28 May 2026',
    title: 'Performance edition worn at the summer circuit launch',
    image: 'https://images.pexels.com/photos/13009534/pexels-photo-13009534.jpeg?cs=srgb&dl=pexels-obi-onyeador-1787470-13009534.jpg&fm=jpg'
  },
  {
    date: '14 May 2026',
    title: 'Inside the craft of open-worked luxury movements',
    image: 'https://images.pexels.com/photos/29298231/pexels-photo-29298231.jpeg?cs=srgb&dl=pexels-iamtausifhossain9321-29298231.jpg&fm=jpg'
  }
];

const state = {
  showcaseIndex: 0,
  showcaseTimer: null
};

const root = document.documentElement;
const body = document.body;
const collectionGrid = document.querySelector('[data-collection-grid]');
const partnerGrid = document.querySelector('[data-partner-grid]');
const newsGrid = document.querySelector('[data-news-grid]');
const showcaseTrack = document.querySelector('[data-showcase-track]');
const showcaseDots = document.querySelector('[data-showcase-dots]');
const prevButton = document.querySelector('[data-showcase-prev]');
const nextButton = document.querySelector('[data-showcase-next]');
const spinRange = document.querySelector('[data-spin-range]');
const spinDisplay = document.querySelector('[data-spin-display]');
const themeToggle = document.querySelector('[data-theme-toggle]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileMenu = document.getElementById('mobile-menu');
const searchToggle = document.querySelector('[data-search-toggle]');
const searchPanel = document.querySelector('[data-search-panel]');
const searchClose = document.querySelector('[data-search-close]');
const newsletterForm = document.querySelector('[data-newsletter-form]');

function createCollectionCard(item) {
  return `
    <article class="collection-card reveal">
      <div class="collection-card__media">
        <img src="${item.image}" alt="${item.name} luxury watch" loading="lazy" />
      </div>
      <div class="collection-card__body">
        <div class="collection-card__meta">
          <strong>${item.name}</strong>
          <span>${item.price}</span>
        </div>
        <p>${item.desc}</p>
        <div class="collection-card__tags">
          ${item.tags.map((tag) => `<span>${tag}</span>`).join('')}
        </div>
      </div>
    </article>
  `;
}

function createPartnerCard(item) {
  return `
    <article class="partner-card reveal">
      <div class="partner-card__media">
        <img src="${item.image}" alt="${item.name} portrait" loading="lazy" />
      </div>
      <div class="partner-card__body">
        <small>${item.role}</small>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="partner-card__tags">
          ${item.tags.map((tag) => `<span>${tag}</span>`).join('')}
        </div>
      </div>
    </article>
  `;
}

function createNewsCard(item) {
  return `
    <article class="news-card reveal">
      <div class="news-card__media">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
      </div>
      <div class="news-card__body">
        <div class="news-card__meta">
          <span>${item.date}</span>
          <span>Journal</span>
        </div>
        <h3>${item.title}</h3>
        <p>Editorial coverage, house notes, and product stories written for a luxury audience.</p>
      </div>
    </article>
  `;
}

function renderShowcase() {
  showcaseTrack.innerHTML = showcaseSlides
    .map((slide, index) => `
      <article class="showcase-slide ${index === state.showcaseIndex ? 'is-active' : ''}" data-slide-index="${index}">
        <div class="showcase-slide__media">
          <img src="${slide.image}" alt="${slide.name}" loading="lazy" />
        </div>
        <div class="showcase-slide__content">
          <div>
            <h3>${slide.name}</h3>
            <p>${slide.subtitle}</p>
            <p>${slide.copy}</p>
          </div>
          <strong class="showcase-slide__price">${slide.price}</strong>
        </div>
      </article>
    `)
    .join('');

  showcaseDots.innerHTML = showcaseSlides
    .map((slide, index) => `<button type="button" aria-label="Show ${slide.name}" class="${index === state.showcaseIndex ? 'is-active' : ''}" data-showcase-dot="${index}"></button>`)
    .join('');
}

function setShowcase(index) {
  const slides = [...document.querySelectorAll('[data-slide-index]')];
  const dots = [...document.querySelectorAll('[data-showcase-dot]')];
  state.showcaseIndex = (index + showcaseSlides.length) % showcaseSlides.length;

  slides.forEach((slide) => {
    slide.classList.toggle('is-active', Number(slide.dataset.slideIndex) === state.showcaseIndex);
  });

  dots.forEach((dot) => {
    dot.classList.toggle('is-active', Number(dot.dataset.showcaseDot) === state.showcaseIndex);
  });

  restartShowcaseTimer();
}

function restartShowcaseTimer() {
  window.clearInterval(state.showcaseTimer);
  state.showcaseTimer = window.setInterval(() => setShowcase(state.showcaseIndex + 1), 6500);
}

function initRevealAnimations() {
  const revealItems = document.querySelectorAll('.reveal');
  revealItems.forEach((item, index) => {
    item.style.setProperty('--delay', `${Math.min(index * 36, 240)}ms`);
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18, rootMargin: '40px 0px -10px 0px' });

  revealItems.forEach((item) => observer.observe(item));
}

function animateCounters() {
  const stats = document.querySelectorAll('[data-count]');
  const storySection = document.getElementById('story');
  if (!storySection || !stats.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      stats.forEach((stat) => {
        const target = Number(stat.dataset.count);
        const duration = 1200;
        const startTime = performance.now();

        const tick = (time) => {
          const progress = Math.min((time - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          stat.textContent = Math.round(target * eased).toString();
          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
      });

      obs.unobserve(entry.target);
    });
  }, { threshold: 0.4 });

  observer.observe(storySection);
}

function setupTheme() {
  root.dataset.theme = 'dark';
  localStorage.setItem('aurel-theme', 'dark');

  themeToggle.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = nextTheme;
    localStorage.setItem('aurel-theme', nextTheme);
  });
}

function preloadImages() {
  const sources = [...collections, ...partners, ...showcaseSlides, ...news].map((item) => item.image);
  sources.forEach((source) => {
    const image = new Image();
    image.decoding = 'async';
    image.src = source;
  });
}

function setupMenu() {
  const closeMenu = () => {
    mobileMenu.hidden = true;
    mobileMenu.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    body.classList.remove('nav-open');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = !mobileMenu.hidden;
    mobileMenu.hidden = isOpen;
    mobileMenu.classList.toggle('is-open', !isOpen);
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    body.classList.toggle('nav-open', !isOpen);
  });

  mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1180) closeMenu();
  });
}

function setupSearch() {
  const openSearch = () => {
    searchPanel.hidden = false;
    body.classList.add('nav-open');
    const input = searchPanel.querySelector('input');
    window.setTimeout(() => input?.focus(), 50);
  };

  const closeSearch = () => {
    searchPanel.hidden = true;
    body.classList.remove('nav-open');
  };

  searchToggle.addEventListener('click', openSearch);
  searchClose.addEventListener('click', closeSearch);
  searchPanel.addEventListener('click', (event) => {
    if (event.target === searchPanel) closeSearch();
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !searchPanel.hidden) closeSearch();
  });
}

function setupParallax() {
  const parallaxItems = [...document.querySelectorAll('[data-parallax]')];

  const updateParallax = () => {
    const scrollY = window.scrollY;
    parallaxItems.forEach((item) => {
      const speed = Number(item.dataset.parallaxSpeed || 0.18);
      item.style.transform = `translate3d(0, ${scrollY * speed * -0.12}px, 0)`;
    });
  };

  updateParallax();
  window.addEventListener('scroll', updateParallax, { passive: true });
}

function setupHeroTilt() {
  const heroVisual = document.querySelector('.hero__visual');
  const heroWatch = document.querySelector('.hero-watch');
  if (!heroVisual || !heroWatch) return;

  heroVisual.addEventListener('pointermove', (event) => {
    const bounds = heroVisual.getBoundingClientRect();
    const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;
    heroWatch.style.transform = `translate3d(${offsetX * 16}px, ${offsetY * 16}px, 0) rotate(${offsetX * 8 - 10}deg)`;
  });

  heroVisual.addEventListener('pointerleave', () => {
    heroWatch.style.transform = 'translate3d(0, 0, 0) rotate(-10deg)';
  });
}

function setupShowcase() {
  renderShowcase();
  setShowcase(0);

  prevButton.addEventListener('click', () => setShowcase(state.showcaseIndex - 1));
  nextButton.addEventListener('click', () => setShowcase(state.showcaseIndex + 1));
  showcaseDots.addEventListener('click', (event) => {
    const button = event.target.closest('[data-showcase-dot]');
    if (!button) return;
    setShowcase(Number(button.dataset.showcaseDot));
  });

  showcaseTrack.addEventListener('mouseenter', () => window.clearInterval(state.showcaseTimer));
  showcaseTrack.addEventListener('mouseleave', restartShowcaseTimer);
  restartShowcaseTimer();
}

function setup360Viewer() {
  const updateSpin = () => {
    const value = Number(spinRange.value || 0);
    spinDisplay.style.setProperty('--spin', `${value - 180}deg`);
  };

  spinRange.addEventListener('input', updateSpin);
  updateSpin();
}

function setupNewsletter() {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = newsletterForm.querySelector('button');
    const input = newsletterForm.querySelector('input');
    button.textContent = 'Subscribed';
    button.disabled = true;
    input.value = '';
  });
}

function renderStaticSections() {
  collectionGrid.innerHTML = collections.map(createCollectionCard).join('');
  partnerGrid.innerHTML = partners.map(createPartnerCard).join('');
  newsGrid.innerHTML = news.map(createNewsCard).join('');
}

function boot() {
  preloadImages();
  renderStaticSections();
  setupTheme();
  setupMenu();
  setupSearch();
  setupShowcase();
  setup360Viewer();
  setupNewsletter();
  initRevealAnimations();
  animateCounters();
  setupParallax();
  setupHeroTilt();

  window.requestAnimationFrame(() => {
    root.classList.remove('is-loading');
    body.classList.add('is-ready');
  });
}

document.addEventListener('DOMContentLoaded', boot);
window.addEventListener('load', () => root.classList.remove('is-loading'));
