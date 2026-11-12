document.addEventListener("DOMContentLoaded", function () {

    const menu = document.getElementById("menu");
    const pie = document.getElementById("pie");

    // MENÚ PRINCIPAL
    if (menu) {

        menu.innerHTML = `
            <header class="header">

                <div class="header-container">

                    <a href="index.html" class="logo">
                        <img src="../imagen/1.png" alt="Logo Esencia Selvática">
                        <span>Esencia Selvática</span>
                    </a>

                    <nav class="nav">

                        <a href="index.html">Inicio</a>
                        <a href="empresa.html">Empresa</a>
                        <a href="publico.html">Público objetivo</a>
                        <a href="identidad-corporativa.html">Identidad corporativa</a>
                        <a href="identidad-visual.html">Identidad visual</a>
                        <a href="imagen-institucional.html">Imagen institucional</a>
                        <a href="aplicaciones.html">Aplicaciones</a>
                        <a href="comunicacion.html">Comunicación</a>
                        <a href="manual-identidad.html">Manual de identidad</a>
                        <a href="propuestas-mejora.html">Propuestas de mejora</a>
                        <a href="plan-comunicacion.html">Plan de comunicación</a>
                        <a href="auditoria-imagen.html">Auditoría de imagen</a>
                        <a href="informe-usuario.html">Informe de usuario</a>

                    </nav>

                </div>

            </header>
        `;

        // MARCAR PÁGINA ACTIVA
        const paginaActual = window.location.pathname.split("/").pop();

        const enlaces = menu.querySelectorAll(".nav a");

        enlaces.forEach(function (enlace) {

            const destino = enlace.getAttribute("href");

            if (destino === paginaActual) {
                enlace.classList.add("activo");
            }

        });

    }

    // PIE DE PÁGINA
    if (pie) {

        pie.innerHTML = `
            <footer class="footer">

                <div class="footer-container">

                    <div class="footer-brand">

                        <img src="../imagen/1.png"
                             alt="Logo Esencia Selvática"
                             class="footer-logo">

                        <h3>Esencia Selvática</h3>

                        <p>
                            Gotas de sabor amazónico.
                            Una identidad inspirada en la biodiversidad
                            de la selva peruana.
                        </p>

                    </div>

                    <div class="footer-section">

                        <h3>Enlaces</h3>

                        <a href="index.html">Inicio</a>
                        <a href="empresa.html">Empresa</a>
                        <a href="publico.html">Público objetivo</a>
                        <a href="aplicaciones.html">Aplicaciones</a>
                        <a href="manual-identidad.html">Manual de identidad</a>

                    </div>

                    <div class="footer-section">

                        <h3>Información</h3>

                        <a href="comunicacion.html">Comunicación</a>
                        <a href="plan-comunicacion.html">Plan de comunicación</a>
                        <a href="auditoria-imagen.html">Auditoría de imagen</a>
                        <a href="informe-usuario.html">Informe de usuario</a>

                    </div>

                </div>

                <div class="footer-bottom">
                    <p>
                        © <span id="anioActual"></span>
                        Esencia Selvática. Todos los derechos reservados.
                    </p>
                </div>

            </footer>
        `;

        const anio = document.getElementById("anioActual");

        if (anio) {
            anio.textContent = new Date().getFullYear();
        }

    }

});