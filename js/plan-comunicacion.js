
document.addEventListener("DOMContentLoaded", function () {

    // ==================================
    // MENÚ DE NAVEGACIÓN
    // ==================================

    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuButton && nav) {

        menuButton.addEventListener("click", function () {

            const abierto = nav.classList.toggle("nav-open");

            menuButton.setAttribute("aria-expanded", String(abierto));
            menuButton.textContent = abierto ? "✕" : "☰";

        });

        nav.querySelectorAll("a").forEach(function (enlace) {

            enlace.addEventListener("click", function () {

                nav.classList.remove("nav-open");

                menuButton.setAttribute("aria-expanded", "false");
                menuButton.textContent = "☰";

            });

        });

    }

    // ==================================
    // ANIMACIÓN DE LAS SECCIONES
    // ==================================

    const elementos = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observador = new IntersectionObserver(function (entradas, observer) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                    observer.unobserve(entrada.target);

                }

            });

        }, {
            threshold: 0.12
        });

        elementos.forEach(function (elemento) {

            observador.observe(elemento);

        });

    } else {

        elementos.forEach(function (elemento) {

            elemento.classList.add("visible");

        });

    }

    // ==================================
    // CERRAR MENÚ AL CAMBIAR DE TAMAÑO
    // ==================================

    window.addEventListener("resize", function () {

        if (window.innerWidth > 768 && nav) {

            nav.classList.remove("nav-open");

            if (menuButton) {
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.textContent = "☰";
            }

        }

    });

});
