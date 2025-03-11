
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