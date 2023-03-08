import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');
let formData = {};
populateTextarea();

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
  if (emailEl.value === '' || messageEl.value === '') {
    return alert('Заповніть всі поля!!!');
  }
  console.log({ email: emailEl.value, message: messageEl.value });
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function onTextareaInput() {
  formData = { email: emailEl.value, message: messageEl.value };
  console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedFormData = JSON.parse(savedData);
    emailEl.value = parsedFormData.email || '';
    messageEl.value = parsedFormData.message || '';
    formData = parsedFormData;
  }
}
