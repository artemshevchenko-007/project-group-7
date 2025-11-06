const openBtn = document.querySelector('[data-open-mobile-menu]');
const closeBtn = document.querySelector('.close-mobile-btn');
const menu = document.querySelector('.mobile-menu');

openBtn.addEventListener('click', () => {
  menu.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('is-open');
});
