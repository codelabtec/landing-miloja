// Adicione interatividade aqui se necessário
console.log("Landing page carregada com sucesso!");

// Lottie Animation - Photos

    document.addEventListener('DOMContentLoaded', function() {
        const animation = lottie.loadAnimation({
            container: document.getElementById('lottie-container'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: './assets/Motion/photos-animation.json'
        });
    });

const buttonInstagram = document.querySelector(".instagram-button");
const buttonInstagramWhite = document.querySelector(".instagram-social-media-white");
const googleMapsButton = document.querySelector(".instagram-address");

//Function to open a new tab with the link of instagram

function openLink(url) {

    const newPage = window.open(url, "_blank", "noopener, noreferrer");

    if (newPage) {

        newPage.focus();

    }else {

        console.log("Algo deu errado ao abrir a página");

    }
}

// Function to open Google Maps Link

function openGoogleMapsLink(url) {

    const newPage = window.open(url, "_blank", "noopener, noreferrer");

    if (newPage) {

        newPage.focus();

    }else {

        console.log("Algo deu errado ao abrir a página");

    }
};

// Event Listeners for Instagram Buttons

googleMapsButton.addEventListener("click", function() {
    const googleMapsUrl = "https://maps.app.goo.gl/mZQNYQ7zXg9sJmSz5";
    openGoogleMapsLink(googleMapsUrl);
});

buttonInstagramWhite.addEventListener("click", function() {
    const url = "https://www.instagram.com/milojatuloja_ro"
    openLink(url);
});

buttonInstagram.addEventListener("click", function() {
    const url = "https://www.instagram.com/milojatuloja_ro";
    openLink(url);
});

//Debbuging

// console.log(buttonInstagram);
// console.log(buttonInstagramWhite);
// console.log(googleMapsButton);

