// VARIABLES //

const popup = document.querySelector('.popup');
const account = document.querySelector('.popup-account');

const burgerIcon = document.querySelector('.menu__icon')

const buttonLogin = document.querySelector('.button-login');
const buttonSignIn = document.querySelector('.button-signin');

const inputEmail = document.querySelector('.input-email');
const inputPassword = document.querySelector('.input-password');

const register = document.querySelector('.register');

const buttonFacebook = document.querySelector('.button-facebook');
const buttonGoogle = document.querySelector('.button-google');

const logInTitle = document.querySelector('.logInTitle');

const or = document.querySelector('.or');

const forgotPassword = document.querySelector('.forgotPassword');

const dontHaveAcc = document.querySelector('.dontHaveAcc');

// FUNCTIONS //

const toggleClass = (element, classValue) => element.classList.toggle(classValue);
const changeZIndex = (element, zIndex) => element.style.zIndex = String(zIndex);
const removeClass = (element, classValue) => element.classList.remove(classValue);
const removeElement = (element) => element.remove();
const changeValue = (element, text) => element.innerHTML = text;
const addElementAfterElement = (element1, element2) => element1.after(element2);
const addMarginBottom = (element, value) => element.style.marginBottom = value;

// CLICK METHODS //

buttonLogin.addEventListener('click', () => {
    toggleClass(popup, 'transform-down');
    toggleClass(shadow, 'dark');
    toggleClass(body, 'hide');
})

account.addEventListener('click', () => {
    toggleClass(popup, 'transform-down');
    toggleClass(shadow, 'dark2');
    toggleClass(body, 'hide2');
    changeZIndex(burgerIcon, 1);
})

if (popup.classList.contains('transform-down')) {
    shadow.classList.add('dark');
}

shadow.addEventListener('click', () => {
    removeClass(popup, 'transform-down');
    removeClass(shadow, 'dark');
    removeClass(shadow, 'dark2');
    removeClass(body, 'hide');
    removeClass(popup, 'hide2');
})

buttonSignIn.addEventListener('click', () => {
    const emailValue = inputEmail.value;
    const passwordValue = inputPassword.value;
    if (emailValue.includes('@') && passwordValue.length > 0) {
        alert(`Email: ${emailValue}\nPassword: ${passwordValue}`);
    } else {
        alert('Неправильный email или не введен пароль');
    }
})

register.addEventListener('click', () => {
    if (register.innerHTML === 'Register') {

        const elementsToRemove = [buttonFacebook, buttonGoogle, forgotPassword, or]
        elementsToRemove.map(item => removeElement(item));

        changeValue(logInTitle, 'Create account');
        changeValue(buttonSignIn, 'Sign Up');
        changeValue(dontHaveAcc, 'Already have an account?');
        changeValue(register, 'Log in');

        addMarginBottom(logInTitle, '20px');
        addMarginBottom(buttonSignIn, '5px');

    } else if (register.innerHTML === 'Log in') {

        addElementAfterElement(logInTitle, buttonFacebook);
        addElementAfterElement(buttonFacebook, buttonGoogle);
        addElementAfterElement(buttonGoogle, or);
        addElementAfterElement(buttonSignIn, forgotPassword);

        changeValue(logInTitle, 'Log in to your account');
        changeValue(buttonSignIn, 'Sign In');
        changeValue(dontHaveAcc, 'Don’t have an account?');
        changeValue(register, 'Register');

        addMarginBottom(logInTitle, '30px');
        addMarginBottom(buttonSignIn, '10px');

    }
})

forgotPassword.addEventListener('click', () => {
    alert('Ничего страшного! Это не настоящий сайт.\nНо пароли забывать всё-таки не стоит!')
})

buttonFacebook.addEventListener('click', () => {
    alert('Это пока мы не проходили!')
})

buttonGoogle.addEventListener('click', () => {
    alert('Это пока мы не проходили!')
})