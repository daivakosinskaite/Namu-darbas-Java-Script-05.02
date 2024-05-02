const nuotraukuGalerija = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg", 
    "images/9.jpg",
    "images/10.jpg"
];
const showButton = document.getElementById('showButton');
const gallery = document.getElementById('gallery');

showButton.addEventListener('click', () => {
    if (showButton.textContent === "Rodyti") {
        showButton.textContent = "Maišyti";
        gallery.classList.remove("hidden");
        maisytiNuotraukas();
    } else {
        showButton.textContent = "Rodyti";
        gallery.classList.add("hidden");
    }
});

function maisytiNuotraukas() {
    gallery.innerHTML = "";
    const shuffledPhotos = shuffleArray([...nuotraukuGalerija]);
    shuffledPhotos.forEach(photo => {
        const img = document.createElement("img");
        img.src = photo;
        img.addEventListener('click', (event) => { 
            event.target.src = "images/default.jpg"; 
        });
        gallery.appendChild(img);
    });
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
