function mainSlider({inner,slideWindow,allSlides,arrowLeft,arrowRight,dots,dotsActive}) {
    const sliderInner = document.querySelector(inner),
          sliderWindow = document.querySelector(slideWindow),
          slides = document.querySelectorAll(allSlides),
          left = document.querySelector(arrowLeft),
          right = document.querySelector(arrowRight),
          dot = document.querySelectorAll(dots),
          dotActive = document.querySelectorAll(dotsActive);
        
    let   width = window.getComputedStyle(sliderWindow).width,
          count = 0;

    //checkout sliderWindow width for set slide width    
    function getSliderWidth() {
        width = window.getComputedStyle(sliderWindow).width;
        sliderInner.style.width = width * slides.length + '%';

        slides.forEach( slide => {
            slide.style.width = width;
        });
    }
    getSliderWidth();

    //adaptive
    window.addEventListener('resize', () => {
        let clientWidth = document.documentElement.clientWidth;
        if ( width == '750px' || width == '470px') {
            if (clientWidth <= 1200 && clientWidth >= 992) {
                sliderWindow.style.width = '600px';
                getSliderWidth();
            } 
        } 
        if (width == '600px') {
            if (clientWidth > 1200) {
                sliderWindow.style.width = '750px';
                getSliderWidth();
            }
        } 
        if (width == '600px' || width == '370px') {
            if (clientWidth <= 991 && clientWidth >= 768) {
                sliderWindow.style.width = '470px';
                getSliderWidth();
            }
        }
        if (width == '470px' || width == '300px') {
            if (clientWidth <= 767 && clientWidth >= 576) {
                sliderWindow.style.width = '370px';
                getSliderWidth();
            }
        }
        if (width == '370px') {
            if (clientWidth < 576) {
                sliderWindow.style.width = '300px';
                getSliderWidth();
            }
        }
    });

    //left and right arrows
    left.addEventListener( 'click', () => {
        if ( count == 0 ) {
            count = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else { 
            count -= width.slice(0, width.length - 2);
        }
    
        sliderInner.style.transform = `translateX(-${count}px)`;
    });

    right.addEventListener( 'click', () => {
        if ( count == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            count = 0;
        } else {
            count += +width.slice(0, width.length - 2);
        }
    
        sliderInner.style.transform = `translateX(-${count}px)`;
    });

    //dots for mobile
    dot.forEach( (item,index) => {
        item.addEventListener('click', () => {
            sliderInner.style.transform = `translateX(-${(+width.slice(0, width.length - 2)) * index}px)`;
            let i = index;
            dotActive.forEach( (item,index) => {
                item.classList.remove('slider__dot_active');
                if ( index == i ) {
                    item.classList.add('slider__dot_active');
                }
            });
        });
    });
}

export default mainSlider; 