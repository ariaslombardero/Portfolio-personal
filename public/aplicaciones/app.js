const projects = [
  {
    repo: 'Oasis-Madrid',
    title: 'Oasis Madrid',
    kind: 'Aplicación operativa',
    category: 'datos',
    signal: 'Datos públicos',
    description: 'Navegador de confort térmico y rutas saludables construido con datos abiertos, criterios de accesibilidad y privacidad.',
    audience: 'Ciudadanía y gestión urbana',
    image: '/img/apps/oasis-madrid.png',
    app: 'https://oasismadrid.vercel.app/',
    code: 'https://github.com/ariaslombardero/Oasis-Madrid',
    caseUrl: '/casos/oasis-madrid.html',
  },
  {
    repo: 'Guias-AESIA-4.0',
    title: 'Guías AESIA 4.0',
    kind: 'Recurso educativo',
    category: 'formacion-ia',
    signal: 'Formación sobre IA',
    description: 'Plataforma para trabajar las guías prácticas de la AESIA sobre inteligencia artificial mediante contenidos, cuestionarios, flashcards, seguimiento y juegos.',
    audience: 'Equipos responsables y alumnado',
    image: '/img/apps/guias-aesia.jpg',
    app: 'https://guiasaesia.vercel.app/',
    code: 'https://github.com/ariaslombardero/Guias-AESIA-4.0',
  },
  {
    repo: 'Analizador-de-ayudas-y-subvenciones',
    title: 'Analizador de ayudas y subvenciones',
    kind: 'Aplicación operativa',
    category: 'ia-integrada',
    signal: 'IA integrada',
    description: 'Analiza convocatorias nacionales y europeas y genera una ficha estructurada con requisitos, plazos, cuantías y criterios de participación.',
    audience: 'Unidades de proyectos y subvenciones',
    image: '/img/apps/analizador-ayudas.jpg',
    app: 'https://subvenciones-ia.vercel.app/',
    code: 'https://github.com/ariaslombardero/Analizador-de-ayudas-y-subvenciones',
  },
  {
    repo: 'Asistente-notas-de-prensa',
    title: 'Asistente de notas de prensa',
    kind: 'Prototipo funcional',
    category: 'ia-integrada',
    signal: 'IA integrada',
    description: 'Prepara borradores de notas de prensa y contenidos para redes sociales a partir de información institucional estructurada.',
    audience: 'Gabinetes de comunicación pública',
    image: '/img/apps/asistente-notas.jpg',
    app: 'https://notasprensa.vercel.app/',
    code: 'https://github.com/ariaslombardero/Asistente-notas-de-prensa',
  },
  {
    repo: 'The-AI-island-challenge',
    title: 'The AI Island Challenge',
    kind: 'Recurso educativo',
    category: 'formacion-ia',
    signal: 'Formación sobre IA',
    description: 'Aventura gráfica para comprender los niveles de riesgo del Reglamento de IA mediante narrativa y resolución de problemas.',
    audience: 'Formación en cumplimiento de IA',
    image: '/img/apps/AI-challenge.jpg',
    app: 'https://islandchallengeai.vercel.app/',
    code: 'https://github.com/ariaslombardero/The-AI-island-challenge',
  },
  {
    repo: 'Monitor-BOE',
    title: 'Monitor BOE',
    kind: 'Aplicación operativa',
    category: 'automatizacion',
    signal: 'Automatización pública',
    description: 'Sistema para localizar y revisar edictos judiciales relevantes publicados en el Boletín Oficial del Estado.',
    audience: 'Servicios jurídicos y de recaudación',
    image: '/img/apps/monitor-boe.jpg',
    app: 'https://monitorboe.streamlit.app/',
    code: 'https://github.com/ariaslombardero/Monitor-BOE',
  },
  {
    repo: 'Landing-MencIA',
    title: 'Portal MencIA',
    kind: 'Caso institucional',
    category: 'estrategia-ia',
    signal: 'Estrategia de IA',
    description: 'Interfaz pública para explicar una estrategia provincial de inteligencia artificial, sus pilares, aplicaciones y recursos.',
    audience: 'Administraciones y ciudadanía',
    image: '/img/apps/landing-mencia.jpg',
    app: 'https://mencia.deputacionlugo.org/',
    code: 'https://github.com/ariaslombardero/Landing-MencIA',
    caseUrl: '/casos/mencia.html',
  },
  {
    repo: 'Calculadora-LCSP-Lugo',
    title: 'Calculadora LCSP',
    kind: 'Prototipo funcional',
    category: 'automatizacion',
    signal: 'Automatización pública',
    description: 'Herramienta de apoyo para consultar umbrales, procedimientos y referencias de la contratación pública local.',
    audience: 'Personal de contratación pública',
    image: '/img/apps/calculadora-lcsp.jpg',
    code: 'https://github.com/ariaslombardero/Calculadora-LCSP-Lugo',
  },
];

