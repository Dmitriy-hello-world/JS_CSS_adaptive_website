'use strict';

import mainSlider from './modules/slider';
import tabs from './modules/tabs';
import card from './modules/card';
import toggleModal from './modules/modal';
import validate from './modules/validate';
import pageUp from './modules/pageUp';

window.addEventListener('DOMContentLoaded', () => {

    mainSlider({
        inner: '.slider__inner',
        slideWindow: '.slider__window',
        allSlides: '.slider__img',
        arrowLeft: '.slider__arrow-left',
        arrowRight: '.slider__arrow-right',
        dots: '.slider__dot-click',
        dotsActive: '.slider__dot',
    });

    tabs('.catalog__cards', '.catalog__tab');

    card({
        more: '.card__more a',
        back: '.card__back a',
        main: '.card__main-side',
        other: '.card__other-side',
        mainActive: 'card__main-side_active',
        otherActive: 'card__other-side_active',
    });

    toggleModal({
        back: '.overlay',
        btnOrder: '[data-modal="order"]',
        modalOrder: '#order',
        close: '.modal__close',
        btnBuy: '.button_price',
        modalBuy: '#buy',
        pulsNames: '.card__title',
        modalName: '.modal__subheader',
        thanks: '#thanks',
    });

    validate({
        mainForms: 'form',
        formName: '[name="name"]',
        formPhone: '[name="phone"]',
        formEmail: '[name="email"]',
        modalThanks: '#thanks',
        modalOrder: '#order',
        modalBuy: '#buy',
        back: '.overlay'
    });

    pageUp('.page-up');

});