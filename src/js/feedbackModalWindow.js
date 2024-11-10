window.openFeedbackWindow = openFeedbackWindow;

// Шукаємо модальне вікно "Feedback"
const feedbackModal = document.querySelectorAll('.modal')[2];
const feedbackBackdrop = feedbackModal.querySelector('.modal-body');
const closeFeedbackModalButton = feedbackModal.querySelector('.modal-close');

function openFeedbackWindow() {
  // Відображаємо вікно та блокуємо прокрутку фону
  feedbackModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// Функція для закриття модального вікна
function closeFeedbackModal() {
  feedbackModal.classList.remove('open');
  document.body.style.overflow = ''; // Відновлюємо прокрутку фону
}

closeFeedbackModalButton.addEventListener('click', closeFeedbackModal);
feedbackBackdrop.addEventListener('click', function (event) {
  if (event.target === feedbackBackdrop) {
    closeFeedbackModal();
  }
});

// Закриваємо модальне вікно при натисканні на Escape
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeFeedbackModal();
  }
});

// Додавання обробника форми
const feedbackForm = document.getElementById('feedback-form');
feedbackForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Запобігаємо перезавантаженню сторінки
  alert('Thank you for your feedback!');
  closeFeedbackModal();
});