const list = document.querySelector('#project-list');
const search = document.querySelector('#search');
const count = document.querySelector('#result-count');
const empty = document.querySelector('#empty');
const filters = [...document.querySelectorAll('.filter')];
let activeFilter = 'all';

function projectActions(project) {
  const actions = [];
  if (project.app) actions.push(`<a href="${project.app}" target="_blank" rel="noopener">Abrir aplicación <span aria-hidden="true">↗</span></a>`);
  if (project.caseUrl) actions.push(`<a href="${project.caseUrl}">Ver caso <span aria-hidden="true">→</span></a>`);
  actions.push(`<a href="${project.code}" target="_blank" rel="noopener">Consultar código <span aria-hidden="true">↗</span></a>`);
  return actions.join('');
}

function render() {
  const query = search.value.trim().toLocaleLowerCase('es');
  const visible = projects.filter((project) => {
    const byFilter = activeFilter === 'all' || project.category === activeFilter;
    const haystack = `${project.title} ${project.kind} ${project.signal} ${project.description} ${project.audience}`.toLocaleLowerCase('es');
    return byFilter && (!query || haystack.includes(query));
  });

  list.innerHTML = visible.map((project) => `
    <article class="project" data-repo="${project.repo}">
      <div class="project-media"><img src="${project.image}" alt="Vista de ${project.title}" loading="lazy"></div>
      <div class="project-copy">
        <div>
          <p class="project-kicker">${project.kind}</p>
          <h3>${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-meta"><span class="tag status">${project.kind}</span><span class="tag signal">${project.signal}</span><span class="tag">${project.audience}</span><span class="tag language" hidden></span></div>
          <p class="project-updated" hidden></p>
        </div>
        <div class="project-side">${projectActions(project)}</div>
      </div>
    </article>`).join('');

  count.textContent = `${visible.length} ${visible.length === 1 ? 'pieza seleccionada' : 'piezas seleccionadas'}`;
  empty.hidden = visible.length > 0;
}

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    activeFilter = filter.dataset.filter;
    filters.forEach((item) => {
      const selected = item === filter;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    render();
  });
});
search.addEventListener('input', render);

async function enrichFromGitHub() {
  try {
    const response = await fetch('https://api.github.com/users/ariaslombardero/repos?sort=updated&per_page=100');
    if (!response.ok) return;
    const repositories = await response.json();
    const byName = new Map(repositories.map((repo) => [repo.name, repo]));
    projects.forEach((project) => {
      const repo = byName.get(project.repo);
      const card = document.querySelector(`[data-repo="${project.repo}"]`);
      if (!repo || !card) return;
      if (repo.language) {
        const language = card.querySelector('.language');
        language.textContent = repo.language;
        language.hidden = false;
      }
      if (repo.updated_at) {
        const updated = card.querySelector('.project-updated');
        updated.textContent = `Repositorio actualizado: ${new Intl.DateTimeFormat('es-ES', {year: 'numeric', month: 'long'}).format(new Date(repo.updated_at))}`;
        updated.hidden = false;
      }
    });
    document.querySelector('#sync-status').textContent = 'Datos editoriales con fecha técnica de GitHub';
  } catch {
    // El contenido editorial local mantiene la página completa sin depender de la API.
  }
}

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});
nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
  }
});

render();
enrichFromGitHub();
