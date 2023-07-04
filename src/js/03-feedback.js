import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector("input");
const messageInput = document.querySelector("textarea");

const STORAGE_KEY = 'feedback-form-state';

const saveForm = _.throttle(() => {
    const formState = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}, 500);

emailInput.addEventListener("input", saveForm);
messageInput.addEventListener("input", saveForm);

const fillFormFromStorage = () => {
    const storedState = localStorage.getItem(STORAGE_KEY);
    if (storedState) {
        const formState = JSON.parse(storedState);
        emailInput.value = formState.email;
        messageInput.value = formState.message;
    }
};

window.addEventListener("load", fillFormFromStorage);

const clear = () => {
    localStorage.removeItem(STORAGE_KEY);
    emailInput.value = "";
    messageInput.value = "";
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formState = {
        email: emailInput.value,
        message: messageInput.value,
    };
    console.log(formState);
    clear();
})
