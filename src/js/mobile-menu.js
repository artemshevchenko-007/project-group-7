const openBtn = document.querySelector('[data-open-mobile-menu]');
const closeBtn = document.querySelector('.close-mobile-btn');
const menu = document.querySelector('.mobile-menu');
const menuLinks = document.querySelectorAll('.mobile-menu .header-nav-link');

openBtn.addEventListener('click', () => {
  menu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('is-open');
  document.body.style.overflow = '';
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
  });
});
