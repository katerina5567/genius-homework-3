document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.querySelector('.modal-btn-open');
  const backdrop = document.querySelector('.backdrop');
  const closeModalBtn = document.querySelector('.modal-close-btn');

  openModalBtn.addEventListener('click', () => {
    backdrop.classList.remove('is-hidden');
  });

  closeModalBtn.addEventListener('click', () => {
    backdrop.classList.add('is-hidden');
  });

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      backdrop.classList.add('is-hidden');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      backdrop.classList.add('is-hidden');
    }
  });
});
