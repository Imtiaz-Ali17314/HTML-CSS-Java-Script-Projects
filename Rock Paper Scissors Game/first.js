let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randIndex = Math.floor(Math.random() * 3);
  return choices[randIndex];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";

    userScore++;
    userScorePara.innerText = userScore;
  } else {
    msg.innerText = `You lose.  ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";

    compScore++;
    compScorePara.innerText = compScore;
  }
};

const playGame = (userChoice) => {
  //Generate computer choce
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    // Game Draw
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      // paper , scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock , scissora
      userWin = compChoice === "rock" ? true : false;
    } else {
      // paper , rock
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
