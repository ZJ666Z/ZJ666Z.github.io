/* 1) 顶部导航：滚过首屏后收成居中胶囊
      用哨兵元素 + IntersectionObserver，不依赖 scroll 事件，省性能也更稳
   2) 入场动效：元素滚进视口时播放（曲线参数见 CSS，取自原站的 spring 配置） */

(() => {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const shell = nav.querySelector('.nav__shell');
  const links = nav.querySelector('.nav__links');
  const menu = document.createElement('button');
  menu.className = 'nav__menu';
  menu.type = 'button';
  menu.setAttribute('aria-label', 'Open navigation');
  menu.setAttribute('aria-expanded', 'false');
  menu.innerHTML = '<span></span><span></span><span></span>';
  shell.append(menu);

  const closeMenu = () => {
    nav.classList.remove('menu-open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation');
  };
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('menu-open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  links.addEventListener('click', closeMenu);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 809) closeMenu();
  });

  const stick = on => nav.classList.toggle('is-stuck', on);
  const sync = () => stick(window.scrollY > 80);

  sync();
  window.addEventListener('scroll', sync, { passive: true });

  // 再加一个顶部哨兵兜底，覆盖不派发 scroll 事件的环境
  if ('IntersectionObserver' in window) {
    const sentinel = document.createElement('div');
    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:80px;pointer-events:none';
    document.body.prepend(sentinel);
    new IntersectionObserver(([e]) => stick(!e.isIntersecting)).observe(sentinel);
  }
})();

/* Full-resolution image viewer. The page keeps the exported Framer files as-is;
   this viewer lets users inspect those original pixels instead of a CSS-scaled preview. */
(() => {
  const excluded = [
    '.nav img', '.marquee img', '.card__media img', '.exp__logos img', '.quote__who img',
    '.case-hero img', '.about-portrait'
  ].join(',');
  const images = [...document.querySelectorAll('img')].filter(img => !img.matches(excluded));
  if (!images.length) return;

  const viewer = document.createElement('div');
  viewer.className = 'image-viewer';
  viewer.hidden = true;
  viewer.setAttribute('role', 'dialog');
  viewer.setAttribute('aria-modal', 'true');
  viewer.setAttribute('aria-label', 'Full-resolution image viewer');
  viewer.innerHTML = `
    <div class="image-viewer__toolbar">
      <p class="image-viewer__meta" aria-live="polite"></p>
      <div class="image-viewer__actions">
        <button type="button" data-action="minus" aria-label="Zoom out">−</button>
        <button type="button" data-action="fit">Fit</button>
        <button type="button" data-action="actual">1:1</button>
        <button type="button" data-action="plus" aria-label="Zoom in">+</button>
        <button class="image-viewer__close" type="button" data-action="close" aria-label="Close image viewer">×</button>
      </div>
    </div>
    <div class="image-viewer__stage"><img alt=""></div>`;
  document.body.append(viewer);

  const stage = viewer.querySelector('.image-viewer__stage');
  const full = viewer.querySelector('img');
  const meta = viewer.querySelector('.image-viewer__meta');
  const closeButton = viewer.querySelector('[data-action="close"]');
  let zoom = 1;
  let fitZoom = 1;
  let previousOverflow = '';

  const applyZoom = next => {
    zoom = Math.max(.05, Math.min(2, next));
    full.style.width = `${Math.round(full.naturalWidth * zoom)}px`;
    full.style.height = `${Math.round(full.naturalHeight * zoom)}px`;
    meta.textContent = `${full.naturalWidth} × ${full.naturalHeight}px · ${Math.round(zoom * 100)}%`;
  };
  const calculateFit = () => Math.min(
    (window.innerWidth - 40) / full.naturalWidth,
    (window.innerHeight - 108) / full.naturalHeight,
    1
  );
  const fit = () => {
    fitZoom = calculateFit();
    applyZoom(fitZoom);
    stage.scrollTo({left: 0, top: 0});
  };
  const close = () => {
    viewer.hidden = true;
    document.body.style.overflow = previousOverflow;
    full.removeAttribute('src');
  };
  const open = source => {
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    viewer.hidden = false;
    full.alt = source.alt || 'Full-resolution portfolio image';
    full.src = source.currentSrc || source.src;
    const ready = () => {
      fit();
      closeButton.focus({preventScroll: true});
    };
    if (full.complete) ready(); else full.addEventListener('load', ready, {once: true});
  };

  images.forEach(img => {
    img.classList.add('is-zoomable');
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', `${img.alt || 'Image'} — open full resolution`);
    img.addEventListener('click', event => {
      // Cover images live inside project links; clicking the visual opens the image,
      // while the title/body of the card continues to navigate to the case study.
      event.preventDefault();
      event.stopPropagation();
      open(img);
    });
    img.addEventListener('keydown', event => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      open(img);
    });
  });

  viewer.addEventListener('click', event => {
    const action = event.target.closest('[data-action]')?.dataset.action;
    if (action === 'close' || event.target === viewer) close();
    if (action === 'minus') applyZoom(zoom / 1.25);
    if (action === 'plus') applyZoom(zoom * 1.25);
    if (action === 'fit') fit();
    if (action === 'actual') applyZoom(1);
  });
  full.addEventListener('dblclick', () => zoom === fitZoom ? applyZoom(1) : fit());
  document.addEventListener('keydown', event => {
    if (!viewer.hidden && event.key === 'Escape') close();
  });
  window.addEventListener('resize', () => {
    if (!viewer.hidden && Math.abs(zoom - fitZoom) < .001) fit();
  });
})();

(() => {
  // Framer 分别驱动内容块。有动画子项的容器保持静止，避免父子叠加成 192px 位移。
  document.querySelectorAll('.panel.fx').forEach(panel => {
    if (!panel.querySelector('.quote.fx, .quote.fx-up')) return;
    panel.querySelector('.panel__head')?.classList.add('fx');
  });
  document.querySelectorAll('.footer.fx').forEach(footer => {
    footer.querySelector('.footer__brand')?.classList.add('fx');
    footer.querySelector('.footer__bottom')?.classList.add('fx');
  });
  document.querySelectorAll('.gallery img').forEach(photo => {
    photo.classList.add('fx', 'photo-fx');
  });

  const allItems = [...document.querySelectorAll('.fx, .fx-up')];
  const items = allItems.filter(item => {
    const isShell = Boolean(item.querySelector('.fx, .fx-up'));
    item.classList.toggle('fx-shell', isShell);
    return !isShell;
  });
  if (!items.length) return;

  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach(el => el.classList.add('is-in'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    }
  }, { rootMargin: '0px', threshold: 0 });

  // 先绘制初始态，再监听首屏，避免加载时直接跳到终态。
  requestAnimationFrame(() => requestAnimationFrame(() => items.forEach(el => io.observe(el))));

})();
