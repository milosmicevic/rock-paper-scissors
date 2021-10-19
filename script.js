const playerScoreTag = document.querySelector(".player-score");
const computerScoreTag = document.querySelector(".computer-score");
const message = document.querySelector(".message");
const options = document.querySelectorAll(".option");
const dialogContainer = document.querySelector(".dialog-container");
const dialogBox = document.querySelector(".dialog-box");
const dialogText = document.querySelector(".result-text");
const restartButton = document.querySelector(".restart-button");

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

function computerPlay() {
  const possibleSelection = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);

  return possibleSelection[randomNumber];
}

function checkScore() {
  if (playerScore === 5) {
    dialogText.innerText = "🥳 Congratulations! You won! 🥳";
    dialogContainer.style.display = "block";
    dialogBox.style.backgroundColor = "#2ed573";
  } else if (computerScore === 5) {
    dialogText.innerText = "😭 Unfortunately, You lost! 😭";
    dialogContainer.style.display = "block";
    dialogBox.style.backgroundColor = "#ff4757";
  } else return;
}

function playRound() {
  computerSelection = computerPlay();

  if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Rock")
  ) {
    message.innerText = `You Lose! ${computerSelection} beats ${playerSelection}. ❌`;
    computerScore++;
    computerScoreTag.innerText = computerScore;
  } else if (playerSelection === computerSelection) {
    message.innerText = "It's Tie! You both choose the same 😬";
  } else {
    message.innerText = `You Win! ${playerSelection} beats ${computerSelection}. 🏆`;
    playerScore++;
    playerScoreTag.innerText = playerScore;
  }

  checkScore();
}

function restartGame() {
  playerScore = 0;
  playerScoreTag.innerText = playerScore;
  computerScore = 0;
  computerScoreTag.innerText = computerScore;
  message.innerText = "Choose wisely! 🦉";
  dialogContainer.style.display = "none";
}

restartButton.addEventListener("click", restartGame);

options.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.getAttribute("data-value");
    playRound();
  });
});
