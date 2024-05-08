function guessingGame() {
  const randomNo = Math.round(Math.random() * 20);
  let guess;
  let feedback;
  const message = document.querySelector("#feedback");

  // Refresh page to generate new random number
  document.querySelector(".refresh").addEventListener("click", () => {
    history.go(0);
  });

  //
  document.querySelector("#game").addEventListener("submit", (e) => {
    e.preventDefault();
    guess = parseInt(document.getElementById("guess").value);

    // Check the entered number is between 1 and 20
    if (guess < 21 && guess > 0) {
      //Compare random generated number and guess and give feedback
      if (randomNo > guess) {
        feedback = "You guessed too low.";
        message.classList.remove("winner");
        message.classList.add("error");
      } else if (randomNo < guess) {
        feedback = "You guessed too high.";
        message.classList.remove("winner");
        message.classList.add("error");
      } else {
        feedback = "You Won!";
        message.classList.add("winner");
        message.classList.remove("error");
      }
    }
    // If a number is entered out of bounds tell user to guess between 1 and 10
    else if (guess > 20 || guess < 1) {
      feedback = "Guess a number between 1 and 20";
      message.classList.add("error");
      message.classList.remove("winner");
    }
    // If a non number is entered tell user to enter a number
    else {
      feedback = "Enter a number";
      message.classList.remove("error");
      message.classList.remove("winner");
    }

    // Print feedback to screen
    document.querySelector("#feedback").innerHTML = feedback;
  });
}

guessingGame();
