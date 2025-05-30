document.addEventListener('DOMContentLoaded', () => {
  const modalOpenBtn = document.querySelector('.modal-btn-open');
  const modalBackdrop = document.querySelector('.backdrop');
  const modalCloseBtn = document.querySelector('.modal-close-btn');

  if (modalOpenBtn && modalBackdrop && modalCloseBtn) {
    modalOpenBtn.addEventListener('click', () => {
      modalBackdrop.classList.remove('is-hidden');
    });

    modalCloseBtn.addEventListener('click', () => {
      modalBackdrop.classList.add('is-hidden');
    });

   
    modalBackdrop.addEventListener('click', (event) => {
      if (event.target === modalBackdrop) {
        modalBackdrop.classList.add('is-hidden');
      }
    });

    
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        modalBackdrop.classList.add('is-hidden');
      }
    });
  }
});

