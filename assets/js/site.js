/* 1) 顶部导航：滚过首屏后收成居中胶囊
      用哨兵元素 + IntersectionObserver，不依赖 scroll 事件，省性能也更稳
   2) 入场动效：元素滚进视口时播放（曲线参数见 CSS，取自原站的 spring 配置） */

(() => {
  const nav = document.querySelector('.nav');
  if (!nav) return;

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
  const items = document.querySelectorAll('.fx, .fx-up');
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
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0 });

  items.forEach(el => io.observe(el));

  // 兜底：万一 observer 没触发，4 秒后无条件显示
  setTimeout(() => items.forEach(el => el.classList.add('is-in')), 4000);
})();
