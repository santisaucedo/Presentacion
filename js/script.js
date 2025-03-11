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

const aba = document.querySelector('.aba');
const arri = document.querySelector('.arri');
const izq = document.querySelector('.izq');
const der = document.querySelector('.der');

const colors = [
    'red', 'blue', 'green', 'yellow', 'orange', 'violet', 'pink', 'cyan',
    'magenta', 'lime', 'teal', 'purple', 'brown', 'gold', 'silver', 'white'
];

let abaColorIndex = 0;
let arriColorIndex = 0;
let izqColorIndex = 0;
let derColorIndex = 0;

function checkCollision() {
    const abaPosition = aba.getBoundingClientRect();
    const arriPosition = arri.getBoundingClientRect();
    const izqPosition = izq.getBoundingClientRect();
    const derPosition = der.getBoundingClientRect();
    const midY = window.innerHeight / 2;

    if (abaPosition.top <= midY && abaPosition.bottom >= midY && arriPosition.top <= midY && arriPosition.bottom >= midY) {
        aba.style.backgroundColor = colors[abaColorIndex];
        arri.style.backgroundColor = colors[arriColorIndex];

        abaColorIndex = (abaColorIndex + 1) % colors.length;
        arriColorIndex = (arriColorIndex + 1) % colors.length;
    }

    if (izqPosition.top <= midY && izqPosition.bottom >= midY && derPosition.top <= midY && derPosition.bottom >= midY) {
        izq.style.backgroundColor = colors[izqColorIndex];
        der.style.backgroundColor = colors[derColorIndex];

        izqColorIndex = (izqColorIndex + 1) % colors.length;
        derColorIndex = (derColorIndex + 1) % colors.length;
    }
}

setInterval(checkCollision, 50);


function changeColorEffect() {
    const photoContainer = document.querySelector('.foto-container');
    const photo = document.querySelector('.foto');
    const currentBackgroundColor = photoContainer.style.backgroundColor;

      if (currentBackgroundColor === 'rgb(255, 255, 255)' || currentBackgroundColor === '') {
        const blackColor = '#000000';
        photoContainer.style.backgroundColor = blackColor;
        photoContainer.style.boxShadow = `0 0 20px ${blackColor}, 0 0 30px ${blackColor}, 0 0 40px ${blackColor}`;
        photo.style.boxShadow = `0 0 20px ${blackColor}, 0 0 30px ${blackColor}, 0 0 40px ${blackColor}`;
    } else {
        const whiteColor = '#FFFFFF';
        photoContainer.style.backgroundColor = whiteColor;
        photoContainer.style.boxShadow = `0 0 20px ${whiteColor}, 0 0 30px ${whiteColor}, 0 0 40px ${whiteColor}`;
        photo.style.boxShadow = `0 0 20px ${whiteColor}, 0 0 30px ${whiteColor}, 0 0 40px ${whiteColor}`;
    }
}

setInterval(changeColorEffect, 5000);

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
