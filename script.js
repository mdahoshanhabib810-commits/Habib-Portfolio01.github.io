
// =====================================
// HABIB PORTFOLIO JAVASCRIPT
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    // =================================
    // MOBILE MENU
    // =================================

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("active");

            menuBtn.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            const icon = menuBtn.querySelector("i");

            if (icon) {
                icon.classList.toggle("fa-bars", !isOpen);
                icon.classList.toggle("fa-xmark", isOpen);
            }

        });


        // CLOSE MOBILE MENU

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icon = menuBtn.querySelector("i");

                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-xmark");
                }

            });

        });

    }


    // =================================
    // TYPING ANIMATION
    // =================================

    const typing = document.getElementById("typing");

    if (typing) {

        const words = [
            "Web Developer",
            "Programmer",
            "Software Developer",
            "Creative Designer"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentWord = words[wordIndex];

            if (deleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            typing.textContent =
                currentWord.substring(0, charIndex);

            let speed = deleting ? 55 : 100;

            if (
                !deleting &&
                charIndex === currentWord.length
            ) {

                deleting = true;
                speed = 1400;

            }

            else if (
                deleting &&
                charIndex === 0
            ) {

                deleting = false;

                wordIndex =
                    (wordIndex + 1) % words.length;

                speed = 350;

            }

            setTimeout(typeEffect, speed);

        }

        typeEffect();

    }


    // =================================
    // BACK TO TOP BUTTON
    // =================================

    const topBtn = document.getElementById("topBtn");

    if (topBtn) {

        const toggleTopButton = () => {

            topBtn.classList.toggle(
                "show",
                window.scrollY > 300
            );

        };

        window.addEventListener(
            "scroll",
            toggleTopButton
        );

        toggleTopButton();

        topBtn.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    // =================================
    // CONTACT FORM
    // =================================

    const contactForm =
        document.getElementById("contactForm");

    const message =
        document.getElementById("message");

    if (contactForm && message) {

        contactForm.addEventListener("submit", event => {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const userMessage =
                document.getElementById("userMessage").value.trim();

            if (!name || !userMessage) {

                message.textContent =
                    "Please fill in all fields.";

                return;

            }

            message.textContent =
                `Thank you, ${name}! Your demo message was submitted.`;

            contactForm.reset();

        });

    }

});
