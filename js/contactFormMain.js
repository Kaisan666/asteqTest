const contactForm = document.querySelector(".contact-form-main");
const fioInput = contactForm.querySelector(".contact-form__fio-input");
const phoneInput = contactForm.querySelector(".contact-form__phone-input");
const emailInput = contactForm.querySelector(".contact-form__email-input");
const commentInput = contactForm.querySelector(".contact-form__comment-input");

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
    const re = /^\+7 \(\d{3}\) \d{3}-\d{4}$/;
    return re.test(phone.trim()); // Убедимся, что лишние пробелы удалены
}

function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 1) return '';
    if (phoneNumberLength < 4) return `+7 (${phoneNumber.slice(0, phoneNumberLength)})`;
    if (phoneNumberLength < 7) {
        return `+7 (${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, phoneNumberLength)}`;
    }
    return `+7 (${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
}

function phoneNumberFormatter() {
    let value = phoneInput.value;
    if (value.startsWith('+7')) {
        value = value.replace('+7', '');
    }
    const formattedInputValue = formatPhoneNumber(value);
    phoneInput.value = formattedInputValue;
}

phoneInput.addEventListener('input', phoneNumberFormatter);

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
    const phoneValue = phoneInput.value.trim(); // Убедимся, что лишние пробелы удалены
    if (phoneValue === '') {
        showError(phoneInput, 'Поле обязательно для заполнения');
        hasErrors = true;
    } else if (!isValidPhone(phoneValue)) {
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

    console.log(commentInput.value)
    if (!hasErrors) {
        console.log(fioInput.value)
        console.log(phoneInput.value)
        console.log(emailInput.value)
        console.log(commentInput.value)
        
        contactForm.reset();
        alert('Форма успешно отправлена!');
    }
});