

document.addEventListener("DOMContentLoaded", function () {

    // ACTIVAR ENLACE DE LA PÁGINA ACTUAL

    const enlaces = document.querySelectorAll(".nav a");

    const paginaActual = decodeURIComponent(
        window.location.pathname.split("/").pop()
    ).toLowerCase();

    enlaces.forEach(function (enlace) {

        const destino = decodeURIComponent(
            new URL(enlace.href).pathname.split("/").pop()
        ).toLowerCase();

        enlace.classList.remove("active");

        if (destino === paginaActual) {
            enlace.classList.add("active");
        }

    });


    // EFECTO DE ENTRADA PARA LAS TARJETAS

    const tarjetas = document.querySelectorAll(".card");

    tarjetas.forEach(function (tarjeta, indice) {

        tarjeta.style.animation = "entrada 0.7s ease both";
        tarjeta.style.animationDelay = (indice * 0.15) + "s";

    });


    // AÑO AUTOMÁTICO DEL FOOTER

    const copyright = document.querySelector(".footer-bottom p");

    if (copyright) {

        copyright.innerHTML = copyright.innerHTML.replace(
            /©\s*\d{4}/,
            "© " + new Date().getFullYear()
        );

    }

});