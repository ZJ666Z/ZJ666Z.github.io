(() => {
  const storageKey = 'zijiez-language';
  let locale = '';
  try { locale = localStorage.getItem(storageKey) || ''; } catch {}
  if (locale !== 'en' && locale !== 'zh') {
    locale = (navigator.languages || [navigator.language || 'en'])
      .some(language => /^zh(?:-|$)/i.test(language)) ? 'zh' : 'en';
  }

  const root = document.documentElement;
  const sourceLocale = /^zh(?:-|$)/i.test(root.lang) ? 'zh' : 'en';
  root.dataset.locale = locale;
  root.lang = locale === 'zh' ? 'zh-CN' : 'en';
  window.__zijiezLocale = locale;

  if (locale !== sourceLocale) {
    root.classList.add('i18n-pending');
    window.setTimeout(() => root.classList.remove('i18n-pending'), 1800);
  }
})();
