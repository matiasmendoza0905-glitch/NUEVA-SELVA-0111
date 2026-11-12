/* ==========================================
   ESENCIA SELVÁTICA
   PROPUESTAS DE MEJORA
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    // 1. ACTIVAR EL MENÚ DE LA PÁGINA ACTUAL

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


    // 2. EFECTO SUAVE EN LAS TARJETAS

    const tarjetas = document.querySelectorAll(
        ".card, .action-item, .gallery-item"
    );

    tarjetas.forEach(function (tarjeta) {

        tarjeta.addEventListener("mouseenter", function () {
            tarjeta.classList.add("interactivo");
        });

        tarjeta.addEventListener("mouseleave", function () {
            tarjeta.classList.remove("interactivo");
        });

    });


    // 3. AÑO AUTOMÁTICO DEL PIE DE PÁGINA

    const copyright = document.querySelector(".footer-bottom p");

    if (copyright) {

        copyright.innerHTML = copyright.innerHTML.replace(
            /©\s*\d{4}/,
            "© " + new Date().getFullYear()
        );

    }


    // 4. VERIFICAR IMÁGENES

    document.querySelectorAll("img").forEach(function (imagen) {

        imagen.addEventListener("error", function () {

            console.warn(
                "No se pudo cargar la imagen: " + imagen.src
            );

        });

    });

});
