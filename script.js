/* =========================================
   THE BLOOM HOUSE
   JavaScript
========================================= */
/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */
const revealElements = document.querySelectorAll(
    ".section, .service-card, .plan-card, .hero-content, .hero-visual"
);
revealElements.forEach((element) => {
    element.classList.add("reveal");
});
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);
revealElements.forEach((element) => {
    revealObserver.observe(element);
});
/* =========================================
   MOUSE PARALLAX
========================================= */
const mandala = document.querySelector(".mandala");
document.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 20;
    const y = (event.clientY / window.innerHeight - 0.5) * 20;
    if (window.innerWidth > 900) {
        mandala.style.marginLeft = `${x}px`;
        mandala.style.marginTop = `${y}px`;
    }
});
/* =========================================
   PLAN CARD TILT
========================================= */
const cards = document.querySelectorAll(".plan-card");
cards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
        if (window.innerWidth < 900) return;
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateX =
            ((y / rect.height) - 0.5) * -5;
        const rotateY =
            ((x / rect.width) - 0.5) * 5;
        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
});
/* =========================================
   NAVBAR BLUR ON SCROLL
========================================= */
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background =
            "rgba(12, 8, 18, 0.65)";
        navbar.style.backdropFilter =
            "blur(15px)";
        navbar.style.borderRadius =
            "0 0 20px 20px";
    } else {
        navbar.style.background = "";
        navbar.style.backdropFilter = "";
        navbar.style.borderRadius = "";
    }
});
/* =========================================
   SMOOTH BUTTON FEEDBACK
========================================= */
const buttons = document.querySelectorAll(
    ".primary-button, .plan-button, .nav-button"
);
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.96)";
        setTimeout(() => {
            button.style.transform = "";
        }, 120);
    });
});
/* =========================================
   CURRENT YEAR
========================================= */
const yearElement = document.querySelector("footer small");
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent =
        `© ${currentYear} The Bloom House. All rights reserved.`;
}