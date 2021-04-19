function pageUp(upLink) {

    const up = document.querySelector(upLink),
        links = document.querySelectorAll('a[href^="#"]');

    window.addEventListener('scroll', event => {

        if (window.pageYOffset > 1300) {
            up.style.opacity = '1';
        } else {
            up.style.opacity = '0';
        }
    });

    links.forEach(link => {
        link.addEventListener('click', event => {

            event.preventDefault();

            const id = link.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

}

export default pageUp;