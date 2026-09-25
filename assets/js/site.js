/* 1) 顶部导航：滚过首屏后收成居中胶囊
      用哨兵元素 + IntersectionObserver，不依赖 scroll 事件，省性能也更稳
   2) 入场动效：元素滚进视口时播放（曲线参数见 CSS，取自原站的 spring 配置） */

(() => {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const shell = nav.querySelector('.nav__shell');
  const links = nav.querySelector('.nav__links');
  const i18n = () => window.ZijiezI18n;
  const label = key => i18n()?.t(key) || ({'nav.open': 'Open navigation', 'nav.close': 'Close navigation'}[key] || key);
  const menu = document.createElement('button');
  menu.className = 'nav__menu';
  menu.type = 'button';
  menu.setAttribute('aria-label', label('nav.open'));
  menu.setAttribute('aria-expanded', 'false');
  menu.innerHTML = '<span></span><span></span><span></span>';
  shell.append(menu);

  /* `max-content` snaps instead of interpolating in older browsers. Measure the
     desktop pill as a pixel width and keep the longer desktop travel brisk. */
  const syncDesktopCollapseMotion = () => {
    if (window.innerWidth <= 809) {
      nav.style.removeProperty('--nav-collapsed-width');
      nav.style.removeProperty('--nav-collapse-duration');
      return;
    }

    const probe = nav.cloneNode(true);
    probe.classList.remove('fx', 'menu-open', 'is-stuck');
    probe.setAttribute('aria-hidden', 'true');
    probe.setAttribute('inert', '');
    probe.style.cssText = 'position:absolute;inset:auto;left:-10000px;top:0;width:100vw;visibility:hidden;pointer-events:none;padding-block:24px;transition:none';
    probe.querySelectorAll('*').forEach(element => { element.style.transition = 'none'; });
    document.body.append(probe);

    const probeShell = probe.querySelector('.nav__shell');
    const expandedWidth = probeShell.getBoundingClientRect().width;
    probe.classList.add('is-stuck');
    const collapsedWidth = probeShell.getBoundingClientRect().width;
    probe.remove();

    const desktopWidthVelocity = 600;
    const duration = Math.min(1.2, Math.max(.8,
      (expandedWidth - collapsedWidth) / desktopWidthVelocity));
    nav.style.setProperty('--nav-collapsed-width', `${Math.ceil(collapsedWidth)}px`);
    nav.style.setProperty('--nav-collapse-duration', `${duration.toFixed(3)}s`);
  };

  syncDesktopCollapseMotion();
  document.fonts?.ready.then(syncDesktopCollapseMotion);

  const closeMenu = () => {
    nav.classList.remove('menu-open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', label('nav.open'));
  };
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('menu-open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', label(open ? 'nav.close' : 'nav.open'));
  });
  links.addEventListener('click', event => {
    if (event.target.closest('.nav__link')) closeMenu();
  });
  document.addEventListener('zijiez:languagechange', () => {
    menu.setAttribute('aria-label', label(nav.classList.contains('menu-open') ? 'nav.close' : 'nav.open'));
    syncDesktopCollapseMotion();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  let resizeFrame = 0;
  window.addEventListener('resize', () => {
    if (window.innerWidth > 809) closeMenu();
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(syncDesktopCollapseMotion);
  });

  let stuck = window.scrollY > 80;
  nav.classList.toggle('is-stuck', stuck);
  const sync = () => {
    // Separate enter/leave thresholds avoid oscillation near the collapse point.
    const next = stuck ? window.scrollY > 64 : window.scrollY > 96;
    if (next === stuck) return;
    stuck = next;
    nav.classList.toggle('is-stuck', stuck);
  };

  sync();
  window.addEventListener('scroll', sync, { passive: true });

  // 再加一个顶部哨兵兜底，覆盖不派发 scroll 事件的环境
  if ('IntersectionObserver' in window) {
    const sentinel = document.createElement('div');
    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:80px;pointer-events:none';
    document.body.prepend(sentinel);
    new IntersectionObserver(sync).observe(sentinel);
  }
})();

/* Full-resolution image viewer. The page keeps the exported Framer files as-is;
   this viewer lets users inspect those original pixels instead of a CSS-scaled preview. */
(() => {
  const i18n = () => window.ZijiezI18n;
  const label = (key, values) => i18n()?.t(key, values) || ({
    'viewer.label': 'Full-resolution image viewer', 'viewer.zoomOut': 'Zoom out',
    'viewer.zoomIn': 'Zoom in', 'viewer.fit': 'Fit', 'viewer.close': 'Close image viewer',
    'viewer.image': 'Image', 'viewer.fullImage': 'Full-resolution portfolio image'
  }[key] || key);
  const excluded = [
    '.nav img', '.marquee img', '.card__media img', '.exp__logos img', '.quote__who img',
    '.case-hero img', '.about-portrait', '.hero__graphic'
  ].join(',');
  const images = [...document.querySelectorAll('img')].filter(img => !img.matches(excluded));
  if (!images.length) return;

  const viewer = document.createElement('div');
  viewer.className = 'image-viewer';
  viewer.hidden = true;
  viewer.setAttribute('role', 'dialog');
  viewer.setAttribute('aria-modal', 'true');
  viewer.setAttribute('aria-label', label('viewer.label'));
  viewer.innerHTML = `
    <div class="image-viewer__toolbar">
      <p class="image-viewer__meta" aria-live="polite"></p>
      <div class="image-viewer__actions">
        <button type="button" data-action="minus" aria-label="${label('viewer.zoomOut')}">−</button>
        <button type="button" data-action="fit">${label('viewer.fit')}</button>
        <button type="button" data-action="actual">1:1</button>
        <button type="button" data-action="plus" aria-label="${label('viewer.zoomIn')}">+</button>
        <button class="image-viewer__close" type="button" data-action="close" aria-label="${label('viewer.close')}">×</button>
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
    full.alt = source.alt || label('viewer.fullImage');
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
    const syncImageLabel = () => img.setAttribute('aria-label', label('viewer.open', {image: img.alt || label('viewer.image')}));
    syncImageLabel();
    document.addEventListener('zijiez:languagechange', syncImageLabel);
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
  document.addEventListener('zijiez:languagechange', () => {
    viewer.setAttribute('aria-label', label('viewer.label'));
    viewer.querySelector('[data-action="minus"]').setAttribute('aria-label', label('viewer.zoomOut'));
    viewer.querySelector('[data-action="fit"]').textContent = label('viewer.fit');
    viewer.querySelector('[data-action="plus"]').setAttribute('aria-label', label('viewer.zoomIn'));
    closeButton.setAttribute('aria-label', label('viewer.close'));
  });
})();
