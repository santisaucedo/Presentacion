/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
//

document.addEventListener("DOMContentLoaded", function() {
    // Aseguramos que el DOM esté cargado antes de agregar el evento
    const copyButton = document.getElementById("copy-btn");
    if (copyButton) {
        copyButton.addEventListener("click", copyEmail);
    }
});

function copyEmail() {
    // Selecciona el texto del correo electrónico
    var emailText = document.getElementById("email");

    if (emailText) { // Aseguramos que el elemento con id="email" existe
        // Crear un campo temporal de entrada para seleccionar el texto
        var tempInput = document.createElement("input");
        tempInput.value = emailText.textContent || emailText.innerText;
        document.body.appendChild(tempInput);

        // Selecciona el texto del campo de entrada temporal
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // Para dispositivos móviles

        // Copia el texto al portapapeles
        document.execCommand("copy");

        // Elimina el campo temporal
        document.body.removeChild(tempInput);

        // Opcional: mensaje de confirmación
        alert("Correo copiado: " + tempInput.value);
    } else {
        console.error("El correo electrónico no se encontró.");
    }
}

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

   
});
