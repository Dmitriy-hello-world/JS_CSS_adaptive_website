'use strict';

import mainSlider from './modules/slider';
import tabs from './modules/tabs';
import card from './modules/card';

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
    tabs('.catalog__cards','.catalog__tab');
    card({ more: '.card__more a',
           back: '.card__back a',
           main: '.card__main-side',
           other: '.card__other-side',
           mainActive: 'card__main-side_active',
           otherActive: 'card__other-side_active'});
});