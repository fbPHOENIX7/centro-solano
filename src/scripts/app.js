const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

menuButton?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menu.setAttribute('aria-hidden', String(!isOpen));
});

document.querySelectorAll('.menu a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
  });
});
