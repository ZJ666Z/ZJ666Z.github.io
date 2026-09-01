/* 1) 顶部导航：向下滚动后收成居中的深色胶囊
   2) 入场动效：元素滚进视口时播放（对齐原 Framer 站的 spring 曲线，具体参数在 CSS 里） */

(() => {
  const nav = document.querySelector('.nav');
  if (nav) {
    const sync = () => nav.classList.toggle('is-stuck', window.scrollY > 80);
    sync();
    window.addEventListener('scroll', sync, { passive: true });
  }
})();

(() => {
  const items = document.querySelectorAll('.fx, .fx-up');
  if (!items.length) return;

  // 不支持 IntersectionObserver 或用户偏好减少动效时，直接显示
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

  // 兜底：万一 observer 没触发（后台标签页、异常情况），4 秒后无条件显示
  setTimeout(() => items.forEach(el => el.classList.add('is-in')), 4000);
})();
