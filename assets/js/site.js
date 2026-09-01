/* 唯一的脚本：向下滚动后把顶部导航收成居中的深色胶囊。
   页面其余动效都在 CSS 里（首屏淡入、首屏下方的箭头提示）。 */
(() => {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const sync = () => nav.classList.toggle('is-stuck', window.scrollY > 80);
  sync();
  window.addEventListener('scroll', sync, { passive: true });
})();
