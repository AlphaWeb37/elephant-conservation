// =======================================
// GIANTS OF THE WILD
// Version 2 Script
// =======================================

// --------------------
// Loading Screen
// --------------------

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.transition = "opacity 0.8s ease";
            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 800);

        }, 1200);

    }

});

// --------------------
// Slideshow
// --------------------

const slideshow = document.querySelector(".slideshow");

const images = [

    "images/elephant1.jpg",
    "images/elephant2.jpg",
    "images/elephant3.jpg",
    "images/elephant4.jpg",
    "images/elephant5.jpg",
    "images/elephant6.jpg",
    "images/elephant7.jpg",
    "images/elephant8.jpg",
    "images/elephant9.jpg"

];

let current = 0;

if (slideshow) {

    slideshow.style.backgroundImage = `url('${images[current]}')`;

    setInterval(() => {

        current++;

        if (current >= images.length) {

            current = 0;

        }

        slideshow.style.backgroundImage =
            `url('${images[current]}')`;

    }, 7000);

}

// --------------------
// Navbar
// --------------------

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(20,55,40,.92)";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";

    } else {

        navbar.style.background = "rgba(255,255,255,.12)";
        navbar.style.boxShadow = "none";

    }

});

// --------------------
// Counter Animation
// --------------------

const counters = document.querySelectorAll(".card h3");

let countersAnimated = false;

function animateCounters() {

    if (countersAnimated) return;

    countersAnimated = true;

    counters.forEach(counter => {

        const target = Number(counter.textContent);

        let value = 0;

        const increment = Math.max(1, Math.ceil(target / 100));

        function update() {

            value += increment;

            if (value < target) {

                counter.textContent = value;

                requestAnimationFrame(update);

            } else {

                counter.textContent = target;

            }

        }

        counter.textContent = "0";

        update();

    });

}

const stats = document.querySelector(".stats");

window.addEventListener("scroll", () => {

    if (!stats) return;

    const trigger = stats.getBoundingClientRect().top;

    if (trigger < window.innerHeight - 100) {

        animateCounters();

    }

});

// --------------------
// Smooth Scroll
// --------------------

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// --------------------
// Scroll Arrow
// --------------------

const arrow = document.querySelector(".scroll-indicator");

if (arrow) {

    arrow.addEventListener("click", () => {

        window.scrollTo({

            top: window.innerHeight,

            behavior: "smooth"

        });

    });

}

console.log("🐘 Giants of the Wild loaded successfully!"); 

/* ==========================
   QUESTIONNAIRE
========================== */

const questionForm = document.getElementById("questionForm");
const thankYouMessage = document.getElementById("thankYouMessage");

if(questionForm){

questionForm.addEventListener("submit", function(e){

    e.preventDefault();

    thankYouMessage.textContent =
    "🐘 Thank you for sharing your thoughts! Every small action helps protect elephants and their future.";

    thankYouMessage.style.opacity = "1";

    questionForm.reset();

    setTimeout(function(){

        thankYouMessage.textContent = "";
        thankYouMessage.style.opacity = "0";

    },5000);

});
}