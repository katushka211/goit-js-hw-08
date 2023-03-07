import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

populateTextarea();

const formData = {};

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
  console.log({ email: emailEl.value, message: textareaEl.value });
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(event) {
  formData[event.target.name] = event.target.value;
  console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  let savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    savedMessage = JSON.parse(savedMessage);
    if (savedMessage.email) {
      emailEl.value = savedMessage.email;
    }
    if (savedMessage.message) {
      textareaEl.value = savedMessage.message;
    } else {
      emailEl.value = '';
      textareaEl.value = '';
    }
  }
}
