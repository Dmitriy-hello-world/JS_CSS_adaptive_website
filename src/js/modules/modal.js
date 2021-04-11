function toggleModal({back,btnOrder,modalOrder,close,btnBuy,modalBuy,pulsNames,modalName}) {

    const overlay = document.querySelector(back),
          orderBtns = document.querySelectorAll(btnOrder),
          order = document.querySelector(modalOrder),
          closeModal = document.querySelectorAll(close),
          buyBtns = document.querySelectorAll(btnBuy),
          buy = document.querySelector(modalBuy),
          pulsometerNames = document.querySelectorAll(pulsNames),
          modalPulsName = buy.querySelector(modalName);

    function modalOpen(modalType) {
        document.body.style.overflow = 'hidden';

        overlay.style.display = 'block';
        modalType.style.display = 'block';
    }

    function modalClose() {
        document.body.style.overflow = '';

        overlay.style.display = 'none';
        order.style.display = 'none';
        buy.style.display = 'none';
    }

    function scrollPage() {
        if (window.pageYOffset + document.documentElement.clientHeight >= (document.documentElement.scrollHeight -1)) {
            modalOpen(order);
            window.removeEventListener('scroll', scrollPage);
        }
    }

    //events order modals

    orderBtns.forEach( btn => {
        btn.addEventListener('click', () => {
            modalOpen(order);
        });
    });

    closeModal.forEach( cross => {
        cross.addEventListener('click', () => {
            modalClose(order);
        });
    });

    window.addEventListener('keydown', event => {
        if ((window.getComputedStyle(order).display == 'block' || window.getComputedStyle(buy).display == 'block') && event.key == 'Escape') {
            modalClose(order);
        }
    });

    window.addEventListener('click', event => {
        if (window.getComputedStyle(overlay).display == 'block' && event.target == overlay) {
            modalClose(order);
        }
    });

    window.addEventListener('scroll', scrollPage);

    //events buy modals 
    
    buyBtns.forEach( (btn  , i) => {
        btn.addEventListener('click', event => {
            pulsometerNames.forEach( (name, index) => {
                if (index == i) {
                    modalPulsName.textContent = `${pulsometerNames[i].textContent}`;
                }
            });
            modalOpen(buy);
        });
    });

}

export default toggleModal;