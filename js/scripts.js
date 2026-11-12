
document.addEventListener("DOMContentLoaded", () => {
    const fecha = document.querySelectorAll(".fecha-actual");

    fecha.forEach(elemento => {
        elemento.textContent = new Date().getFullYear();
    });

    const botones = document.querySelectorAll(".btn-volver");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });
});
