let userScore = 0;
let computerScore = 0;
let userS = document.querySelector("#userScore");
let computerS = document.querySelector("#computerScore");
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
  
    userScore++;
    userS.innerText = userScore;
    msg.innerText = `You Win ! ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
  } else {
   
    computerScore++;
    computerS.innerText = computerScore;
    msg.innerText = `You Lose ! ${computerChoice} beats ${userChoice} . Play again`;
    msg.style.backgroundColor = "red";
  }
};

const gamDraw = () => {
  msg.innerText = "Opps ! Game was Draw";
  msg.style.backgroundColor = "blue";
};

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randomValue = Math.floor(Math.random() * 3);
  return option[randomValue];
};

const playGame = (userChoice) => {
  console.log("user choice is ", userChoice);
  //generating Computer choice//

  const computerChoice = genCompChoice();
  console.log("coputerChoice is ", computerChoice);

  if (userChoice === computerChoice) {
    gamDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = computerChoice === "scissors" ? false : true;
    } else {
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
