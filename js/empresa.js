
document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // ANIMACIÓN DE ELEMENTOS
    // =========================

    const elementos = document.querySelectorAll(
        ".empresa-imagen, .split, .card, .section-heading, .footer-brand"
    );

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


    // =========================
    // ENLACE ACTIVO
    // =========================

    const enlaces = document.querySelectorAll(".nav a");

    const paginaActual = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    enlaces.forEach(function (enlace) {

        const destino = enlace.getAttribute("href")
            .split("/")
            .pop()
            .toLowerCase();

        if (destino === paginaActual) {
            enlace.classList.add("active");
        }

    });


    // =========================
    // EFECTO DE IMÁGENES
    // =========================

    const imagenes = document.querySelectorAll(
        ".empresa-imagen img, .card img"
    );

    imagenes.forEach(function (imagen) {

        imagen.addEventListener("error", function () {
            console.warn(
                "No se pudo cargar la imagen: " + imagen.src
            );
        });

    });

});
