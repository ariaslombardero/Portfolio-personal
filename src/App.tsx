import {
  ArrowRight,
  Award,
  BookOpen,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Play,
  ShieldCheck,
  Workflow,
  Users,
  X,
} from 'lucide-react';
import {useEffect, useRef, useState} from 'react';

function VimeoMark() {
  return (
    <svg className="profile-brand-icon" viewBox="-1 -3 28 27" aria-hidden="true">
      <path d="M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32C15.32 19.161 12.93 21 11.002 21c-1.332 0-2.44-1.324-3.321-3.968-.617-2.924-1.233-5.845-1.85-8.769-.64-2.884-1.285-4.321-1.93-4.321-.194 0-.756.28-1.688.841L1.134 3.32C2.392 2.213 3.568 1.157 4.664.152c1.472-1.295 2.502-1.986 3.09-2.073 1.83-.264 2.894.673 3.197 2.81 0 .046.043 1.542.127 4.492.203 2.585.342 4.095.42 4.526.473 3.064 1.189 4.596 2.146 4.596.883 0 2.05-1.365 3.504-4.094.976-1.853 1.488-3.149 1.534-3.892.1-1.366-.46-2.05-1.68-2.05-.623 0-1.25.178-1.879.537 1.255-4.103 3.829-6.31 7.72-6.621 2.3-.18 3.522 1.05 3.666 3.69v.001z" />
    </svg>
  );
}

const projects = [
  {
    title: 'Oasis Madrid',
    type: 'Innovación pública y datos abiertos',
    description: 'Navegador de confort térmico y rutas saludables diseñado con datos abiertos, criterios de accesibilidad y privacidad.',
    image: '/img/apps/oasis-madrid.png',
    actions: [
      {label: 'Ver caso', href: '/casos/oasis-madrid.html'},
      {label: 'Abrir', href: 'https://oasismadrid.vercel.app/'},
      {label: 'Vídeo', href: '/casos/oasis-madrid.html#video'},
      {label: 'Código', href: 'https://github.com/ariaslombardero/Oasis-Madrid', code: true},
    ],
  },
  {
    title: 'Guías AESIA 4.0',
    type: 'Aplicación educativa',
    description: 'Plataforma para trabajar las guías prácticas de la AESIA mediante contenidos, cuestionarios, seguimiento y gamificación.',
    image: '/img/apps/guias-aesia.jpg',
    actions: [
      {label: 'Abrir', href: 'https://guiasaesia.vercel.app/'},
      {label: 'Código', href: 'https://github.com/ariaslombardero/Guias-AESIA-4.0', code: true},
    ],
  },
  {
    title: 'The AI Island Challenge',
    type: 'Gamificación normativa',
    description: 'Aventura gráfica que aproxima los niveles de riesgo del Reglamento de IA mediante exploración y resolución de problemas.',
    image: '/img/apps/AI-challenge.jpg',
    actions: [
      {label: 'Abrir', href: 'https://islandchallengeai.vercel.app/'},
      {label: 'Código', href: 'https://github.com/ariaslombardero/The-AI-island-challenge', code: true},
    ],
  },
  {
    title: 'Monitor BOE',
    type: 'Agente de información',
    description: 'Sistema automatizado para localizar y notificar edictos judiciales relevantes publicados en el BOE.',
    image: '/img/apps/monitor-boe.jpg',
    actions: [
      {label: 'Abrir', href: 'https://monitorboe.streamlit.app/'},
      {label: 'Código', href: 'https://github.com/ariaslombardero/Monitor-BOE', code: true},
    ],
  },
];

