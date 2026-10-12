/* ES / EN switch. English lives in the HTML (SEO + no-JS fallback); Spanish lives here. */
(() => {
  const ES = {
    'skip': 'Saltar al contenido',
    'brand.aria': 'Rogai, una botana tropical y natural. Inicio',
    'brand.alt': 'Rogai, una botana tropical y natural',
    'nav.aria': 'Principal',
    'nav.about': 'Nosotros',
    'nav.chips': 'Nuestros chips',
    'nav.commit': 'Nuestro compromiso',
    'nav.contact': 'Contáctanos',
    'cta.quote': 'Solicitar cotización',
    'hero.badge': 'Certificado USDA Organic',
    'hero.h1': 'Chips de plátano naturales de la Costa del Pacífico de Ecuador.',
    'hero.lead': 'Nuestra familia cultiva plátano verde en Ecuador desde hace más de 50 años. Hoy se convierte en chips naturales y deliciosos, elaborados con plátano orgánico bajo altos estándares de la industria.',
    'hero.see': 'Ver nuestros chips',
    'hero.marks.aria': 'Certificaciones y características del producto',
    'mark.usda': 'USDA Organic',
    'mark.kosher': 'Kosher',
    'mark.sgs': 'SGS HACCP',
    'mark.sugar': 'Sin azúcar añadida',
    'mark.chol': 'Sin colesterol',
    'mark.trans': 'Sin grasas trans',
    'hero.photo.alt': 'Chips de plátano recién hechos en la línea de producción de la planta Rogai, con dos integrantes del equipo trabajando al final de la línea',
    'bag.sweet.alt': 'Rogai Plantain Chips, dulce natural',
    'bag.salt.alt': 'Rogai Plantain Chips, sal marina del Pacífico',
    'bag.chili.alt': 'Rogai Plantain Chips, chili',
    'certs.h': 'Certificados USDA Organic.',
    'certs.p': 'Rogai cuenta con la <strong>certificación USDA Organic</strong>. Nuestros chips se elaboran con plátano de cultivo orgánico, de nuestros campos a tu anaquel.',
    'certs.sgs': 'Ver nuestro certificado SGS HACCP',
    'newtab': '(se abre en una pestaña nueva)',
    'cert.usda.p': 'Certificación orgánica.',
    'cert.sgs.p': 'Inocuidad alimentaria certificada de forma independiente.',
    'cert.kosher.p': 'Certificado Kosher.',
    'cert.sugar.p': 'Nada añadido, solo plátano.',
    'cert.chol.p': 'Botana libre de colesterol.',
    'cert.trans.p': 'Cero grasas trans.',
    'about.h': 'Bienvenido a Bananas Rogai. Donde la calidad es nuestra misión.',
    'about.p1': 'Bananas Rogai nació del espíritu emprendedor y la visión de <strong>Rodolfo Gaibor</strong>. Junto con su familia ha mantenido campos de plátano verde por <strong>más de 50 años</strong>, produciendo y vendiendo a nivel local.',
    'about.p2': 'Nuestro plátano crece <strong>entre 300 y 400 metros sobre el nivel del mar, en la Costa del Pacífico de Ecuador</strong>. Aprovechamos ese entorno limpio para elaborar botanas libres de químicos y respetuosas con la tierra, porque creemos que esa es la clave del éxito.',
    'about.p3': 'Nuestra agricultura orgánica respalda las botanas saludables y deliciosas que encuentras en cada bolsa Rogai.',
    'about.a1': 'Un agricultor de Rogai sostiene dos racimos de plátano verde en la plantación',
    'about.a2': 'Un montón de plátano verde recién cosechado frente a la plantación',
    'chips.h': 'Nuestros chips',
    'chips.sub': 'Elige un sabor y mira qué hay en la bolsa.',
    'tabs.aria': 'Productos Rogai',
    'tab.salt': 'Sal marina',
    'tab.chili': 'Chili',
    'tab.sweet': 'Dulce natural',
    'tab.tostones': 'Tostones',
    'tab.kilo': 'Bolsa súper de 1 kg',
    'name.chips': 'Chips de plátano',
    'salt.alt': 'Rogai Plantain Chips, sal marina del Pacífico, bolsa de 3 oz',
    'salt.sub': 'Sal marina del Pacífico',
    'salt.p': 'Rebanadas crujientes de plátano verde con sal marina del Pacífico. El clásico, simple y honesto.',
    'chili.alt': 'Rogai Plantain Chips, chili, bolsa de 3 oz',
    'chili.sub': 'Chili',
    'chili.p': 'Las mismas rebanadas crujientes de plátano, con un toque de chili para quien disfruta su botana con picante.',
    'sweet.alt': 'Rogai Plantain Chips, dulce natural, bolsa de 3 oz',
    'sweet.sub': 'Dulce natural',
    'sweet.p': 'Chips dorados con la dulzura natural del plátano. Sin azúcar añadida.',
    'tost.alt': 'Rogai Tostones, ajo, bolsa de 100 g',
    'tost.sub': 'Ajo',
    'tost.p': 'Tostones de plátano sazonados con ajo, un favorito de Latinoamérica en una bolsa Rogai.',
    'kilo.alt': 'Dos bolsas de Rogai Chifles de 1 kg: Sal marina y Dulce',
    'kilo.sub': 'Nuestra bolsa súper de 1 kg',
    'kilo.p': 'Chifles de plátano en una generosa bolsa de 1 kg, en <strong>Sal marina</strong> y <strong>Dulce</strong>.',
    'kilo.fl': 'Sal marina, Dulce',
    'spec.retail': 'Bolsa de venta',
    'spec.made': 'Elaborado con',
    'spec.org': 'Plátano orgánico',
    'spec.bag': 'Bolsa',
    'spec.flavors': 'Sabores',
    'range.h': 'La gama completa de Rogai',
    'r.salt': 'Sal marina', 'r.garlic': 'Ajo', 'r.lime': 'Limón', 'r.chili': 'Chili', 'r.sweet': 'Dulce', 'r.carrot': 'Zanahoria', 'r.yuca': 'Yuca',
    'proc.h': 'De la plantación a la caja.',
    'proc.a1': 'Una gran pila de plátano verde después de la cosecha',
    'proc.c1': 'Plátano verde, directo de nuestros campos',
    'proc.a2': 'Plátanos pelados en una caja azul',
    'proc.c2': 'Pelado y listo',
    'proc.a3': 'Dos integrantes del equipo trabajando en la línea de producción de chips de plátano',
    'proc.c3': 'En la línea de producción',
    'proc.a4': 'Cajas a granel forradas con bolsas y llenas de chips de plátano',
    'proc.c4': 'Empacado a granel, listo para enviar',
    'commit.alt': 'Mujeres del equipo Rogai seleccionando chips de plátano en la línea',
    'commit.h': 'Nuestro compromiso.',
    'commit.p': 'Rogai es una empresa familiar. Nuestro compromiso con la sustentabilidad significa apoyar a las mujeres que trabajan con nosotros en Manabí y a sus hijos, que provienen de familias rurales de escasos recursos de la zona.',
    'pillars.aria': 'Nuestros tres pilares del desarrollo sustentable',
    'pillar.1': 'Responsabilidad social',
    'pillar.2': 'Desarrollo económico',
    'pillar.3': 'Protección del medio ambiente',
    'commit.q': 'Nuestra misión es ofrecerte la mejor botana, llena de sabor, salud y variedad.',
    'quote.h': 'Tu marca, nuestros chips.',
    'quote.p': 'También ofrecemos empaque personalizado. Cuéntanos qué tienes en mente y solicita tu cotización inicial.',
    'quote.btn': 'Solicitar cotización inicial',
    'contact.h': 'Contáctanos hoy. ¡Empecemos a trabajar juntos!',
    'contact.phone': 'Teléfono',
    'contact.email': 'Correo',
    'contact.loc': 'Ubicación',
    'form.name': 'Nombre',
    'form.company': 'Empresa',
    'form.email': 'Correo electrónico',
    'form.msg': '¿Cómo podemos ayudarte?',
    'form.ph': 'Productos, volúmenes, empaque personalizado…',
    'form.send': 'Enviar',
    'foot.tag': 'Una botana tropical y natural',
    'foot.aria': 'Pie de página',
    'foot.rights': 'Bananas Rogai. Todos los derechos reservados.',
  };

  // Strings built in JS
  const JS = {
    en: {
      menuOpen: 'Open menu', menuClose: 'Close menu',
      errName: 'Please enter your name.', errEmail: 'Please enter a valid email address.', errMsg: 'Please tell us how we can help.',
      sent: 'Thanks! Your email app should open with your message ready to send.',
      subject: (n) => `Quote request from ${n}`,
    },
    es: {
      menuOpen: 'Abrir menú', menuClose: 'Cerrar menú',
      errName: 'Escribe tu nombre.', errEmail: 'Escribe un correo electrónico válido.', errMsg: 'Cuéntanos cómo podemos ayudarte.',
      sent: '¡Gracias! Se abrirá tu app de correo con el mensaje listo para enviar.',
      subject: (n) => `Solicitud de cotización de ${n}`,
    },
  };
  const META = {
    es: {
      title: 'Bananas Rogai | Chips de plátano USDA Organic de Ecuador',
      desc: 'Chips de plátano Rogai: botanas naturales con certificación USDA Organic, de los campos de plátano verde de nuestra familia en la Costa del Pacífico de Ecuador. Empaque personalizado y cotizaciones.',
    },
  };

  // Capture the English source once, straight from the markup.
  const EN = {};
  const nodes = [...document.querySelectorAll('[data-i18n],[data-i18n-h],[data-i18n-a]')];
  nodes.forEach((el) => {
    if (el.dataset.i18n) EN[el.dataset.i18n] = el.textContent;
    if (el.dataset.i18nH) EN[el.dataset.i18nH] = el.innerHTML;
    if (el.dataset.i18nA) el.dataset.i18nA.split(';').forEach((p) => { const [a, k] = p.split(':'); EN[k] = el.getAttribute(a); });
  });
  const metaDesc = document.querySelector('meta[name="description"]');
  META.en = { title: document.title, desc: metaDesc.content };
  const ogT = document.querySelector('meta[property="og:title"]');
  const ogD = document.querySelector('meta[property="og:description"]');
  const OG_D = { en: ogD.content, es: 'Chips de plátano naturales con certificación USDA Organic de la Costa del Pacífico de Ecuador.' };

  let lang = 'en';
  const dict = () => (lang === 'es' ? ES : EN);
  const t = (k) => JS[lang][k];

  function apply(next, persist) {
    lang = next === 'es' ? 'es' : 'en';
    const d = dict();
    nodes.forEach((el) => {
      if (el.dataset.i18n && d[el.dataset.i18n] != null) el.textContent = d[el.dataset.i18n];
      if (el.dataset.i18nH && d[el.dataset.i18nH] != null) el.innerHTML = d[el.dataset.i18nH];
      if (el.dataset.i18nA) el.dataset.i18nA.split(';').forEach((p) => { const [a, k] = p.split(':'); if (d[k] != null) el.setAttribute(a, d[k]); });
    });
    document.documentElement.lang = lang === 'es' ? 'es-MX' : 'en';
    document.title = META[lang].title;
    metaDesc.content = META[lang].desc;
    ogT.content = META[lang].title;
    ogD.content = OG_D[lang];
    document.querySelectorAll('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    if (persist) { try { localStorage.setItem('rogai-lang', lang); } catch (e) { /* storage unavailable */ } }
    document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
  }

  let saved = null;
  try { saved = localStorage.getItem('rogai-lang'); } catch (e) { /* storage unavailable */ }
  const guess = (navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en';
  const fromUrl = new URLSearchParams(location.search).get('lang');
  window.rogaiI18n = { t, get lang() { return lang; } };

  document.querySelectorAll('.lang button').forEach((b) => b.addEventListener('click', () => apply(b.dataset.lang, true)));
  apply(fromUrl === 'es' || fromUrl === 'en' ? fromUrl : saved || guess, false);
})();
