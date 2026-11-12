document.addEventListener("DOMContentLoaded", () => {

    const elementos = document.querySelectorAll(
        ".intro-manual, .card, .color-item, .gallery-item, .info-box, .final-message"
    );

    if (!("IntersectionObserver" in window)) {
        return;
    }

    elementos.forEach((elemento) => {
        elemento.classList.add("reveal-ready");
    });

    const observador = new IntersectionObserver(
        (entradas, observer) => {

            entradas.forEach((entrada) => {

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

    elementos.forEach((elemento) => {
        observador.observe(elemento);
    });

});