document.addEventListener("DOMContentLoaded", function () {
  var faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    var question = item.querySelector(".faq-question");
    var answer = item.querySelector(".faq-answer");

    question.addEventListener("click", function () {
      var isVisible = answer.style.display === "block";
      answer.style.display = isVisible ? "none" : "block";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  showSection(1); // Show the first section on page load
});

function showSection(sectionNumber) {
  // Hide all sections
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  // Show the selected section
  const activeSection = document.getElementById(`section${sectionNumber}`);
  activeSection.classList.add("active");

  // Enable all buttons initially
  const nextButtons = document.querySelectorAll(".next-btn");
  const prevButtons = document.querySelectorAll(".prev-btn");
  nextButtons.forEach((button) => (button.disabled = false));
  prevButtons.forEach((button) => (button.disabled = false));

  // Disable "Previous" button if there is no previous section
  if (sectionNumber === 1) {
    const prevButton = activeSection.querySelector(".prev-btn");
    if (prevButton) prevButton.disabled = true;
  }

  // Disable "Next" button if there is no next section
  if (sectionNumber === sections.length) {
    const nextButton = activeSection.querySelector(".next-btn");
    if (nextButton) nextButton.disabled = true;
  }
}
