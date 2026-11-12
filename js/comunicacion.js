document.addEventListener("DOMContentLoaded", () => {

    // Elementos que tendrán animación
    const elementos = document.querySelectorAll(
        ".communication-card, .slogan-content"
    );

    // Activar animación solamente cuando JavaScript funciona
    elementos.forEach((elemento) => {
        elemento.classList.add("reveal-ready");
    });

    // Mostrar elementos al entrar en pantalla
    if ("IntersectionObserver" in window) {

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
                threshold: 0.15
            }
        );

        elementos.forEach((elemento) => {
            observador.observe(elemento);
        });

    } else {

        elementos.forEach((elemento) => {
            elemento.classList.add("visible");
        });

    }

});