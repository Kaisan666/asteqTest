const contactForm = document.querySelector(".contact-form-main");
const fioInput = contactForm.querySelector(".contact-form__fio-input");
const phoneInput = contactForm.querySelector(".contact-form__phone-input");
const emailInput = contactForm.querySelector(".contact-form__email-input");
const commentInput = contactForm.querySelector(".contact-form__comment-input");

function showError(input, message) {
    const parent = input.parentElement;
    parent.classList.add("invalid-icon")
    input.classList.add('invalid');
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
    return re.test(phone.trim());
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

    contactForm.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
    contactForm.querySelectorAll('.invalid-icon').forEach(el => el.classList.remove('invalid-icon'));
    contactForm.querySelectorAll('.invalid-text').forEach(el => el.remove());

    if (fioInput.value.trim().length < 2) {
        showError(fioInput, 'Введите корректное ФИО');
        hasErrors = true;
    }

    const phoneValue = phoneInput.value.trim();
    if (phoneValue === '') {
        showError(phoneInput, 'Поле обязательно для заполнения');
        hasErrors = true;
    } else if (!isValidPhone(phoneValue)) {
        showError(phoneInput, 'Неверный формат телефона');
        hasErrors = true;
    }

    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Поле обязательно для заполнения');
        hasErrors = true;
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Неверный формат email');
        hasErrors = true;
    }


    if (!hasErrors) {
        const formData = new FormData(contactForm)
        try{
        const sendData = async(data) => {
            const response = await fetch("https://dummyjson.com/test", 
            {method : "POST",
                body : data
            })
            console.log(response.json().data)
        }
        sendData()
        const successNotification = document.querySelector(".form-notification-success")
        successNotification.classList.add("active")
        setTimeout(()=>{
            successNotification.classList.remove("active")
        }, 2500)
        contactForm.reset();
    
        
    }
    catch(e) {
        console.log(e)
        const errorNotification = document.querySelector(".form-notification-error")
        errorNotification.classList.add("active")
        setTimeout(()=>{
            errorNotification.classList.remove("active")
        }, 2500)
    }
    }
});
