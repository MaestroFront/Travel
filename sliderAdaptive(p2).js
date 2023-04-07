const slidesAdaptive = document.querySelectorAll('.slider__item_adaptive');
const dotsAdaptive = document.querySelectorAll('.slider__dot_adaptive');

const activeSlideAdaptive = n => {
    for (let slideAdaptive of slidesAdaptive) {
        slideAdaptive.classList.remove('active');
    }
    slidesAdaptive[n].classList.add('active');
}
const activeDotAdaptive = n => {
    for (let dot of dotsAdaptive) {
        dot.classList.remove('active-dot');
    }
    dotsAdaptive[n].classList.add('active-dot');
}

const prepareCurrentSlideAdaptive = ind => {
    activeSlideAdaptive(ind);
    activeDotAdaptive(ind);
}

const nextSlideAdaptive = () => {
    if (index == slidesAdaptive.length - 1) {
        index = 0;
        prepareCurrentSlideAdaptive(index);
    } else {
        index++;
        prepareCurrentSlideAdaptive(index);
    }
}
const prevSlideAdaptive = () => {
    if (index == 0) {
        index = slidesAdaptive.length - 1;
        prepareCurrentSlideAdaptive(index);
    } else {
        index--;
        prepareCurrentSlideAdaptive(index);
    }
}

dotsAdaptive.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlideAdaptive(index);
    })
})