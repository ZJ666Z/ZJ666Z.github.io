(() => {
  const storageKey = 'zijiez-language';
  const content = window.ZIJIEZ_I18N_CONTENT || { pages: {}, ui: {} };
  const pageId = document.body?.dataset.i18nPage || 'common';
  const page = content.pages?.[pageId] || {};
  const alias = page.extends ? content.pages?.[page.extends] || {} : {};
  const sourceLocale = document.body?.dataset.i18nSource === 'zh' ? 'zh' : 'en';
  const textSources = new WeakMap();
  const attrSources = new WeakMap();
  const translatedNodes = new Set();
  const missing = new Set();
  const attributes = ['alt', 'aria-label', 'placeholder', 'title'];
  let locale = window.__zijiezLocale === 'zh' ? 'zh' : 'en';

  const normalize = value => value.replace(/\s+/g, ' ').trim();
  const interpolate = (value, values = {}) => Object.entries(values)
    .reduce((result, [key, replacement]) => result.replaceAll(`{${key}}`, String(replacement)), value);
  const direction = target => sourceLocale === 'en' && target === 'zh' ? 'enToZh'
    : sourceLocale === 'zh' && target === 'en' ? 'zhToEn' : '';
  const dictionaries = target => {
    const key = direction(target);
    return key ? [page[key], alias[key], content.pages?.common?.[key]].filter(Boolean) : [];
  };
  const lookup = (source, target) => {
    const key = normalize(source);
    for (const dictionary of dictionaries(target)) {
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) return dictionary[key];
    }
    return null;
  };
  const isNeutral = value => {
    const text = normalize(value);
    if (!text || !/[A-Za-z\u3400-\u9fff]/.test(text)) return true;
    if (sourceLocale === 'zh' && !/[\u3400-\u9fff]/u.test(text)) return true;
    if (sourceLocale === 'en' && !/[A-Za-z]/.test(text)) return true;
    if (/^(?:[A-Z0-9][A-Z0-9+&/ .·:()–—-]*|ZI\.JIE\.|TikTok|ByteDance|FinTech|eCommerce|B2C|B2B|PIPO|GWP|NPS|UCP|ACP|PSR|Figma|AI|SEA|US|PH|ID|MY|TH)$/u.test(text)) return true;
    return content.neutral?.includes(text) || false;
  };

  const translateTextNode = (node, target) => {
    if (!textSources.has(node)) textSources.set(node, node.nodeValue);
    const source = textSources.get(node);
    if (!normalize(source)) return;
    if (target === sourceLocale) {
      node.nodeValue = source;
      return;
    }
    const translated = lookup(source, target);
    if (translated == null) {
      if (!isNeutral(source)) missing.add(`${pageId}: ${normalize(source)}`);
      return;
    }
    const leading = source.match(/^\s*/)?.[0] || '';
    const trailing = source.match(/\s*$/)?.[0] || '';
    node.nodeValue = `${leading}${translated}${trailing}`;
    translatedNodes.add(node);
  };

  const translateAttributes = (element, target) => {
    let originals = attrSources.get(element);
    if (!originals) {
      originals = {};
      attributes.forEach(attribute => {
        if (element.hasAttribute(attribute)) originals[attribute] = element.getAttribute(attribute);
      });
      attrSources.set(element, originals);
    }
    Object.entries(originals).forEach(([attribute, source]) => {
      if (target === sourceLocale) {
        element.setAttribute(attribute, source);
        return;
      }
      const translated = lookup(source, target);
      if (translated != null) element.setAttribute(attribute, translated);
      else if (!isNeutral(source)) missing.add(`${pageId} [${attribute}]: ${normalize(source)}`);
    });
  };

  const translatableTextNodes = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest('script, style, svg, [data-i18n-ignore], .language-switcher, .image-viewer')) return NodeFilter.FILTER_REJECT;
        return normalize(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    return nodes;
  };

  const ui = (key, values = {}) => {
    const strings = content.ui?.[locale] || content.ui?.en || {};
    return interpolate(strings[key] || key, values);
  };

  const updateMetadata = target => {
    const metadata = page.meta?.[target] || alias.meta?.[target];
    if (!metadata) return;
    if (metadata.title) document.title = metadata.title;
    const pairs = [
      ['meta[name="description"]', metadata.description],
      ['meta[property="og:title"]', metadata.title],
      ['meta[property="og:description"]', metadata.description]
    ];
    pairs.forEach(([selector, value]) => {
      const element = document.querySelector(selector);
      if (element && value) element.setAttribute('content', value);
    });
  };

  const updateSwitcher = () => {
    document.querySelectorAll('.language-switcher [data-locale]').forEach(button => {
      const selected = button.dataset.locale === locale;
      button.setAttribute('aria-pressed', String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    document.querySelectorAll('.language-switcher').forEach(group => group.setAttribute('aria-label', ui('language.label')));
  };

  const apply = target => {
    locale = target === 'zh' ? 'zh' : 'en';
    missing.clear();
    document.documentElement.dataset.locale = locale;
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
    translatableTextNodes().forEach(node => translateTextNode(node, locale));
    document.querySelectorAll('body *').forEach(element => {
      if (!element.closest('.language-switcher, .image-viewer, .nav__menu, [data-i18n-ignore]')) translateAttributes(element, locale);
    });
    updateMetadata(locale);
    updateSwitcher();
    document.documentElement.dataset.i18nMissing = String(missing.size);
    document.documentElement.dataset.i18nMissingItems = JSON.stringify([...missing].slice(0, 12));
    document.documentElement.classList.remove('i18n-pending');
  };

  const setLocale = target => {
    const next = target === 'zh' ? 'zh' : 'en';
    if (next === locale) return;
    const scroll = { x: window.scrollX, y: window.scrollY };
    try { localStorage.setItem(storageKey, next); } catch {}
    apply(next);
    window.scrollTo(scroll.x, scroll.y);
    document.dispatchEvent(new CustomEvent('zijiez:languagechange', { detail: { locale: next } }));
  };

  const createSwitcher = () => {
    const links = document.querySelector('.nav__links');
    if (!links || links.querySelector('.language-switcher')) return;
    const group = document.createElement('div');
    group.className = 'language-switcher';
    group.setAttribute('role', 'group');
    group.innerHTML = '<button type="button" lang="en" data-locale="en" aria-label="English">EN</button><button type="button" lang="zh-CN" data-locale="zh" aria-label="中文">中</button>';
    group.addEventListener('click', event => {
      const button = event.target.closest('[data-locale]');
      if (button) setLocale(button.dataset.locale);
    });
    group.addEventListener('keydown', event => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      const next = locale === 'en' ? 'zh' : 'en';
      setLocale(next);
      group.querySelector(`[data-locale="${next}"]`)?.focus();
    });
    links.append(group);
  };

  createSwitcher();
  apply(locale);

  window.ZijiezI18n = {
    getLocale: () => locale,
    setLocale,
    t: (key, values) => ui(key, values),
    refresh: () => apply(locale),
    audit: () => ({ page: pageId, locale, missing: [...missing] })
  };
})();
