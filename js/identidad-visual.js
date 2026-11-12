
document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // ANIMACIONES DE ENTRADA
    // =========================

    const elementos = document.querySelectorAll(
        ".logo-section, " +
        ".propuesta-card, " +
        ".color-card, " +
        ".inspiration-gallery img, " +
        ".visual-gallery figure, " +
        ".type-box, " +
        ".visual-message"
    );

    const movimientoReducido = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
        movimientoReducido ||
        !("IntersectionObserver" in window)
    ) {

        elementos.forEach(function (elemento) {
            elemento.classList.add("visible");
        });

    } else {

        elementos.forEach(function (elemento) {
            elemento.classList.add("reveal");
        });

        const observador = new IntersectionObserver(
            function (entradas, observer) {

                entradas.forEach(function (entrada) {

                    if (entrada.isIntersecting) {

                        entrada.target.classList.add("visible");

                        observer.unobserve(entrada.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        elementos.forEach(function (elemento) {
            observador.observe(elemento);
        });

    }


    // =========================
    // MENÚ ACTIVO
    // =========================

    const enlaces = document.querySelectorAll(".nav a");

    const paginaActual = decodeURIComponent(
        window.location.pathname.split("/").pop()
    ).toLowerCase();

    enlaces.forEach(function (enlace) {

        const destino = decodeURIComponent(
            enlace.getAttribute("href").split("/").pop()
        ).toLowerCase();

        if (destino === paginaActual) {

            enlace.classList.add("active");

            enlace.setAttribute("aria-current", "page");

        } else {

            enlace.classList.remove("active");

            enlace.removeAttribute("aria-current");

        }

    });


    // =========================
    // COMPROBAR IMÁGENES
    // =========================

    const imagenes = document.querySelectorAll("img");

    imagenes.forEach(function (imagen) {

        imagen.addEventListener("error", function () {

            console.warn(
                "No se pudo cargar la imagen:",
                imagen.getAttribute("src")
            );

        });

    });


    // =========================
    // ANIMACIÓN DE HOJAS
    // =========================

    const hojas = document.querySelectorAll(".floating-leaf");

    if (!movimientoReducido) {

        hojas.forEach(function (hoja, indice) {

            hoja.style.animationDelay = (indice * 0.8) + "s";

        });

    }

});
