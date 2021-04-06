function tabs(cards,tab) {
    const tabBlocks = document.querySelectorAll(cards),
          tabBtns = document.querySelectorAll(tab);

    tabBlocks[0].style.display = 'flex';

    tabBtns.forEach( ( btn,i )=> {
        btn.addEventListener('click', event => {

            tabBtns.forEach(item => {
                item.classList.remove('catalog__tab_active');
            });

            if (event.target.parentElement === btn ) {
                btn.classList.add('catalog__tab_active');
            }

            tabBlocks.forEach( (block,index) => {
                if ( i == index ) {
                    block.style.display = 'flex';
                } else {
                    block.style.display = 'none';
                }
            });

        });
    });
}

export default tabs;