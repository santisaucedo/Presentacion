document.addEventListener("DOMContentLoaded", function () {

    const copyButton = document.getElementById("copy-btn");
    if (copyButton) {
        copyButton.addEventListener("click", copyEmail);
    }

  
    const styleLink = document.getElementById("theme-style");
    const toggleButton = document.getElementById("toggle-style");

    toggleButton.addEventListener("click", function () {
      
        if (styleLink.getAttribute("href") === "css/styles.css") {
            styleLink.setAttribute("href", "css/styles2.css");
            
            window.location.href = "index2.html";
        } else {
            styleLink.setAttribute("href", "css/styles.css");
         
            window.location.href = "index.html";
        }
    });

    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollY + window.innerHeight > sectionTop + 50 && scrollY < sectionTop + sectionHeight) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});


// Función para copiar el correo electrónico
function copyEmail() {
    const emailText = document.getElementById("email");
    if (emailText) {
        const tempInput = document.createElement("input");
        tempInput.value = emailText.textContent || emailText.innerText;
        document.body.appendChild(tempInput);
        tempInput.select();
        tempInput.setSelectionRange(0, 99999);
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        alert("Correo copiado: " + tempInput.value);
    } else {
        console.error("El correo electrónico no se encontró.");
    }
}
