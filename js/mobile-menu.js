document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.mobile-menu__toggle');
  const closeButton = document.querySelector('.mobile-menu__close');
  const mobileMenu = document.querySelector('.mobile-menu');

  toggleButton?.addEventListener('click', () => {
    mobileMenu?.classList.remove('is-hidden');
  });

  closeButton?.addEventListener('click', () => {
    mobileMenu?.classList.add('is-hidden');
  });
});
