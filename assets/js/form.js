/* ─── FORM CONFIG ─────────────────────────────────────────────────────────────
   Get a free Formspree endpoint at https://formspree.io
   Set formspreeId to your form ID (e.g. "xpzgkrbv").
   If left as 'YOUR_FORM_ID', the form falls back to a mailto: link.
   ─────────────────────────────────────────────────────────────────────────── */

const FORM_CONFIG = {
  formspreeId:   'mrbpoggb',
  fallbackEmail: 'pandacyd.programmer@gmail.com',
};

async function handleForm(e) {
  e.preventDefault();
  const t       = i18n[currentLang];
  const btn     = document.getElementById('form-submit-btn');
  const status  = document.getElementById('form-status');
  const name    = document.getElementById('form-name').value.trim();
  const email   = document.getElementById('form-email').value.trim();
  const subject = document.getElementById('form-subject').value.trim();
  const msg     = document.getElementById('form-msg').value.trim();

  if (!name || !email || !msg) return;

  btn.disabled    = true;
  btn.textContent = '...';
  status.className    = 'form-status';
  status.style.display = 'none';

  try {
    let ok = false;

    if (FORM_CONFIG.formspreeId !== 'mrbpoggb') {
      /* Send via Formspree */
      const res = await fetch(`https://formspree.io/f/${FORM_CONFIG.formspreeId}`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify({ name, email, subject, message: msg }),
      });
      ok = res.ok;
    } else {
      /* Fallback: open mail client */
      const body = `Nombre: ${name}\nEmail: ${email}\n\n${msg}`;
      window.location.href = `mailto:${FORM_CONFIG.fallbackEmail}?subject=${encodeURIComponent(subject || 'Contacto desde portfolio')}&body=${encodeURIComponent(body)}`;
      ok = true;
    }

    if (ok) {
      status.textContent = t.form.ok;
      status.className   = 'form-status success';
      document.getElementById('contact-form').reset();
    } else {
      throw new Error('bad response');
    }
  } catch (_) {
    status.textContent = t.form.err;
    status.className   = 'form-status error';
  }

  btn.disabled    = false;
  btn.textContent = t.form.submit;
}
