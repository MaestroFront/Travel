const checkbox = document.querySelector('.checkbox');
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.navigation__list');
const shadow = document.querySelector('.shadow');
const body = document.querySelector('body');

const active = '_active';

checkbox.addEventListener('click', () => {
    menuBody.classList.toggle(active);
    iconMenu.classList.toggle(active);
    checkbox.classList.toggle(active);
    shadow.classList.toggle('dark');
    body.classList.toggle('hide');
})

document.addEventListener('click', (event) => {
    // console.log(event);
    if (!menuBody.classList.contains(active)) {
        return;
    }
    if (event.target.classList[0] !== 'checkbox') {
        menuBody.classList.remove(active);
        iconMenu.classList.remove(active);
        shadow.classList.remove('dark');
        body.classList.remove('hide');
        checkbox.checked = false;
    }
})