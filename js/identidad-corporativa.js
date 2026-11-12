
document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // ANIMACIONES AL DESPLAZARSE
    // =========================

    const elementos = document.querySelectorAll(
        ".contenedor-imagen, .tarjeta-identidad, .identity-message, .footer-brand"
    );

    const movimientoReducido = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (movimientoReducido || !("IntersectionObserver" in window)) {

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
                threshold: 0.15
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
    // EFECTOS DE PERSONALIDAD
    // =========================

    const etiquetas = document.querySelectorAll(
        ".personalidad-etiquetas span"
    );

    etiquetas.forEach(function (etiqueta) {

        etiqueta.setAttribute("tabindex", "0");

    });

});
