function modalOpen(modalType, overlay, order, buy, tnks) {
    modalClose(overlay, order, buy, tnks);
    document.body.style.overflow = 'hidden';

    overlay.style.display = 'block';
    modalType.style.display = 'block';
}

function modalClose(overlay, order, buy, tnks) {
    document.body.style.overflow = '';

    overlay.style.display = 'none';
    order.style.display = 'none';
    buy.style.display = 'none';
    tnks.style.display = 'none';
}

function toggleModal({
    back,
    btnOrder,
    modalOrder,
    close,
    btnBuy,
    modalBuy,
    pulsNames,
    modalName,
    thanks
}) {

    const overlay = document.querySelector(back),
        orderBtns = document.querySelectorAll(btnOrder),
        order = document.querySelector(modalOrder),
        buyBtns = document.querySelectorAll(btnBuy),
        buy = document.querySelector(modalBuy),
        pulsometerNames = document.querySelectorAll(pulsNames),
        tnks = document.querySelector(thanks),
        modalPulsName = buy.querySelector(modalName);

    function scrollPage() {
        if (window.pageYOffset + document.documentElement.clientHeight >= (document.documentElement.scrollHeight - 1)) {
            modalOpen(order, overlay, order, buy, tnks);
            window.removeEventListener('scroll', scrollPage);
        }
    }

    //events order modals

    orderBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modalOpen(order, overlay, order, buy, tnks);
        });
    });


    overlay.addEventListener('click', event => {
        if (event.target.classList.contains('modal__close')) {
            modalClose(overlay, order, buy, tnks);
        }
    });

    window.addEventListener('keydown', event => {
        if ((window.getComputedStyle(order).display == 'block' || window.getComputedStyle(buy).display == 'block' || window.getComputedStyle(tnks).display == 'block') && event.key == 'Escape') {
            modalClose(overlay, order, buy, tnks);
        }
    });

    window.addEventListener('click', event => {
        if (window.getComputedStyle(overlay).display == 'block' && event.target == overlay) {
            modalClose(overlay, order, buy, tnks);
        }
    });

    window.addEventListener('scroll', scrollPage);

    //events buy modals 

    buyBtns.forEach((btn, i) => {
        btn.addEventListener('click', event => {
            pulsometerNames.forEach((name, index) => {
                if (index == i) {
                    modalPulsName.textContent = `${pulsometerNames[i].textContent}`;
                }
            });
            modalOpen(buy, overlay, order, buy, tnks);
        });
    });
}

export default toggleModal;
export {
    modalOpen
};
export {
    modalClose
};