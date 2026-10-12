(() => {
  const header = document.querySelector('.site-header');
  const onScroll = () => header.classList.toggle('is-stuck', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  const btn = document.querySelector('.menu-btn');
  const nav = document.getElementById('nav');
  const setMenu = (open) => {
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  btn.addEventListener('click', () => setMenu(btn.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  window.matchMedia('(min-width: 961px)').addEventListener('change', () => setMenu(false));

  // Product tabs
  const stage = document.getElementById('stage');
  const tabs = [...stage.querySelectorAll('[role="tab"]')];
  const select = (tab, focus) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    stage.dataset.active = tab.dataset.key;
    if (focus) tab.focus();
    tab.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', (e) => {
      const k = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
      if (k) { e.preventDefault(); select(tabs[(i + k + tabs.length) % tabs.length], true); }
      if (e.key === 'Home') { e.preventDefault(); select(tabs[0], true); }
      if (e.key === 'End') { e.preventDefault(); select(tabs[tabs.length - 1], true); }
    });
  });

  // Reveal on scroll
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 70}ms`; io.observe(el); });
  } else items.forEach((el) => el.classList.add('in'));

  // Contact form: validates, then opens the visitor's email app addressed to sales@
  const form = document.getElementById('form');
  const note = document.getElementById('form-note');
  const rules = {
    name: (v) => (v.trim() ? '' : 'Please enter your name.'),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Please enter a valid email address.'),
    message: (v) => (v.trim() ? '' : 'Please tell us how we can help.'),
  };
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;
    for (const [name, check] of Object.entries(rules)) {
      const input = form.elements[name];
      const msg = check(input.value);
      input.closest('.field').classList.toggle('invalid', !!msg);
      input.setAttribute('aria-invalid', String(!!msg));
      input.closest('.field').querySelector('.err').textContent = msg;
      if (msg && ok) { input.focus(); ok = false; }
    }
    if (!ok) { note.textContent = ''; return; }
    const d = Object.fromEntries(new FormData(form));
    const body = `${d.message}\n\n— ${d.name}${d.company ? `, ${d.company}` : ''}\n${d.email}`;
    window.location.href = `mailto:sales@rogaisnacks.com?subject=${encodeURIComponent('Quote request from ' + d.name)}&body=${encodeURIComponent(body)}`;
    note.textContent = 'Thanks! Your email app should open with your message ready to send.';
  });
})();
