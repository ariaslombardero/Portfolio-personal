const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menú');
    });
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menú');
    }
  });
}

const videoTriggers = document.querySelectorAll('[data-video-id]');
let lastVideoTrigger = null;

function createVideoModal() {
  const modal = document.createElement('div');
  modal.className = 'media-modal';
  modal.hidden = true;
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'media-modal-title');
  modal.innerHTML = `
    <div class="media-modal-panel">
      <div class="media-modal-header">
        <div><span>Vídeo</span><h2 id="media-modal-title">Presentación</h2></div>
        <button type="button" class="media-modal-close" aria-label="Cerrar vídeo">×</button>
      </div>
      <div class="media-modal-frame"><iframe title="" src="" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
    </div>`;
  document.body.appendChild(modal);

  const closeButton = modal.querySelector('.media-modal-close');
  const iframe = modal.querySelector('iframe');
  const label = modal.querySelector('.media-modal-header span');
  const title = modal.querySelector('#media-modal-title');

  const close = () => {
    modal.hidden = true;
    iframe.src = '';
    iframe.title = '';
    document.body.classList.remove('modal-open');
    if (lastVideoTrigger) lastVideoTrigger.focus();
  };

  closeButton.addEventListener('click', close);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) close();
  });
  modal.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
    if (event.key === 'Tab') {
      const focusable = [closeButton, iframe];
      const currentIndex = focusable.indexOf(document.activeElement);
      if (event.shiftKey && currentIndex <= 0) {
        event.preventDefault();
        iframe.focus();
      } else if (!event.shiftKey && currentIndex === focusable.length - 1) {
        event.preventDefault();
        closeButton.focus();
      }
    }
  });

  return {
    open(trigger) {
      lastVideoTrigger = trigger;
      const videoId = trigger.dataset.videoId;
      const videoTitle = trigger.dataset.videoTitle || 'Presentación';
      const videoLabel = trigger.dataset.videoLabel || 'Vídeo';
      label.textContent = videoLabel;
      title.textContent = videoTitle;
      iframe.title = videoTitle;
      iframe.src = `https://player.vimeo.com/video/${videoId}?dnt=1&title=0&byline=0&portrait=0&autoplay=1`;
      modal.hidden = false;
      document.body.classList.add('modal-open');
      closeButton.focus();
    },
  };
}

if (videoTriggers.length) {
  const videoModal = createVideoModal();
  videoTriggers.forEach((trigger) => trigger.addEventListener('click', (event) => {
    event.preventDefault();
    videoModal.open(trigger);
  }));
}
