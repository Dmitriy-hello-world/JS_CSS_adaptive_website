function pageUp(upLink) {

    const up = document.querySelector(upLink),
        linksUp = document.querySelectorAll('a[href="#up"]'),
        linkDown = document.querySelector('a[href="#catalog"]');

    window.addEventListener('scroll', event => {

        if (window.pageYOffset > 1300) {
            up.style.opacity = '1';
        } else {
            up.style.opacity = '0';
        }
    });

    linksUp.forEach(link => {
        link.addEventListener('click', event => {

            event.preventDefault();

            const id = link.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    linkDown.addEventListener('click', event => {
        event.preventDefault();

        const id = linkDown.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

}

export default pageUp;