const talks = [
  {
    title: 'VI Jornada del sector local',
    intervention: 'MencIA: soberanía tecnológica y control algorítmico',
    meta: 'Fundación FIASEP · mayo de 2026',
    image: '/img/congresos/fiasep-juan-raya.jpg',
    badge: 'Premio Juan Raya Gómez 2026',
    href: 'https://es.slideshare.net/slideshow/mencia-soberania-tecnologica-y-control-algoritmico-un-nuevo-paradigma-auditable-para-la-gestion-publica-local/287435323',
  },
  {
    title: 'Cátedra Cajasiete Big Data, Open Data y Blockchain',
    intervention: 'IA en tres clics: soluciones de código abierto para entidades locales',
    meta: 'Universidad de La Laguna · abril de 2026',
    image: '/img/congresos/cajasiete-webinar.jpg',
    badge: 'Webinar',
    href: 'https://www.youtube.com/watch?v=y8wg32D9lY8&t=3608s',
  },
  {
    title: 'II Congreso Foro GRC',
    intervention: 'Un modelo integral de gobierno, riesgo y cumplimiento para la IA pública',
    meta: 'Asociación Española para la Calidad · febrero de 2026',
    image: '/img/congresos/foro-grc.jpg',
    badge: 'Mejor comunicación',
    href: 'https://es.slideshare.net/slideshow/mencia-soberania-tecnologica-realista-un-modelo-integral-de-gobierno-riesgo-y-cumplimiento-para-la-ia-en-el-sector-publico/286504633',
  },
];

