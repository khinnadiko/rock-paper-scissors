const rockButton = document.getElementById("Rock");
const paperButton = document.getElementById("Paper");
const scissorsButton = document.getElementById("Scissors");
const restartButton = document.getElementById("Restart");

let humanScore = 0;
let computerScore = 0;


rockButton.addEventListener("click", () => {
  let humanChoice = "Rock";
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  humanCount.textContent = `Your score: ${humanScore}`;
  computerCount.textContent = `Computer score: ${computerScore}`;
  logFinalResult(humanScore, computerScore); 
}) // when rock is clicked, a round is played

paperButton.addEventListener("click", () => {
  let humanChoice = "Paper";
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  humanCount.textContent = `Your score: ${humanScore}`;
  computerCount.textContent = `Computer score: ${computerScore}`;
  logFinalResult(humanScore, computerScore);
}) // when paper is clicked, a round is played

scissorsButton.addEventListener("click", () => {
  let humanChoice = "Scissors";
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  humanCount.textContent = `Your score: ${humanScore}`;
  computerCount.textContent = `Computer score: ${computerScore}`;
  logFinalResult(humanScore, computerScore);
}) // when scissors is clicked, a round is played

restartButton.addEventListener("click", () => {
  location.reload();
}) // when restart is clicked, the page is refreshed

const winnerText = document.createElement("div");
document.body.appendChild(winnerText);

const humanCount = document.createElement("div");
document.body.appendChild(humanCount);

const computerCount = document.createElement("div");
document.body.appendChild(computerCount);

const finalResult = document.createElement("div");
document.body.appendChild(finalResult);

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  let randomChoice = choices[Math.floor(Math.random() * 3)];
  return randomChoice; 
} // random generator

const buttons = document.querySelectorAll(".move");

function disableButtons() {
  buttons.forEach(button => {
    button.disabled = true;
  });
} // disables the rock paper and scissors button

function playRound(humanOption, computerOption) {
  if (humanOption === computerOption) {
    winnerText.textContent = `It\'s a tie! The computer chose ${computerOption}.`;
  }
  else if (humanOption == 'Rock' && computerOption == 'Scissors' || humanOption == 'Scissors' && computerOption == 'Paper' || humanOption == 'Paper' && computerOption == 'Rock') {
    winnerText.textContent = `You have won! The computer chose ${computerOption}. ${humanOption} beats ${computerOption}.`;
    ++humanScore;
  }
  else {
    winnerText.textContent = `You have lost! The computer chose ${computerOption}. ${computerOption} beats ${humanOption}.`;
    ++computerScore;
  }
} // displays winner, updates score

function logFinalResult(humanScore, computerScore) {
  if (humanScore == 5 || computerScore == 5) {
    if (humanScore > computerScore) {
      finalResult.textContent = 'Congrats! You have won.';
    }
    else if (computerScore > humanScore) {
      finalResult.textContent = 'You have lost. Better luck next time!';
    }
    else {
      finalResult.textContent = 'It\'s a tie!';
    }
    disableButtons();
  }
} // displays final results and disables buttons once one player reaches 5 points