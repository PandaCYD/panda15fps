/* ─── TRANSLATIONS ───────────────────────────────────────────────────────────
   All UI text for ES / EN.
   HTML attributes: data-i18n="nav.about"  →  t.nav.about  (dot-path resolved)
                    data-i18n-ph="form.name" → sets placeholder instead of text
   ─────────────────────────────────────────────────────────────────────────── */

const i18n = {
  es: {
    nav: {
      about:      'Informacion',
      projects:   'Proyectos',
      education:  'Educacion',
      testimonials:'Testimonios',
      devlogs:    'Dev Logs',
      contact:    'Contacto',
      contactBtn: 'Contactar',
      backHome:   '← Volver al portfolio',
      backProjects:'← Volver a proyectos',
      backAll:    '← Todos los proyectos',
    },
    hero: {
      tag:         'Disponible para proyectos',
      h1a:         'Software Developer',
      h1b:         'apasionado por los',
      h1em:        'videojuegos.',
      role:        'Programando desde los 14 años',
      desc:        'Mas de 11 años de experiencia autodidacta y profesional. Especializado en C#, desarrollo de escritorio, sistemas de juego y soluciones a medida.',
      ctaPrimary:  'Ver proyectos',
      ctaSecondary:'Descargar CV',
      termRole:    'Software Developer',
      termExp:     '11+ años',
      termBase:    'Lima, Peru',
      termStatus:  '● disponible',
      termStack:   'C# · .NET · Lua · TS',
      termDone:    '→ done in 00:11 · 30+ proyectos',
    },
    stats: {
      v0: '11',    l0: 'años de experiencia',
      v1: '30+',   l1: 'Proyectos completados',
      v2: 'Peru',  l2: 'Lima, disponible remoto',
    },
    about: {
      section:       'Sobre mi',
      ecoTitle:      'Cuatro areas. Un desarrollador.',
      title:         'Gran experiencia, enfoque en',
      em:            'calidad.',
      desc:          'Apasionado por los videojuegos y el codigo limpio. Trabajo individualmente o en equipo segun la complejidad del proyecto, manteniendo siempre los mismos estandares.',
      expLabel:      'Experiencia',
      exp:           'Amplia experiencia en desarrollo de software para escritorio con C#, abarcando arquitectura de aplicaciones, bases de datos y optimizacion de codigo. Proyectos robustos y escalables.',
      stackLabel:    'Stack',
      stack:         'Mi stack principal incluye C#, .NET, Lua (Roblox), TypeScript, y herramientas de bases de datos relacionales. Me adapto rapidamente a nuevas tecnologias.',
      skillsTitle:   'Tecnologias',
      cat1:          'Desktop',   cat1Sub: 'Apps de escritorio',
      cat2:          'Games',     cat2Sub: 'Sistemas para juegos',
      cat3:          'Data',      cat3Sub: 'Bases de datos',
      cat4:          'Web & Tools',cat4Sub:'Web y herramientas',
      catYrs:        'años',
      catPrimary:    'Principal',
      catSpecialty:  'Especialidad',
    },
    projects: {
      section:        'Proyectos',
      title:          'Trabajo que',
      em:             'habla por si solo.',
      desc:           'Desde launchers hasta sistemas de restaurante completos. Cada proyecto con foco en usabilidad, rendimiento y mantenibilidad.',
      view:           'Ver proyecto →',
      code:           'Codigo fuente →',
      consult:        'Consultar →',
      statusDone:     '✓ entregado',
      statusProgress: '◎ en progreso',
      statusOpen:     '○ open source',
    },
    education: {
      section: 'Educacion',
      title:   'Formacion y',
      em:      'trayectoria.',
      dl:      'Descargar CV',
    },
    testimonials: {
      section: 'Testimonios',
      title:   'Lo que dicen',
      em:      'los clientes.',
      next:    'Siguiente testimonio',
      hire:    'Puede ser tu.',
      btn:     'Contratar',
    },
    partners: {
      section: 'Socios',
      title:   'Colaboraciones y',
      em:      'alianzas.',
    },
    devlogs: {
      section: 'Dev Logs',
      title:   'Actualizaciones en',
      em:      'tiempo real.',
      desc:    'Sigue el progreso de mis proyectos activos. Datos traidos en vivo desde la API.',
      live:    'LIVE',
      loading: '// cargando logs...',
      error:   'No se pudo cargar la API. Verifica la URL en config.',
      noData:  'Sin actualizaciones recientes.',
    },
    contact: {
      section:  'Contacto',
      title:    'Trabajemos',
      em:       'juntos.',
      desc:     'Tienes un proyecto en mente? Necesitas un sistema a medida, un juego, o una solucion de escritorio? Escribeme y coordinamos.',
      info:     'Puedes contactarme por el formulario, por Discord o por email. Respondo a la brevedad.',
      discord:  'Discord',
      email:    'Email principal',
      email2:   'Email alternativo',
      phone:    'Telefono',
      web:      'Web',
    },
    form: {
      title:   'ENVIAR MENSAJE',
      name:    'Nombre',
      email:   'Email',
      subject: 'Asunto',
      msg:     'Mensaje',
      submit:  'Enviar mensaje',
      ok:      'Mensaje enviado. Respondere a la brevedad.',
      err:     'Error al enviar. Contactame directamente por Discord o email.',
    },
    footer: {
      copy:   'Panda Studio',
      slogan: '"Calidad en cada linea de codigo"',
      nav:    'Navegacion',
      legal:  'Legal',
      social: 'Redes',
      terms:  'Terminos y condiciones',
      policy: 'Politica de devoluciones',
    },
    legal: {
      backHome:     '← Volver al portfolio',
      langNote:     'Documento oficial en Espanol. La version en ingles es solo referencia.',
      termsTitle:   'Terminos y Condiciones',
      policyTitle:  'Politica de No Reembolsos',
    },
  },

  en: {
    nav: {
      about:       'About',
      projects:    'Projects',
      education:   'Education',
      testimonials:'Testimonials',
      devlogs:     'Dev Logs',
      contact:     'Contact',
      contactBtn:  'Contact',
      backHome:    '← Back to portfolio',
      backProjects:'← Back to projects',
      backAll:     '← All projects',
    },
    hero: {
      tag:          'Available for projects',
      h1a:          'Software Developer',
      h1b:          'passionate about',
      h1em:         'videogames.',
      role:         'Coding since age 14',
      desc:         'Over 11 years of self-taught and professional experience. Specialized in C#, desktop development, game systems, and custom solutions.',
      ctaPrimary:   'View projects',
      ctaSecondary: 'Download CV',
      termRole:     'Software Developer',
      termExp:      '11+ years',
      termBase:     'Lima, Peru',
      termStatus:   '● available',
      termStack:    'C# · .NET · Lua · TS',
      termDone:     '→ done in 00:11 · 30+ projects',
    },
    stats: {
      v0: '11',    l0: 'Years of experience',
      v1: '30+',   l1: 'Completed projects',
      v2: 'Peru',  l2: 'Lima, available remotely',
    },
    about: {
      section:      'About me',
      ecoTitle:     'Four areas. One developer.',
      title:        'Wide experience, focused on',
      em:           'quality.',
      desc:         'Passionate about videogames and clean code. I work individually or in teams depending on complexity, always maintaining the same standards.',
      expLabel:     'Experience',
      exp:          'Extensive experience in C# desktop software, covering application architecture, databases, and optimization. Robust and scalable solutions.',
      stackLabel:   'Stack',
      stack:        'My main stack includes C#, .NET, Lua (Roblox), TypeScript, and relational database tools. I adapt quickly to new technologies.',
      skillsTitle:  'Technologies',
      cat1:         'Desktop',    cat1Sub: 'Desktop applications',
      cat2:         'Games',      cat2Sub: 'Videogame systems',
      cat3:         'Data',       cat3Sub: 'Databases',
      cat4:         'Web & Tools',cat4Sub: 'Web and tooling',
      catYrs:       'yrs',
      catPrimary:   'Primary',
      catSpecialty: 'Specialty',
    },
    projects: {
      section:        'Projects',
      title:          'Work that',
      em:             'speaks for itself.',
      desc:           'From launchers to full restaurant systems. Every project focused on usability, performance, and maintainability.',
      view:           'View project →',
      code:           'Source code →',
      consult:        'Inquire →',
      statusDone:     '✓ delivered',
      statusProgress: '◎ in progress',
      statusOpen:     '○ open source',
    },
    education: {
      section: 'Education',
      title:   'Training and',
      em:      'background.',
      dl:      'Download CV',
    },
    testimonials: {
      section: 'Testimonials',
      title:   'What',
      em:      'clients say.',
      next:    'Next testimonial',
      hire:    'It could be you.',
      btn:     'Hire me',
    },
    partners: {
      section: 'Partners',
      title:   'Collaborations and',
      em:      'alliances.',
    },
    devlogs: {
      section: 'Dev Logs',
      title:   'Updates in',
      em:      'real time.',
      desc:    'Follow the progress of my active projects. Data pulled live from the API.',
      live:    'LIVE',
      loading: '// loading logs...',
      error:   'Could not load the API. Check the URL in config.',
      noData:  'No recent updates.',
    },
    contact: {
      section:  'Contact',
      title:    "Let's work",
      em:       'together.',
      desc:     'Have a project in mind? Need a custom system, a game, or a desktop solution? Write to me and we will coordinate.',
      info:     'You can reach me via the form, Discord, or email. I respond promptly.',
      discord:  'Discord',
      email:    'Primary email',
      email2:   'Alt email',
      phone:    'Phone',
      web:      'Web',
    },
    form: {
      title:   'SEND MESSAGE',
      name:    'Name',
      email:   'Email',
      subject: 'Subject',
      msg:     'Message',
      submit:  'Send message',
      ok:      'Message sent. I will reply shortly.',
      err:     'Error sending. Contact me directly via Discord or email.',
    },
    footer: {
      copy:   'Panda Studio',
      slogan: '"Quality in every line of code"',
      nav:    'Navigation',
      legal:  'Legal',
      social: 'Social',
      terms:  'Terms and conditions',
      policy: 'Returns and withdrawal policy',
    },
    legal: {
      backHome:    '← Back to portfolio',
      langNote:    'Legal documents are in Spanish (official). This English version is for reference only.',
      termsTitle:  'Terms and Conditions',
      policyTitle: 'No-Refund Policy',
    },
  },
};

/* ─── STATE ─── */
let currentLang = localStorage.getItem('panda_lang') || 'es';

/* Resolves dot-path key: "nav.about" → obj.nav.about */
function _resolveKey(obj, path) {
  return path.split('.').reduce((acc, k) => acc?.[k], obj);
}

/* Apply the selected language to all data-i18n / data-i18n-ph elements */
function applyLang(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  localStorage.setItem('panda_lang', lang);
  const t = i18n[lang];

  /* Text content */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = _resolveKey(t, el.dataset.i18n);
    if (val !== undefined) el.textContent = val;
  });

  /* Placeholders */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const val = _resolveKey(t, el.dataset.i18nPh);
    if (val !== undefined) el.placeholder = val;
  });

  /* Active button state */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  /* Refresh devlog loading label if visible */
  const loading = document.querySelector('.devlog-loading');
  if (loading) loading.textContent = t.devlogs?.loading || '';
}
