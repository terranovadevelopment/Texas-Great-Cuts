(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const expanded = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open', !expanded);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    }));
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const lightbox = document.getElementById('gallery-lightbox');
  if (lightbox && typeof lightbox.showModal === 'function') {
    const image = document.getElementById('lightbox-image');
    const caption = document.getElementById('lightbox-caption');
    document.querySelectorAll('.gallery-photo').forEach(button => {
      button.addEventListener('click', () => {
        image.src = button.dataset.full;
        image.alt = button.querySelector('img').alt;
        caption.textContent = button.dataset.caption || '';
        lightbox.showModal();
      });
    });
    lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.close(); });
  }
})();
