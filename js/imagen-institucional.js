
document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(
        ".intro-image, .section-heading, .identity-card, .gallery-item, .institutional-message"
    );

    // Mostrar contenido progresivamente
    elementos.forEach(elemento => {
        elemento.classList.add("reveal");
    });

    const observador = new IntersectionObserver((entradas, observer) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
                observer.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.12
    });

    elementos.forEach(elemento => {
        observador.observe(elemento);
    });
});
