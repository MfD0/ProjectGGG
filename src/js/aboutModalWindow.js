window.openAboutWindow = openAboutWindow;
// Шукаємо модальне вікно "About"
const modal = document.querySelectorAll('.modal')[1];
const backdrop = modal.querySelector('.modal-body');
const closeModalButton = modal.querySelector('.modal-close');
function openAboutWindow() {
  // Відображаємо вікно та блокуємо прокрутку фону
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
// Функція для закриття модального вікна
function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = ''; // Відновлюємо прокрутку фону
}
closeModalButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', function (event) {
  if (event.target === backdrop) {
    closeModal();
  }
});
// Закриваємо модальне вікно при натисканні на Escape
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});
