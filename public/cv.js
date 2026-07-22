const trajectorySections = [...document.querySelectorAll('.content-section[id]')];
const trajectoryLinks = [...document.querySelectorAll('.toc a[href^="#"], .mobile-toc a[href^="#"]')];
const mobileTrajectoryMenu = document.querySelector('.mobile-toc');

const markCurrentSection = (sectionId) => {
  trajectoryLinks.forEach((link) => {
    if (link.getAttribute('href') === `#${sectionId}`) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  });
};

if ('IntersectionObserver' in window && trajectorySections.length) {
  const visibleSections = new Map();
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        visibleSections.set(entry.target.id, entry.boundingClientRect.top);
      } else {
        visibleSections.delete(entry.target.id);
      }
    });

    const current = [...visibleSections.entries()].sort((a, b) => Math.abs(a[1]) - Math.abs(b[1]))[0];
    if (current) markCurrentSection(current[0]);
  }, {
    rootMargin: '-18% 0px -66% 0px',
    threshold: 0,
  });

  trajectorySections.forEach((section) => sectionObserver.observe(section));
  markCurrentSection(trajectorySections[0].id);
}

trajectoryLinks.forEach((link) => link.addEventListener('click', () => {
  if (mobileTrajectoryMenu?.open) mobileTrajectoryMenu.open = false;
}));
