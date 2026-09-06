/* Portfolio choreography. Content and links work without this enhancement.
   Independent translate/rotate/scale preserve existing layout transforms. */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const ease = 'cubic-bezier(.16,1,.3,1)';
  const spring = 'cubic-bezier(.22,1.22,.36,1)';
  const active = new Set();
  const configurations = new Map();
  const seen = new WeakSet();
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const animate = (el, frames, options = {}) => {
    if (reduce.matches || !el.animate) return;
    const a = el.animate(frames, {duration: 850, easing: ease, fill: 'backwards', ...options});
    active.add(a);
    a.finished.then(() => active.delete(a), () => active.delete(a));
    return a;
  };
  const register = (selector, type, delay = 0) => {
    document.querySelectorAll(selector).forEach(el => configurations.set(el, {type, delay}));
  };

  // Keep the source text and natural wrapping; words on each rendered row move together.
  const splitHeading = el => {
    if (el.querySelector('.motion-word') || el.querySelector('a, button')) return;
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const texts = [];
    while (walker.nextNode()) texts.push(walker.currentNode);
    for (const text of texts) {
      const fragment = document.createDocumentFragment();
      for (const token of text.textContent.split(/(\s+)/)) {
        if (!token.trim()) { fragment.append(document.createTextNode(token)); continue; }
        const span = document.createElement('span');
        span.className = 'motion-word';
        span.textContent = token;
        fragment.append(span);
      }
      text.replaceWith(fragment);
    }
  };

  register('.fx, .fx-up', 'rise');
  register('.hero__text > *, .hero__card > .fx-up', 'intro', 300);
  register('.hero__text h1, .case-hero h1', 'title', 100);
  register('.sec-head h2, .case-head h2, .panel__head h2, .all-projects .page-title', 'title');
  register('.amz-hmw-question, .hmw-item h3, .fragmented-pill, .without-label', 'title');
  register('.case-hero__identity > img, .about-portrait', 'identity');
  register('.case-meta > div', 'intro', 450);
  register('.case figure, .overview-grid figure', 'image');
  register('.card', 'card');
  register('.gallery img', 'photo');
  register('.stat b', 'number');
  register('.stat > span', 'rise', 170);
  register('.amz-pair-arrow, .impact-cards__arrow', 'arrow', 180);
  register('.amz-hmw-mark, .hmw-quote', 'quote');
  register('.work-pair__text > *, .work-pair__media > *, .step', 'rise');
  register('.footer__brand', 'signature');
  register('.footer__bottom', 'rise', 140);
  register('.hero__lede', 'intro', 380);
  // The error page is a short, complete scene, with immediately usable links.
  if (!document.body.className) {
    register('#main h1', 'title');
    register('#main .pill', 'number');
  }
  configurations.delete(document.querySelector('.nav'));

  document.querySelectorAll('.problem-cards, .impact-cards-row, .impact-cards').forEach(group => {
    [...group.children].forEach((el, i) => {
      if (configurations.has(el)) configurations.get(el).delay = i * 180;
    });
  });
  document.querySelectorAll('.grid-3, .stats, .case-meta, .hmw-items').forEach(group => {
    [...group.children].forEach((el, i) => {
      for (const [candidate, config] of configurations) {
        if (candidate === el || el.contains(candidate)) config.delay += i * 90;
      }
    });
  });

  const candidates = [...configurations.keys()];
  const items = candidates.filter(el => !candidates.some(child => child !== el && el.contains(child)));
  candidates.forEach(el => el.classList.add('is-in'));
  items.forEach(el => {
    el.dataset.motion = configurations.get(el).type;
    if (configurations.get(el).type === 'title') splitHeading(el);
  });

  const reveal = (el, rowDelay = 0) => {
    if (seen.has(el)) return;
    seen.add(el);
    el.dataset.motionSeen = '';
    const {type, delay: configuredDelay} = configurations.get(el);
    const rect = el.getBoundingClientRect();
    if (rect.bottom < 0 || reduce.matches || el.contains(document.activeElement)) return;
    const mobile = innerWidth < 810;
    const delay = mobile ? Math.min(configuredDelay + rowDelay, 120) : Math.min(configuredDelay + rowDelay, 600);
    const duration = mobile ? 680 : 850;
    if (type === 'title') {
      const words = [...el.querySelectorAll('.motion-word')];
      const rows = [];
      words.forEach(word => {
        const top = Math.round(word.getBoundingClientRect().top);
        let row = rows.findIndex(y => Math.abs(top - y) < 6);
        if (row < 0) { rows.push(top); row = rows.length - 1; }
        animate(word, [
          {opacity: 0, translate: '0 80%', rotate: '3deg', clipPath: 'inset(0 0 100% 0)'},
          {opacity: 1, translate: '0 0', rotate: '0deg', clipPath: 'inset(-15% -10% -15% -10%)'}
        ], {duration: mobile ? 760 : 1000, delay: delay + row * (mobile ? 65 : 110)});
      });
      return;
    }
    if (type === 'arrow') {
      animate(el, [{opacity: 0, clipPath: mobile ? 'inset(0 0 100% 0)' : 'inset(0 100% 0 0)'},
        {opacity: 1, clipPath: 'inset(-10%)'}], {duration: 650, delay});
    } else if (type === 'image') {
      // A soft lift keeps the image readable from the first frame; panoramas keep scrolling.
      animate(el, [{opacity: 0, translate: '0 18px'},
        {opacity: 1, translate: '0 0'}], {duration: 720, delay});
    } else if (type === 'number') {
      animate(el, [{opacity: 0, transform: 'perspective(600px) rotateX(-75deg) translateY(35px)'},
        {opacity: 1, transform: 'perspective(600px) rotateX(0) translateY(0)'}], {duration: 900, delay, easing: spring});
    } else if (type === 'photo') {
      const index = [...el.parentElement.children].indexOf(el);
      animate(el, [{opacity: 0, translate: '0 48px', scale: '.965', filter: 'saturate(.82)'},
        {opacity: 1, translate: '0 0', scale: '1', filter: 'saturate(1)'}], {duration: 720, delay: delay + index * 70, easing: spring});
    } else if (type === 'card') {
      animate(el, [{opacity: 0, translate: '0 96px'},
        {opacity: 1, translate: '0 0'}], {duration: 700, delay, easing: spring});
    } else if (type === 'identity' || type === 'quote' || type === 'signature') {
      animate(el, [{opacity: 0, translate: '0 35px', scale: type === 'quote' ? '.6' : '.88', rotate: type === 'quote' ? '-10deg' : '0deg'},
        {opacity: 1, translate: '0 0', scale: '1', rotate: '0deg'}], {duration: 1000, delay, easing: spring});
    } else {
      const distance = mobile ? 48 : type === 'card' ? 90 : 72;
      animate(el, [{opacity: 0, translate: `0 ${distance}px`, scale: type === 'card' ? '.94' : '1'},
        {opacity: 1, translate: '0 0', scale: '1'}], {duration, delay});
    }
    if (el.matches('.hero__lede')) {
      el.querySelectorAll('.accent').forEach((word, i) => animate(word,
        [{color: '#fff', textShadow: '0 0 18px #6488ff'}, {color: '#6488ff', textShadow: '0 0 0 transparent'}],
        {duration: 650, delay: delay + 300 + i * 65}));
    }
  };
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const entering = entries.filter(e => e.isIntersecting);
      entering.forEach((entry, index) => {
        const peers = entering.slice(0, index).filter(other => other.target.parentElement === entry.target.parentElement &&
          Math.abs(other.boundingClientRect.top - entry.boundingClientRect.top) < 24).length;
        reveal(entry.target, Math.min(peers * 110, 220));
        observer.unobserve(entry.target);
      });
    }, {threshold: 0, rootMargin: '0px 0px -24px 0px'});
    items.forEach(el => observer.observe(el));
  } else items.forEach(el => reveal(el));

  // Scroll adds depth to the opening scene without taking over the scroll position.
  const hero = document.querySelector('.hero, .case-hero');
  let scrollFrame = 0;
  const scene = () => {
    scrollFrame = 0;
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    const p = reduce.matches ? 0 : clamp(-rect.top / Math.max(rect.height, 1), 0, 1);
    hero.style.setProperty('--scene', p.toFixed(4));
  };
  const scheduleScene = () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(scene); };
  addEventListener('scroll', scheduleScene, {passive: true});
  addEventListener('resize', scheduleScene);
  scene();

  // Pointer effects are event-driven: no perpetual render loop or global cursor replacement.
  const pointers = [];
  const trackPointer = (el, update) => {
    let frame = 0;
    let x = 0, y = 0;
    const paint = () => { frame = 0; update(x, y); };
    const reset = () => { x = 0; y = 0; el.classList.remove('pointer-active'); if (frame) cancelAnimationFrame(frame); frame = 0; update(0, 0); };
    el.addEventListener('pointermove', event => {
      if (!fine.matches || reduce.matches || event.pointerType === 'touch') return;
      const rect = el.getBoundingClientRect();
      x = clamp((event.clientX - rect.left) / rect.width - .5, -.5, .5);
      y = clamp((event.clientY - rect.top) / rect.height - .5, -.5, .5);
      el.classList.add('pointer-active');
      if (!frame) frame = requestAnimationFrame(paint);
    });
    el.addEventListener('pointerleave', reset);
    el.addEventListener('pointercancel', reset);
    el.addEventListener('blur', reset);
    pointers.push(reset);
  };
  document.querySelectorAll('.btn, .footer__social a').forEach(button => {
    trackPointer(button, (x, y) => {
      button.style.setProperty('--magnet-x', `${x * 12}px`);
      button.style.setProperty('--magnet-y', `${y * 10}px`);
    });
  });

  const menu = document.querySelector('.nav__menu');
  menu?.addEventListener('click', () => {
    if (menu.getAttribute('aria-expanded') !== 'true') return;
    document.querySelectorAll('.nav__link').forEach((link, i) => animate(link,
      [{opacity: 0, translate: '-24px 0'}, {opacity: 1, translate: '0 0'}], {duration: 500, delay: i * 70}));
  });
  // Native viewer opening/closing remains owned by site.js; this adds its entrance.
  const viewer = document.querySelector('.image-viewer');
  if (viewer) new MutationObserver(() => {
    if (!viewer.hidden) animate(viewer, [{opacity: 0, scale: '.965'}, {opacity: 1, scale: '1'}], {duration: 320});
  }).observe(viewer, {attributes: true, attributeFilter: ['hidden']});

  const videos = [...document.querySelectorAll('.case-hero video')];
  const visibleVideos = new WeakSet();
  const syncVideos = () => videos.forEach(video => {
    if (reduce.matches || document.hidden || !visibleVideos.has(video)) video.pause();
    else video.play().catch(() => {});
  });
  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver(entries => {
      entries.forEach(({target, isIntersecting}) => isIntersecting ? visibleVideos.add(target) : visibleVideos.delete(target));
      syncVideos();
    });
    videos.forEach(video => { video.autoplay = false; videoObserver.observe(video); });
  } else videos.forEach(video => visibleVideos.add(video));
  syncVideos();
  document.addEventListener('visibilitychange', () => {
    syncVideos();
    document.documentElement.classList.toggle('motion-background', document.hidden);
  });
  document.addEventListener('focusin', event => active.forEach(a => {
    if (a.effect?.target?.contains(event.target)) a.cancel();
  }));
  reduce.addEventListener('change', () => {
    if (reduce.matches) { active.forEach(a => a.cancel()); pointers.forEach(reset => reset()); }
    scene();
    syncVideos();
  });
  fine.addEventListener('change', () => pointers.forEach(reset => reset()));
})();
