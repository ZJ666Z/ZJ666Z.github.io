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
