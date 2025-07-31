const yearCon = document.getElementById("year");

const currentYear = new Date().getFullYear();

yearCon.innerHTML = currentYear;

// Scroll Reveal

document.addEventListener("DOMContentLoaded", () => {
    ScrollReveal().reveal('.heading', {
        distance: '60px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'top',
        delay: 100
    }),

    ScrollReveal().reveal('.about-img, .home-content p, .home-content .social-icons', {
        distance: '60px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'bottom',
        delay: 100
    }),

    ScrollReveal().reveal('.about-content p', {
        distance: '180px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'right'
    })

    // ScrollReveal().reveal('.recipe2', {
    //     distance: '180px',
    //     duration: 1000,
    //     easing: 'ease-in-out',
    //     origin: 'left'
    // })
});