const images = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000"
];

let currentIndex = 0;
const slideImage = document.getElementById("slideImage");
const dots = document.querySelectorAll(".dot");
const catImage = document.getElementById("catImage");

/* Slider Functions */
function updateSlider() {
    slideImage.src = images[currentIndex];

    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
}

function goToSlide(index) {
    currentIndex = index;
    updateSlider();
}

/* Auto Slide every 3 sec */
setInterval(nextSlide, 3000);

/* Cat API */
async function getCat() {
    try {
        catImage.style.opacity = "0.5";

        let response = await fetch("https://api.thecatapi.com/v1/images/search");
        let data = await response.json();

        catImage.src = data[0].url;
        catImage.onload = () => {
            catImage.style.opacity = "1";
        };
    } 
    catch (error) {
        alert("Failed to load cat image 😿");
        catImage.style.opacity = "1";
    }
}

/* Initial load */
updateSlider();