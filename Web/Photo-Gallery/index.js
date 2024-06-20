const BtnEl = document.getElementById("btn");
const errorMessageEl = document.getElementById("errorMessage");

function fetchImage() {
  const inputValue = document.getElementById("input").input;
  if (inputValue > 10 || inputValue < 1) {
    errorMessageEl.style.display = "block";
  }
  fetch(
    `https://api.unsplash.com/photos?per_page=${inputValue}&page=1&client_id=wkRgog46cQ47O8liWxl95LQck4eaC6o8cedE2Rl0-tw`
  ).then((res) =>
    res.json().then((data) => {
      console.log(data);
    })
  );
}

BtnEl.addEventListener("click", fetchImage);
