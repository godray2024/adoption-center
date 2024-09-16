const images = document.querySelectorAll(".carousel-image");
const previousArrow = document.querySelector(".carousel-arrow.previous");
const nextArrow = document.querySelector(".carousel-arrow.next");
const animalNameDisplay = document.getElementById("animal-name");
const nameInput = document.getElementById("image-name");

let currentIndex = 0;

// Array of animal names
const animalNames = [
  "Tiger",
  "Ben",
  "Boo",
  "Jack",
  "Garfield",
  "Whiskers",
  "Mittens",
  "Guzmon",
  "Joy",
  "Milo",
  "Nala",
  "Bear",
  "Bella",
  "Scarf",
  "Cocky",
  "Luna",
  "Cookie",
  "Pookie",
];
//
// Show the first image initially
showImage(currentIndex);

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
  // Update the animal name
  animalNameDisplay.textContent = animalNames[index] || "Unknown Animal";
}

function showPreviousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

previousArrow.addEventListener("click", showPreviousImage);
nextArrow.addEventListener("click", showNextImage);

// Auto picture changes every 3 seconds
setInterval(showNextImage, 2000);

// Update animal name based on input
if (foundIndex !== -1) {
  currentIndex = foundIndex;
  showImage(currentIndex);
} else {
  alert("Animal not found!");
}
  