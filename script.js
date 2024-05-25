document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.querySelector('.search-form');
    const loginForm = document.querySelector('.login-form-container');
    const header2 = document.querySelector('.header .header-2');

    document.querySelector('#search-btn').onclick = () => {
        searchForm.classList.toggle('active');
    }

    document.querySelector('#login-btn').onclick = () => {
        loginForm.classList.toggle('active');
    }

    document.querySelector('#close-login-btn').onclick = () => {
        loginForm.classList.remove('active');
    }

    window.onscroll = () => {
        searchForm.classList.remove('active');

        if (window.scrollY > 80) {
            header2.classList.add('active');
        } else {
            header2.classList.remove('active');
        }
    }

    window.onload = () => {
        if (window.scrollY > 80) {
            header2.classList.add('active');
        } else {
            header2.classList.remove('active');
        }

        fadeOut();
    }

    function loader() {
        document.querySelector('.loader-container').classList.add('active');
    }

    function fadeOut() {
        setTimeout(loader, 4000);
    }

    var swiper = new Swiper(".books-slider", {
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Add Swiper instances for other sliders in a similar fashion
});
