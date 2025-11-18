import axios from 'axios';

const formWorkTogether = document.querySelector('.work-together-form');
const inputEmail = formWorkTogether.elements.email;
const inputMessage = formWorkTogether.elements.message;
const modal = document.querySelector('.modal');
const closeModalButton = modal.querySelector('.button-close');
const modalBackdrop = modal.querySelector('.modal-backdrop');
const emailError = document.getElementById('email-error');
const iconEmail = document.querySelector('.icon-email');

const axiosInstance = axios.create({
    baseURL: 'https://portfolio-js.b.goit.study/api-docs',
});

modal.classList.add('visually-hidden');
iconEmail.classList.add('visually-hidden');


async function postMessage(email, message) {
    try {
        const response = await axiosInstance.post('', {
            email: email,
            message: message,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

function validateEmail(email) {
    const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return emailPattern.test(email);
}
formWorkTogether.addEventListener('input', (e) => {
    const emailForm = inputEmail.value.trim();
    iconEmail.classList.add('visually-hidden');
    
    if (validateEmail(emailForm)) {
        iconEmail.classList.remove('visually-hidden');
    } else {
        emailError.textContent = 'Invalid email, try again';
        inputEmail.classList.add('invalid-input');
    }
});


formWorkTogether.addEventListener('submit', async (event) => {
    event.preventDefault();

    const emailForm = inputEmail.value.trim();
    const messageForm = inputMessage.value.trim();

    emailError.textContent = '';
    inputEmail.classList.remove('invalid-input');
    

    if (emailForm === '' || messageForm === '') {
        alert('Будь ласка, заповніть всі поля.');
        return;
    }

    if (!validateEmail(emailForm)) {
        emailError.textContent = 'Invalid email, try again';
        inputEmail.classList.add('invalid-input');
        return;
    } else {
        iconEmail.classList.remove('visually-hidden');
    }

    try {
        await postMessage(emailForm, messageForm);
        openModalWindow();
        formWorkTogether.reset();
    } catch (error) {
        alert('Помилка при відправленні повідомлення. Будь ласка, спробуйте ще раз.');
    }
});

function closeModalWindow() {
    iconEmail.classList.add('visually-hidden')
    modal.classList.add('visually-hidden');
    modal.classList.remove('show');
}

function openModalWindow() {
    iconEmail.classList.add('visually-hidden')
    modal.classList.remove('visually-hidden');
    modal.classList.add('show');
}

closeModalButton.addEventListener('click', closeModalWindow);
modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
        closeModalWindow();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModalWindow();
    }
});