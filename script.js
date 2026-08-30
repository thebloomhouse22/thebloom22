/* =========================================
   THE BLOOM HOUSE
   JAVASCRIPT
========================================= */


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar =
  document.getElementById("navbar");


window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");

  }

});



/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

          setTimeout(() => {

            entry.target.classList.add(
              "active"
            );

          }, index * 80);


          revealObserver.unobserve(
            entry.target
          );

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
   CURRENT YEAR
========================================= */

const year =
  document.getElementById("year");


if (year) {

  year.textContent =
    new Date().getFullYear();

}



/* =========================================
   PURPLE BLOOM MOUSE MOVEMENT
========================================= */

const bloom =
  document.querySelector(".bloom");


window.addEventListener(
  "mousemove",
  (event) => {

    if (!bloom) return;


    const x =
      (
        event.clientX /
        window.innerWidth -
        0.5
      ) * 30;


    const y =
      (
        event.clientY /
        window.innerHeight -
        0.5
      ) * 30;


    bloom.style.marginLeft =
      `${x}px`;


    bloom.style.marginTop =
      `${y}px`;

  }
);



/* =========================================
   SMOOTH NAVIGATION
========================================= */

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach((link) => {

    link.addEventListener(
      "click",
      (event) => {

        const target =
          document.querySelector(
            link.getAttribute("href")
          );


        if (target) {

          event.preventDefault();


          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      }
    );

  });



/* =========================================
   TEAM CARD STAGGER
========================================= */

const teamCards =
  document.querySelectorAll(
    ".team-card"
  );


teamCards.forEach(
  (card, index) => {

    card.style.transitionDelay =
      `${index * 0.08}s`;

  }
);
