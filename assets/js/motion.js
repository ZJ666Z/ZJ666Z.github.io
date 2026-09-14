/* Portfolio choreography. Content and links work without this enhancement.
   Independent translate/rotate/scale preserve existing layout transforms. */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const ease = 'cubic-bezier(.16,1,.3,1)';
  const active = new Set();
  const entrances = new WeakMap();
  const played = new WeakSet();
  const configurations = new Map();
  let lastScrollY = Math.max(scrollY, 0);
  let scrollDirection = 'down';
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const animate = (el, frames, options = {}) => {
    if (reduce.matches || !el.animate) return;
    const a = el.animate(frames, {duration: 600, easing: ease, fill: 'backwards', ...options});
    active.add(a);
    a.finished.then(() => active.delete(a), () => active.delete(a));
    return a;
  };
  const cancelActiveWithin = el => active.forEach(animation => {
    const target = animation.effect?.target;
    if (target === el || (target instanceof Node && el.contains(target))) animation.cancel();
  });
  const register = (selector, type, delay = 0) => {
    document.querySelectorAll(selector).forEach(el => configurations.set(el, {type, delay}));
  };
  addEventListener('scroll', () => {
    const nextScrollY = Math.max(scrollY, 0);
    if (Math.abs(nextScrollY - lastScrollY) > 1) {
      scrollDirection = nextScrollY > lastScrollY ? 'down' : 'up';
      lastScrollY = nextScrollY;
    }
  }, {passive: true});

  register('.fx, .fx-up', 'rise');
  register('.hero__text > *, .hero__card > .fx-up', 'intro', 80);
  register('.hero__text h1, .case-hero h1', 'title');
  register('.sec-head h2, .case-head h2, .panel__head h2, .all-projects .page-title', 'title');
  register('.amz-hmw-question, .hmw-item h3, .fragmented-pill, .without-label', 'title');
  register('.case-hero__identity > img, .about-portrait', 'identity');
  register('.case-meta > div', 'intro', 100);
  register('.case figure, .overview-grid figure', 'image');
  register('.card', 'card');
  register('.gallery img', 'photo');
  register('.stat b', 'number');
  register('.stat > span', 'rise', 60);
  register('.amz-pair-arrow, .impact-cards__arrow', 'arrow', 60);
  register('.amz-hmw-mark, .hmw-quote', 'quote');
  register('.work-pair__text > *, .work-pair__media > *, .step', 'rise');
  register('.footer__brand', 'signature');
  register('.footer__bottom', 'rise', 60);
  register('.hero__lede', 'intro', 60);
  // The error page is a short, complete scene, with immediately usable links.
  if (!document.body.className) {
    register('#main h1', 'title');
    register('#main .pill', 'number');
  }
  configurations.delete(document.querySelector('.nav'));

  document.querySelectorAll('.problem-cards, .impact-cards-row, .impact-cards').forEach(group => {
    [...group.children].forEach((el, i) => {
      if (configurations.has(el)) configurations.get(el).delay = i * 50;
    });
  });
  document.querySelectorAll('.grid-3, .stats, .case-meta, .hmw-items').forEach(group => {
    [...group.children].forEach((el, i) => {
      for (const [candidate, config] of configurations) {
        if (candidate === el || el.contains(candidate)) config.delay += i * 40;
      }
    });
  });

  const candidates = [...configurations.keys()];
  const items = candidates.filter(el => !candidates.some(child => child !== el && el.contains(child)));
  candidates.forEach(el => el.classList.add('is-in'));
  items.forEach(el => {
    el.dataset.motion = configurations.get(el).type;
  });

  const reveal = (el, rowDelay = 0) => {
    // Do not restart an entrance still running during a quick boundary crossing.
    const previous = entrances.get(el);
    if (previous && (previous.playState === 'running' || previous.playState === 'paused')) return;
    const {type, delay: configuredDelay} = configurations.get(el);
    const rect = el.getBoundingClientRect();
    if (rect.bottom <= 0 || !rect.width || !rect.height || reduce.matches || document.hidden || el.contains(document.activeElement)) return;
    const mobile = innerWidth < 810;
    const replay = played.has(el);
    const distance = replay ? 10 : type === 'image' || type === 'photo' ? 16 : mobile ? 20 : 28;
    const delay = replay ? 0 : Math.min(configuredDelay + rowDelay, mobile ? 80 : 160);
    const duration = replay ? 420 : mobile ? 520 : type === 'title' ? 640 : 600;
    const animation = animate(el, [
      {opacity: replay ? .45 : 0, translate: `0 ${distance}px`},
      {opacity: 1, translate: '0 0'}
    ], {duration, delay});
    if (animation) {
      entrances.set(el, animation);
      played.add(el);
      el.dataset.motionSeen = '';
    }
  };
  if ('IntersectionObserver' in window) {
    // Rearm below a separate outer boundary. The 96px buffer keeps animated
    // transforms and small scroll reversals from retriggering the same item.
    const replayReady = new WeakSet(items);
    const resetObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) return;
        cancelActiveWithin(entry.target);
        if (entry.rootBounds && entry.boundingClientRect.height > 0 &&
            entry.boundingClientRect.top >= entry.rootBounds.bottom) replayReady.add(entry.target);
        else if (entry.boundingClientRect.bottom < 0) replayReady.delete(entry.target);
      });
    }, {rootMargin: '96px 0px 96px 0px'});
    const observer = new IntersectionObserver(entries => {
      const entering = entries.filter(entry => entry.isIntersecting && replayReady.has(entry.target) && scrollDirection === 'down');
      entering.forEach((entry, index) => {
        const peers = entering.slice(0, index).filter(other => other.target.parentElement === entry.target.parentElement &&
          Math.abs(other.boundingClientRect.top - entry.boundingClientRect.top) < 24).length;
        reveal(entry.target, Math.min(peers * 40, 80));
      });
      entries.filter(entry => entry.isIntersecting).forEach(entry => replayReady.delete(entry.target));
    }, {threshold: 0, rootMargin: '0px 0px 40px 0px'});
    items.forEach(el => { resetObserver.observe(el); observer.observe(el); });
  } else items.forEach(el => reveal(el));

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
    // The access form must remain steady while a password is entered.
    if (button.matches('#tiktok-gate .tiktok-gate__controls .btn')) return;
    trackPointer(button, (x, y) => {
      button.style.setProperty('--magnet-x', `${x * 4}px`);
      button.style.setProperty('--magnet-y', `${y * 4}px`);
    });
  });

  const menu = document.querySelector('.nav__menu');
  menu?.addEventListener('click', () => {
    if (menu.getAttribute('aria-expanded') !== 'true') return;
    document.querySelectorAll('.nav__link').forEach((link, i) => {
      cancelActiveWithin(link);
      animate(link, [{opacity: 0, translate: '-10px 0'}, {opacity: 1, translate: '0 0'}], {duration: 320, delay: i * 35});
    });
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
    if (document.hidden) active.forEach(a => a.cancel());
    syncVideos();
    document.documentElement.classList.toggle('motion-background', document.hidden);
  });
  document.addEventListener('focusin', event => active.forEach(a => {
    if (a.effect?.target?.contains(event.target)) a.cancel();
  }));
  reduce.addEventListener('change', () => {
    if (reduce.matches) { active.forEach(a => a.cancel()); pointers.forEach(reset => reset()); }
    syncVideos();
  });
  fine.addEventListener('change', () => pointers.forEach(reset => reset()));
})();
