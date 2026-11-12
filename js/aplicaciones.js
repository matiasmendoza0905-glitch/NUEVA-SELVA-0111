
/* ==========================================
   ESENCIA SELVÁTICA
   APLICACIONES - JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* BOTÓN VOLVER ARRIBA */

    const botonVolver = document.getElementById("btnVolver");

    if (botonVolver) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {
                botonVolver.classList.add("visible");
            } else {
                botonVolver.classList.remove("visible");
            }

        });

        botonVolver.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    /* ANIMACIONES DE LOS ELEMENTOS */

    const elementos = document.querySelectorAll(
        ".app-card, " +
        ".palette-item, " +
        ".intro-layout, " +
        ".gallery-heading, " +
        ".palette-heading, " +
        ".closing-content"
    );

    elementos.forEach((elemento) => {
        elemento.classList.add("reveal");
    });

    /* DETECTAR ELEMENTOS VISIBLES */

    if ("IntersectionObserver" in window) {

        const observador = new IntersectionObserver(
            (entradas, observer) => {

                entradas.forEach((entrada) => {

                    if (entrada.isIntersecting) {

                        entrada.target.classList.add("show");

                        observer.unobserve(entrada.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        elementos.forEach((elemento) => {
            observador.observe(elemento);
        });

    } else {

        elementos.forEach((elemento) => {
            elemento.classList.add("show");
        });

    }

});
