
document.addEventListener("DOMContentLoaded", () => {
    const enlaces = document.querySelectorAll(".nav a");
    const paginaActual = window.location.pathname.split("/").pop();

    enlaces.forEach(enlace => {
        const destino = enlace.getAttribute("href");

        if (destino === paginaActual) {
            enlace.classList.add("active");
        }
    });
});
