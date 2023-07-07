import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
let formState = {};

const saveForm = throttle(e => {
  formState[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}, 500);

formEl.addEventListener('input', saveForm);

const onLoad = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return;
    formState = JSON.parse(data);
    Object.entries(formState).forEach(([key, val]) => {
      formEl.elements[key].value = val;
    });
  } catch (error) {
    console.log(error.message);
  }
};

window.addEventListener('load', onLoad);

const clear = () => {
  localStorage.removeItem(STORAGE_KEY);
  formEl.reset();
};

formEl.addEventListener('submit', event => {
  event.preventDefault();
  console.log(formState);
  clear();
});
