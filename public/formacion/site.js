const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
  navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menú');
    }
  });
}

const programFilters = document.querySelectorAll('[data-program-filter]');
programFilters.forEach((button) => button.setAttribute('aria-pressed', String(button.classList.contains('active'))));
programFilters.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.programFilter;
    document.querySelectorAll('[data-program-filter]').forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');
    document.querySelectorAll('[data-program-category]').forEach((program) => {
      program.classList.toggle('hidden', filter !== 'todos' && program.dataset.programCategory !== filter);
    });
  });
});

const consultationForm = document.getElementById('consultation-form');

if (consultationForm) {
  consultationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(consultationForm);
    const need = String(data.get('necesidad') || '').trim() || 'No indicada todavía';
    const body = [
      'Hola, Jose Antonio:',
      '',
      'Me gustaría consultar una posible propuesta de formación en inteligencia artificial con este punto de partida:',
      '',
      `Destinatarios: ${data.get('audiencia')}`,
      `Objetivo: ${data.get('objetivo')}`,
      `Duración disponible: ${data.get('duracion')}`,
      `Modalidad: ${data.get('modalidad')}`,
      `Necesidad concreta: ${need}`,
      '',
      'Un saludo.',
    ].join('\n');
    const subject = 'Consulta sobre una propuesta formativa adaptada';
    window.location.href = `mailto:jose@ariaslombardero.es?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
