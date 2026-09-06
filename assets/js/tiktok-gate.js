/* Lightweight portfolio gate for the TikTok 996633 case study.
   This is an access threshold for a static site, not a confidentiality boundary. */
(() => {
  const gate = document.querySelector('#tiktok-gate');
  const content = document.querySelector('#tiktok-full-content');
  const form = document.querySelector('#tiktok-unlock-form');
  const input = document.querySelector('#tiktok-password');
  const status = document.querySelector('#tiktok-gate-status');
  if (!gate || !content || !form || !input || !status) return;

  const sessionKey = 'tiktok996633-unlocked';
  // Temporary local-preview hash. Replace before a real release.
  const accessHash = '3378fd1b3e3d336695ad764a3c3675c36cd6474465122e332f8b1ff53b493dd1';

  const sha256 = async value => {
    if (!window.crypto?.subtle) throw new Error('Secure hashing is unavailable.');
    const bytes = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest('SHA-256', bytes);
    return [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, '0')).join('');
  };

  const loadPrivateMedia = () => {
    content.querySelectorAll('[data-tiktok-src]').forEach(media => {
      media.src = media.dataset.tiktokSrc;
      media.removeAttribute('data-tiktok-src');
    });
  };

  const unlock = () => {
    gate.hidden = true;
    content.hidden = false;
    content.removeAttribute('aria-hidden');
    loadPrivateMedia();
    document.dispatchEvent(new CustomEvent('tiktok-unlocked'));
  };

  if (sessionStorage.getItem(sessionKey) === '1') unlock();
  else input.focus({preventScroll: true});

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const value = input.value.trim();
    if (!value || form.dataset.busy === 'true') return;
    form.dataset.busy = 'true';
    status.dataset.state = 'loading';
    status.textContent = 'Checking access…';
    try {
      if (await sha256(value) !== accessHash) {
        status.dataset.state = 'error';
        status.textContent = 'That password does not match. Please try again.';
        input.select();
        return;
      }
      sessionStorage.setItem(sessionKey, '1');
      status.textContent = '';
      unlock();
    } catch {
      status.dataset.state = 'error';
      status.textContent = 'This browser cannot verify the password securely.';
    } finally {
      form.dataset.busy = 'false';
    }
  });
})();
