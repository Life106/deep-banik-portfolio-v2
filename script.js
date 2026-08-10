/* =========================================================
   1. MOBILE NAVIGATION
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navigationLinks = document.querySelectorAll(".nav-links a");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.innerText = isOpen ? "✕" : "☰";

    menuToggle.setAttribute("aria-expanded", isOpen);

});


/* Close mobile menu when a link is clicked */

for (const link of navigationLinks) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.innerText = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

}



/* =========================================================
   2. DARK MODE
========================================================= */

const darkModeButton =
    document.getElementById("dark-mode-btn");


darkModeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    const darkModeEnabled =
        document.body.classList.contains("dark-mode");


    if (darkModeEnabled) {

        darkModeButton.innerText = "☀️ Light Mode";

    }
    else {

        darkModeButton.innerText = "🌙 Dark Mode";

    }

});



/* =========================================================
   3. ACTIVE NAVIGATION WHILE SCROLLING
========================================================= */

const sections =
    document.querySelectorAll("main section");

const navLinksArray =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

    let currentSection = "";


    for (const section of sections) {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;


        if (
            window.scrollY >= sectionTop - 200 &&
            window.scrollY < sectionTop + sectionHeight - 200
        ) {

            currentSection = section.getAttribute("id");

        }

    }


    for (const link of navLinksArray) {

        link.classList.remove("active");


        const linkTarget =
            link.getAttribute("href");


        if (linkTarget === `#${currentSection}`) {

            link.classList.add("active");

        }

    }

});



/* =========================================================
   4. PROJECT FILTERING
========================================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


for (const button of filterButtons) {

    button.addEventListener("click", function () {

        const category =
            button.dataset.category;


        /* Change active filter button */

        for (const filterButton of filterButtons) {

            filterButton.classList.remove("active");

        }

        button.classList.add("active");


        /* Filter projects */

        for (const project of projectCards) {

            const projectCategory =
                project.dataset.category;


            if (
                category === "All" ||
                projectCategory === category
            ) {

                project.style.display = "flex";

            }
            else {

                project.style.display = "none";

            }

        }

    });

}



/* =========================================================
   5. PROJECT MORE DETAILS
========================================================= */

const detailsButtons =
    document.querySelectorAll(".details-btn");


for (const button of detailsButtons) {

    button.addEventListener("click", function () {

        const projectCard =
            button.closest(".project-card");


        const projectDetails =
            projectCard.querySelector(".project-details");


        projectDetails.classList.toggle("show");


        const detailsVisible =
            projectDetails.classList.contains("show");


        if (detailsVisible) {

            button.innerText = "Hide Details";

        }
        else {

            button.innerText = "More Details";

        }

    });

}



/* =========================================================
   6. ABOUT ME SHOW / HIDE
========================================================= */

const aboutButton =
    document.getElementById("about-btn");

const aboutSection =
    document.querySelector(".about");


aboutButton.addEventListener("click", function () {

    aboutSection.classList.toggle("hidden");


    const isHidden =
        aboutSection.classList.contains("hidden");


    if (isHidden) {

        aboutButton.innerText = "Show About Me";

    }
    else {

        aboutButton.innerText = "Hide About Me";

    }

});



/* =========================================================
   7. CONTACT FORM
========================================================= */


/* =========================================================
   8. CLOSE MOBILE MENU WHEN WINDOW RESIZES
========================================================= */

window.addEventListener("resize", function () {

    if (window.innerWidth > 768) {

        navLinks.classList.remove("active");

        menuToggle.innerText = "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});



/* =========================================================
   9. SET INITIAL ACTIVE NAVIGATION
========================================================= */

function setInitialActiveNavigation() {

    const firstLink =
        document.querySelector(".nav-links a");


    if (firstLink) {

        firstLink.classList.add("active");

    }

}


setInitialActiveNavigation();