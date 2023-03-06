import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const formData = {};
const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

populateTextarea();

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
  // console.log('Отправляем форму');
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea(event) {
  let savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    savedMessage = JSON.parse(savedMessage);
    emailEl.value = savedMessage.email;
    textareaEl.value = savedMessage.message;
  }
}
