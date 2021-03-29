function card({more,back,main,other,mainActive,otherActive}) {
    const cardMore = document.querySelectorAll(more),
          cardBack = document.querySelectorAll(back),
          mainSide = document.querySelectorAll(main),
          backSide = document.querySelectorAll(other); 
    

    function toggle(linkClass) {
        linkClass.forEach( (link,i) => {
            link.addEventListener('click', event => {
                event.preventDefault();
                mainSide[i].classList.toggle(mainActive);
                backSide[i].classList.toggle(otherActive);
            });
        });
    }
    toggle(cardMore);
    toggle(cardBack);

}

export default card;