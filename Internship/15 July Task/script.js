document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      document.getElementById("errorMessage").textContent = alert(
        "Passwords do not match!"
      );
    } else {
      document.getElementById("errorMessage").textContent = "";
      alert("Registration successful!");
      // Here you can add code to send the form data to the server
    }
  });

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

// Buttons
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Counter
let counter = 0;
const slideWidth = carouselImages[0].clientWidth;

// Set initial position
carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

// Event listeners
nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  counter++;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  counter--;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
});

// Get the modal
const modal = document.getElementById("feedbackModal");

// Get the button that opens the modal
const openModalBtn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
const closeBtn = modal.querySelector(".close");

// When the user clicks on the button, open the modal
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Handle form submission
const feedbackForm = document.getElementById("feedbackForm");

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // Here you can handle form submission, e.g., send feedback to server
  // For demonstration, we'll just log the form data
  const formData = new FormData(feedbackForm);
  console.log({
    name: formData.get("name"),
    email: formData.get("email"),
    feedback: formData.get("feedback"),
  });
  // Close the modal after submission
  modal.style.display = "none";
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
function toggleDarkMode() {
  let isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
}

// On page load
document.addEventListener("DOMContentLoaded", (event) => {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
});
