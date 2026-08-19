// =========================================
// PORTFOLIO JAVASCRIPT
// =========================================


// =========================================
// NAVBAR SHADOW ON SCROLL
// =========================================

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// =========================================
// SCROLL REVEAL ANIMATION
// =========================================

const revealElements = document.querySelectorAll(
    ".section-title, .about-content, .skill, .project-card, .education-card, .certificate-card, .internship-card, .contact-container"
);


const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// =========================================
// SKILL HOVER EFFECT
// =========================================

const skills = document.querySelectorAll(".skill");

skills.forEach(function (skill) {

    skill.addEventListener("mouseenter", function () {

        skill.style.transform = "translateY(-6px) scale(1.03)";

    });


    skill.addEventListener("mouseleave", function () {

        skill.style.transform = "";

    });

});


// =========================================
// PROJECT CARD CLICK EFFECT
// =========================================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.style.transform = "translateY(-8px)";

    });


    card.addEventListener("mouseleave", function () {

        card.style.transform = "";

    });

});


// =========================================
// SMOOTH NAVIGATION
// =========================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        if (targetId.startsWith("#")) {

            const targetSection =
                document.querySelector(targetId);

            if (targetSection) {

                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});


// =========================================
// ACTIVE NAVIGATION LINK
// =========================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// =========================================
// BACK TO TOP
// =========================================

const backHome = document.querySelector(".back-home");

if (backHome) {

    backHome.addEventListener("click", function (event) {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// =========================================
// SCROLL INDICATOR
// =========================================

const scrollIndicator =
    document.querySelector(".scroll-indicator");

if (scrollIndicator) {

    scrollIndicator.addEventListener("click", function () {

        const aboutSection =
            document.querySelector("#about");

        if (aboutSection) {

            aboutSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


// =========================================
// DISABLE SCROLL INDICATOR AFTER SCROLL
// =========================================

window.addEventListener("scroll", function () {

    if (!scrollIndicator) {
        return;
    }

    if (window.scrollY > 150) {

        scrollIndicator.classList.add("hide");

    } else {

        scrollIndicator.classList.remove("hide");

    }

});


// =========================================
// PAGE LOAD ANIMATION
// =========================================

window.addEventListener("load", function () {

    document.body.classList.add("loaded");

});