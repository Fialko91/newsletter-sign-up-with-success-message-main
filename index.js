const cont = document.querySelector('.block-content')
const form = document.querySelector('form')
const formInput = document.querySelector('.form-input')
const regex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.popup-close')

const emptyInput = document.querySelector('.error-message .empty')
const validEmail = document.querySelector('.error-message .wrong-email')

const mainImage = document.querySelector('.block-content__image img');

form.addEventListener('submit', e => {
    e.preventDefault()
    checkingInputOnValid(formInput.value)

    if (!form.classList.contains('no-empty') && !form.classList.contains('valid-email')) {
        getPopup()
        formInput.value = ''
        form.classList.add('no-empty', 'valid-email')
    }
})

form.addEventListener('change', e => {
    e.preventDefault()
    checkingInputOnValid(formInput.value)
})

function checkingInputOnValid(value) {
    if (value.trim()) {
        emptyInput.classList.remove('is-novalid')
        formInput.classList.remove('is-border')
        form.classList.remove('no-empty')
    } else {
        emptyInput.classList.add('is-novalid')
        formInput.classList.add('is-border')
    }

    if (regex.test(value.trim())) {
        validEmail.classList.remove('is-novalid')
        formInput.classList.remove('is-border')
        form.classList.remove('valid-email')
    } else {
        validEmail.classList.add('is-novalid')
        formInput.classList.add('is-border')
    }
}

function getPopup() {
    popup.classList.add('is-show')
    cont.classList.add('is-hide')
}

popupClose.addEventListener('click', closePopup)

function closePopup() {
    popup.classList.remove('is-show')
    cont.classList.remove('is-hide')
}
