const items = document.querySelectorAll('.slider__item_adaptive');
const dots = document.querySelectorAll('.slider__dot_adaptive');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    dots[currentItem].classList.remove('active-dot');
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('active', direction);
    })
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    dots[currentItem].classList.add('active-dot');
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    })
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left')
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right')
}

left.addEventListener('click', function () {
    if (isEnabled) {
        previousItem(currentItem);
    }
});

right.addEventListener('click', function () {
    if (isEnabled) {
        nextItem(currentItem);
    }
});

const activeDot = n => {
    for (let dot of dots) {
        dot.classList.remove('active-dot');
    }
    dots[n].classList.add('active-dot');
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        currentItem = indexDot;
        activeDot(currentItem);
    })
})