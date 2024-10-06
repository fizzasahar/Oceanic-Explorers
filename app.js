// for video 1
// Get references to the button, lightbox, close button, and video
var showVideoBtn1 = document.getElementById('showVideoBtn1');
var videoLightbox1 = document.getElementById('videoLightbox1');
var closeBtn1 = document.getElementById('closeBtn1');
var videoPlayer1 = document.getElementById('videoPlayer1');

// Initial state: Hide the lightbox when the page loads
videoLightbox1.style.display = 'none';

// Function to open the lightbox
showVideoBtn1.addEventListener('click', function() {
    videoLightbox1.style.display = 'flex'; // Show the lightbox
    videoPlayer1.play(); // Start playing the video
});

// Function to close the lightbox
closeBtn1.addEventListener('click', function() {
    videoLightbox1.style.display = 'none'; // Hide the lightbox
    videoPlayer1.pause(); // Pause the video
    videoPlayer1.currentTime = 0; // Reset video to the start
});

// Close lightbox if clicking outside the video area
window.addEventListener('click', function(event) {
    if (event.target === videoLightbox1) {
        videoLightbox1.style.display = 'none'; // Hide the lightbox
        videoPlayer1.pause(); // Pause the video
        videoPlayer1.currentTime = 0; // Reset video
    }
});

// for video 2
// Get references to the button, lightbox, close button, and video
var showVideoBtn2 = document.getElementById('showVideoBtn2');
var videoLightbox2 = document.getElementById('videoLightbox2');
var closeBtn2 = document.getElementById('closeBtn2');
var videoPlayer2 = document.getElementById('videoPlayer2');

// Initial state: Hide the lightbox when the page loads
videoLightbox1.style.display = 'none';

// Function to open the lightbox
showVideoBtn2.addEventListener('click', function() {
    videoLightbox2.style.display = 'flex'; // Show the lightbox
    videoPlayer2.play(); // Start playing the video
});

// Function to close the lightbox
closeBtn2.addEventListener('click', function() {
    videoLightbox2.style.display = 'none'; // Hide the lightbox
    videoPlayer2.pause(); // Pause the video
    videoPlayer2.currentTime = 0; // Reset video to the start
});

// Close lightbox if clicking outside the video area
window.addEventListener('click', function(event) {
    if (event.target === videoLightbox2) {
        videoLightbox2.style.display = 'none'; // Hide the lightbox
        videoPlayer2.pause(); // Pause the video
        videoPlayer2.currentTime = 0; // Reset video
    }
});

// for video 3
// Get references to the button, lightbox, close button, and video
var showVideoBtn3 = document.getElementById('showVideoBtn3');
var videoLightbox3 = document.getElementById('videoLightbox3');
var closeBtn3 = document.getElementById('closeBtn3');
var videoPlayer3 = document.getElementById('videoPlayer3');

// Initial state: Hide the lightbox when the page loads
videoLightbox3.style.display = 'none';

// Function to open the lightbox
showVideoBtn3.addEventListener('click', function() {
    videoLightbox3.style.display = 'flex'; // Show the lightbox
    videoPlayer3.play(); // Start playing the video
});

// Function to close the lightbox
closeBtn3.addEventListener('click', function() {
    videoLightbox3.style.display = 'none'; // Hide the lightbox
    videoPlayer3.pause(); // Pause the video
    videoPlayer3.currentTime = 0; // Reset video to the start
});

// Close lightbox if clicking outside the video area
window.addEventListener('click', function(event) {
    if (event.target === videoLightbox3) {
        videoLightbox3.style.display = 'none'; // Hide the lightbox
        videoPlayer3.pause(); // Pause the video
        videoPlayer3.currentTime = 0; // Reset video
    }
});




// Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

// Show initial slide
function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Remove active class from all indicators
    indicators.forEach(indicator => indicator.classList.remove('active'));

    // Show the current slide
    slides[index].classList.add('active');

    // Activate the corresponding indicator
    indicators[index].classList.add('active');
}

// Show next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Loop back to start
    showSlide(currentSlide);
}

// Show previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop back to end
    showSlide(currentSlide);
}

// Set the current slide when an indicator is clicked
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Event listeners for Next and Prev buttons
document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);


// Initial display
showSlide(currentSlide);

















// All span Animation
var links = document.querySelectorAll(".animateLink");
links.forEach(link => {
    link.addEventListener("click", function (event) {
        var targetImgId = this.getAttribute("data-target");
        var targetDivId = this.getAttribute("data-target-span");

        var targetImage = document.getElementById(targetImgId);
        var targetDiv = document.getElementById(targetDivId);


        targetImage.classList.remove("animate__animated", "animate__zoomIn");
        targetDiv.classList.remove("animate__animated", "animate__slideInLeft");

        setTimeout(() => {
            targetImage.classList.add("animate__animated", "animate__zoomIn");
            targetDiv.classList.add("animate__animated", "animate__slideInLeft");
        }, 10);
    });
});