const areas = [
  {
    icon: ShieldCheck,
    title: 'Estrategia pública de IA',
    text: 'Gobernanza, riesgo, cumplimiento, soberanía tecnológica y despliegue responsable en administraciones públicas.',
    href: '#mencia',
    territory: 'strategy',
    action: 'Examinar el caso principal',
  },
  {
    icon: Workflow,
    title: 'Aplicaciones y automatización',
    text: 'Prototipos y herramientas web orientadas a problemas reales de gestión, información y servicio público.',
    href: '/aplicaciones/',
    territory: 'applications',
    action: 'Ver herramientas desarrolladas',
  },
  {
    icon: GraduationCap,
    title: 'Formación aplicada',
    text: 'Programas para perfiles administrativos, técnicos, jurídicos y directivos con práctica y evaluación.',
    href: '/formacion/',
    territory: 'formation',
    action: 'Consultar formación',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const videoTriggerRef = useRef<HTMLButtonElement>(null);
  const videoCloseRef = useRef<HTMLButtonElement>(null);

  const closeVideo = () => {
    setVideoOpen(false);
    window.setTimeout(() => videoTriggerRef.current?.focus(), 0);
  };

  useEffect(() => {
    if (!videoOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    videoCloseRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeVideo();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [videoOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', closeMenu);
    return () => document.removeEventListener('keydown', closeMenu);
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <img className="brand-logo brand-logo-full" src="/brand/logo-primary-dark.svg" alt="ariaslombardero" />
          <img className="brand-logo brand-logo-compact" src="/brand/logo-mark-dark.svg" alt="" aria-hidden="true" />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Navegación principal">
          <a href="/" onClick={() => setMenuOpen(false)}>Inicio</a>
          <a href="/cv.html" onClick={() => setMenuOpen(false)}>Trayectoria</a>
          <a href="/casos/mencia.html" onClick={() => setMenuOpen(false)}>Estrategia</a>
          <a href="/aplicaciones/" onClick={() => setMenuOpen(false)}>Aplicaciones</a>
          <a href="/formacion/" onClick={() => setMenuOpen(false)}>Formación</a>
          <a href="/congresos-webinars.html" onClick={() => setMenuOpen(false)}>Congresos y webinars</a>
          <a href="/#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
        </nav>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-content">
            <p className="kicker">Jose Antonio Arias Lombardero</p>
            <h1>Inteligencia artificial aplicada al sector público</h1>
            <p className="hero-lead">Diseño estrategias institucionales, construyo aplicaciones y desarrollo programas de formación adaptados al trabajo de cada organización.</p>
            <div className="hero-actions">
              <a className="button primary" href="mailto:jose@ariaslombardero.es?subject=Solicitud%20de%20propuesta%20formativa%20sobre%20IA">Solicitar una propuesta formativa <ArrowRight size={18} /></a>
              <button className="button secondary video-trigger" type="button" ref={videoTriggerRef} onClick={() => setVideoOpen(true)}><Play size={18} /> Ver vídeo de presentación</button>
              <a className="hero-text-link" href="/cv.html">Trayectoria profesional <ArrowRight size={16} /></a>
            </div>
          </div>
          <div className="hero-proof" aria-label="Credenciales principales">
            <div><strong>15+</strong><span>Años en Administración local</span></div>
            <div><strong>88 h</strong><span>Formación reciente impartida</span></div>
            <div><strong>2</strong><span>Premios profesionales en 2026</span></div>
            <div><strong>AEPD</strong><span>Evaluador de su revista especializada</span></div>
          </div>
        </section>

        <section className="section light" id="ambitos">
          <div className="section-inner">
            <div className="section-heading">
              <div><p className="kicker dark-kicker">Tres líneas de trabajo</p><h2>De la estrategia a la aplicación y el aprendizaje</h2></div>
              <p>Cada línea tiene identidad y recorrido propios, pero comparte una misma especialización en Administración pública e inteligencia artificial.</p>
            </div>
            <div className="area-grid">
              {areas.map(({icon: Icon, title, text, href, territory, action}, index) => (
                <a className={`area territory-${territory}`} href={href} key={title}>
                  <span className="area-index">0{index + 1}</span>
                  <Icon size={23} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="area-cta">{action} <ArrowRight size={16} /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section credentials" aria-label="Credenciales seleccionadas">
          <div className="section-inner credential-row">
            <a href="/cv.html#premio-juan-raya"><Award size={21} /><span>Premio Juan Raya Gómez 2026</span><ArrowRight size={16} /></a>
            <a href="/cv.html#premio-foro-grc"><Award size={21} /><span>Mejor comunicación · II Foro GRC</span><ArrowRight size={16} /></a>
            <a href="/cv.html#investigacion"><BookOpen size={21} /><span>Publicaciones IDP-UOC y CEMCI</span><ArrowRight size={16} /></a>
            <a href="https://revista.aepd.es/revistaprivacidad/about/editorialTeam" target="_blank" rel="noreferrer"><BookOpen size={21} /><span>Evaluador · Revista de la AEPD</span><ExternalLink size={16} /></a>
          </div>
        </section>

        <section className="section case-study" id="mencia">
          <div className="section-inner case-study-grid">
            <div className="case-copy">
              <span className="content-label institutional">Caso institucional</span>
              <p className="kicker">Estrategia pública de IA · 2026-2030</p>
              <h2>MencIA: gobernanza, soberanía tecnológica y servicio público</h2>
              <p>Una estrategia provincial que conecta cumplimiento, infraestructura propia, aplicaciones, alfabetización y asistencia a los municipios. El proyecto fue presentado públicamente y aprobado por unanimidad por el Pleno de la Diputación de Lugo.</p>
              <div className="case-facts" aria-label="Datos principales del caso">
                <div><strong>4</strong><span>Pilares estratégicos</span></div>
                <div><strong>8 + 9</strong><span>Aplicaciones y asistentes en funcionamiento</span></div>
                <div><strong>66</strong><span>Municipios de menos de 20.000 habitantes</span></div>
              </div>
              <a className="button primary" href="/casos/mencia.html">Examinar el caso <ArrowRight size={18} /></a>
            </div>
            <a className="case-visual" href="/casos/mencia.html" aria-label="Abrir el caso MencIA">
              <img src="/img/apps/landing-mencia.jpg" alt="Vista del portal institucional MencIA" loading="lazy" />
              <span>Del marco estratégico a las herramientas y la formación</span>
            </a>
          </div>
        </section>

        <section className="section speaker-preview" id="congresos">
          <div className="section-inner">
            <div className="section-heading">
              <div><p className="kicker dark-kicker">Actividad como ponente</p><h2>Congresos y webinars</h2></div>
              <p>Intervenciones sobre inteligencia artificial, innovación y Administración pública, con acceso a las presentaciones y grabaciones disponibles.</p>
            </div>
            <div className="talk-preview-grid">
              {talks.map((talk) => (
                <article className="talk-preview" key={talk.title}>
                  <img src={talk.image} alt={`Participación en ${talk.title}`} loading="lazy" />
                  <div className="talk-preview-copy">
                    <span className="talk-badge">{talk.badge}</span>
                    <p>{talk.meta}</p>
                    <h3>{talk.title}</h3>
                    <p className="talk-title">{talk.intervention}</p>
                    <a href={talk.href} target="_blank" rel="noreferrer">{talk.badge === 'Webinar' ? 'Ver webinar' : 'Ver presentación'} <ExternalLink size={15} /></a>
                  </div>
                </article>
              ))}
            </div>
            <a className="talks-link" href="/congresos-webinars.html">Ver todos los congresos, jornadas y webinars <ArrowRight size={17} /></a>
          </div>
        </section>

        <section className="section dark-section" id="proyectos">
          <div className="section-inner">
            <div className="section-heading">
              <div><p className="kicker">Trabajo seleccionado</p><h2>Proyectos y aplicaciones seleccionadas</h2></div>
              <p>Una selección breve de diseño de servicios, aplicaciones educativas y herramientas orientadas a tareas concretas.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-media"><img src={project.image} alt={`Vista de ${project.title}`} loading="lazy" /></div>
                  <div className="project-content">
                    <span className="content-label built">Recurso desarrollado</span>
                    <p className="project-type">{project.type}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-links">
                      {project.actions.map((action) => {
                        const external = action.href.startsWith('http');
                        return <a key={action.label} href={action.href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{action.label} {action.code ? <Github size={16} /> : external ? <ExternalLink size={16} /> : <ArrowRight size={16} />}</a>;
                      })}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <a className="text-link" href="/aplicaciones/">Consultar el catálogo de aplicaciones <ArrowRight size={17} /></a>
          </div>
        </section>

        <section className="training-feature" id="formacion">
          <div className="training-overlay" aria-hidden="true" />
          <div className="training-content">
            <span className="content-label delivered">Formación acreditada</span>
            <p className="kicker">Formación en IA para el sector público</p>
            <h2>Programas adaptados al trabajo de cada organización</h2>
            <p>Diseño e imparto talleres, cursos e itinerarios para perfiles administrativos, técnicos, jurídicos y directivos. Los programas combinan contenidos, práctica, evaluación y recursos propios.</p>
            <div className="training-actions"><a className="button training-button" href="/formacion/programas.html">Ver programas <ArrowRight size={18} /></a><a className="training-link" href="/formacion/caso-gestion-local.html"><Users size={18} /> Experiencia impartida</a></div>
          </div>
        </section>

        <section className="section contact" id="contacto">
          <div className="section-inner contact-grid">
            <div><p className="kicker">Contacto</p><h2>Formación y colaboración para organizaciones públicas</h2></div>
            <div>
              <p>Trabajo con administraciones, organismos y entidades formativas. Para preparar una propuesta basta con indicar destinatarios, objetivos, duración y modalidad.</p>
              <div className="contact-actions">
                <a className="button primary" href="mailto:jose@ariaslombardero.es?subject=Solicitud%20de%20propuesta%20formativa%20sobre%20IA"><Mail size={18} /> Solicitar propuesta</a>
              </div>
              <div className="profile-links" aria-label="Perfiles profesionales">
                <a href="https://www.linkedin.com/in/ariaslombardero" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
                <a href="https://github.com/ariaslombardero" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
                <a href="https://vimeo.com/ariaslombardero" target="_blank" rel="noreferrer"><VimeoMark /> Vimeo</a>
                <a href="https://orcid.org/0009-0007-7772-1008" target="_blank" rel="noreferrer"><span className="orcid-mark" aria-hidden="true">iD</span> ORCID</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Jose Antonio Arias Lombardero</span>
        <nav aria-label="Navegación del pie de página">
          <a href="/">Inicio</a>
          <a href="/cv.html">Trayectoria profesional</a>
          <a href="/#contacto">Contacto</a>
          <a href="https://www.linkedin.com/in/ariaslombardero" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/ariaslombardero" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </footer>

      {videoOpen && (
        <div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="presentation-video-title"
          onMouseDown={(event) => { if (event.target === event.currentTarget) closeVideo(); }}
          onKeyDown={(event) => {
            if (event.key !== 'Tab') return;
            const focusable = Array.from(event.currentTarget.querySelectorAll('button, iframe')) as HTMLElement[];
            if (!focusable.length) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault();
              last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault();
              first.focus();
            }
          }}
        >
          <div className="video-modal-panel">
            <div className="video-modal-header"><div><span>Vídeo de presentación</span><h2 id="presentation-video-title">Jose Antonio Arias Lombardero</h2></div><button type="button" ref={videoCloseRef} onClick={closeVideo} aria-label="Cerrar vídeo"><X size={22} /></button></div>
            <div className="video-frame"><iframe src="https://player.vimeo.com/video/1188057315?dnt=1&title=0&byline=0&portrait=0&autoplay=1" title="Vídeo de presentación de Jose Antonio Arias Lombardero" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
