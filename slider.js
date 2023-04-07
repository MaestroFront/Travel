const carouselSlide = document.querySelector('.slider__wrapper');
const carouselImages = document.querySelectorAll('.slider__item');
const points = document.querySelectorAll('.slider__dot');

// buttons
const prevBtn = document.querySelector('.before');
const nextBtn = document.querySelector('.after');

// counter
let counter = 1;
const size = carouselImages[0].clientWidth + 60;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// buttons listeners
nextBtn.addEventListener('click', () => {
    setSlide(carouselSlide, size, true);
    setPoint()
})

prevBtn.addEventListener('click', () => {
    setSlide(carouselSlide, size);
    setPoint();
})

function setSlide(carouselSlide, size, isNextBtn = false) {
    const currentCondition = isNextBtn ? counter >= 2 : counter <= 0;
    if (currentCondition) return;
    carouselSlide.style.transition = "transform 1s ease-in-out";
    isNextBtn ? counter++ : counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function setPoint() {
    for (let i = 0; i < points.length; i++) {
        if (i === counter) {
            points.forEach((item) => {
                item.classList.remove('active-dot');
            })
            points[i].classList.add('active-dot');
        }
    }
}

for (let i = 0; i < points.length; i++) {
    points[i].addEventListener('click', () => {
        counter = i;
        points.forEach((item) => {
            item.classList.remove('active-dot');
        })
        points[i].classList.add('active-dot');
        if (counter > 2) {
            return;
        }
        carouselSlide.style.transition = "transform 1s ease-in-out";
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    })
}