import mainSlider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
    mainSlider({
        inner: '.slider__inner',
        slideWindow: '.slider__window',
        allSlides: '.slider__img',
        arrowLeft: '.slider__arrow-left',
        arrowRight: '.slider__arrow-right',
        dots: '.slider__dot-click',
        dotsActive: '.slider__dot'
    });
});