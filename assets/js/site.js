/* 导航：向下滚动后收成居中深色胶囊 */
(() => {
  const nav = document.querySelector('.nav');
  if (nav) {
    const sync = () => nav.classList.toggle('is-stuck', window.scrollY > 80);
    sync();
    window.addEventListener('scroll', sync, { passive: true });
  }
})();

/* 滚动进入视口时淡入；用户偏好减少动效时直接显示 */
(() => {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  items.forEach(el => io.observe(el));
})();
