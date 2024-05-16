//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "What is the SI unit of force?",
    options: ["Newton", "Watt", "Joule", "Tesla"],
    correct: "Newton",
  },
  {
    id: "1",
    question:
      "Which law states that every object persists in its state of rest or uniform motion in a straight line unless it is compelled to change that state by forces impressed on it?",
    options: [
      "Newton's First Law of Motion",
      "Newton's Second Law of Motion",
      "Newton's Third Law of Motion",
      "Law of Gravitation",
    ],
    correct: "Newton's First Law of Motion",
  },
  {
    id: "2",
    question: "Which law states that force equals mass times acceleration?",
    options: [
      "Newton's First Law of Motion",
      "Newton's Second Law of Motion",
      "Newton's Third Law of Motion",
      "Law of Gravitation",
    ],
    correct: "Newton's Second Law of Motion",
  },
  {
    id: "3",
    question: "What is the unit of power?",
    options: ["Watt", "Joule", "Newton", "Tesla"],
    correct: "Watt",
  },
  {
    id: "4",
    question: "What is the SI unit of energy?",
    options: ["Joule", "Watt", "Newton", "Tesla"],
    correct: "Joule",
  },
  {
    id: "5",
    question: "What is the SI unit of electric charge?",
    options: ["Coulomb", "Ohm", "Ampere", "Volt"],
    correct: "Coulomb",
  },
  {
    id: "6",
    question: "What is the SI unit of electric current?",
    options: ["Ampere", "Ohm", "Volt", "Coulomb"],
    correct: "Ampere",
  },
  {
    id: "7",
    question: "What is the SI unit of electric potential difference?",
    options: ["Volt", "Ampere", "Ohm", "Coulomb"],
    correct: "Volt",
  },
  {
    id: "8",
    question: "What is the SI unit of resistance?",
    options: ["Ohm", "Volt", "Ampere", "Coulomb"],
    correct: "Ohm",
  },
  {
    id: "9",
    question: "What is the SI unit of electric power?",
    options: ["Watt", "Joule", "Tesla", "Newton"],
    correct: "Watt",
  },
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
