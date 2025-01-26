const contactForm = document.querySelector(".contact-form-main");
const fioInput = contactForm.querySelector(".contact-form__fio-input");
const phoneInput = contactForm.querySelector(".contact-form__phone-input");
const emailInput = contactForm.querySelector(".contact-form__email-input");

function showError(input, message) {
    const parent = input.parentElement;
    input.classList.add('invalid');
    
    // Проверяем, есть ли уже сообщение об ошибке
    let errorText = parent.querySelector('.invalid-text');
    if (!errorText) {
        errorText = document.createElement('div');
        errorText.className = 'invalid-text';
        parent.appendChild(errorText);
    }
    errorText.textContent = message;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhone(phone) {
    const re = /^[\d\+][\d\s\-()]{6,}$/;
    return re.test(phone);
}

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let hasErrors = false;

    // Удаляем предыдущие ошибки
    contactForm.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
    contactForm.querySelectorAll('.invalid-text').forEach(el => el.remove());

    // Проверка ФИО
    if (fioInput.value.trim().length < 2) {
        showError(fioInput, 'Введите корректное ФИО');
        hasErrors = true;
    }

    // Проверка телефона
    if (phoneInput.value.trim() === '') {
        showError(phoneInput, 'Поле обязательно для заполнения');
        hasErrors = true;
    } else if (!isValidPhone(phoneInput.value.trim())) {
        showError(phoneInput, 'Неверный формат телефона');
        hasErrors = true;
    }

    // Проверка email
    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Поле обязательно для заполнения');
        hasErrors = true;
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Неверный формат email');
        hasErrors = true;
    }

    // Если ошибок нет - можно отправлять форму
    if (!hasErrors) {
        // Здесь можно добавить отправку формы
        contactForm.reset();
        alert('Форма успешно отправлена!');
    }
});