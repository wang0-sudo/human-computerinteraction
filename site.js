const navigationLinks = [...document.querySelectorAll('.nav-links a')];
const sections = [...document.querySelectorAll('main > section[id]')];
let updatePending = false;

function markCurrentSection() {
  const offset = document.querySelector('.site-nav').getBoundingClientRect().height + 40;
  const current = sections.filter(section => section.getBoundingClientRect().top <= offset).at(-1) || sections[0];
  for (const link of navigationLinks) {
    if (link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  updatePending = false;
}

window.addEventListener('scroll', () => {
  if (updatePending) return;
  updatePending = true;
  requestAnimationFrame(markCurrentSection);
}, { passive: true });
window.addEventListener('resize', markCurrentSection);
window.addEventListener('load', markCurrentSection);
document.addEventListener('toggle', markCurrentSection, true);
markCurrentSection();
