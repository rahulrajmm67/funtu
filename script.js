document.addEventListener("DOMContentLoaded", function () {
    const navbarCollapse = document.getElementById("navbarContent");
    const navLinks = navbarCollapse.querySelectorAll(".nav-link");

    // Close navbar on link click (bootstrap way)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);
            if (collapseInstance) {
                collapseInstance.hide();
            }
        });
    });

    // Close navbar when clicking outside of it
    document.addEventListener("click", function (event) {
        const isClickInsideNavbar = navbarCollapse.contains(event.target);
        const isToggler = event.target.closest('.navbar-toggler');

        if (!isClickInsideNavbar && !isToggler && navbarCollapse.classList.contains('show')) {
            const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);
            if (collapseInstance) {
                collapseInstance.hide();
            }
        }
    });
});

// Reviews Carousel
new Swiper(".reviews-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".reviews-swiper .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            centeredSlides: true,
        }
    }
});

// Install Steps Carousel
new Swiper(".install-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".install-swiper .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            autoplay: false,
            loop: false,
        }
    }
});

document.getElementById('copyright-year').textContent = new Date().getFullYear();

const swiper = new Swiper(".mySwiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
    },
});