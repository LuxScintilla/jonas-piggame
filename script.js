"use strict";

const newGame = document.querySelector(".new-game");

const rollDice = document.querySelector(".roll-dice");
const diceContainer = document.querySelector(".dice-container");

const holdButton = document.querySelector(".hold");

const sectionPlayerOne = document.querySelector(".section-wrap-player1");
const sectionPlayerTwo = document.querySelector(".section-wrap-player2");
const currentScoreP1 = document.querySelector(".current-score-player1");
const currentScoreP2 = document.querySelector(".current-score-player2");

const player1TotalScore = document.querySelector(".player1-score");
const player2TotalScore = document.querySelector(".player2-score");

let randomNumber;

let currentScore1 = 0;
let currentScore2 = 0;

let totalScore1 = 0;
let totalScore2 = 0;

newGame.addEventListener("click", function () {
  sectionPlayerOne.style.backgroundColor = "#ffffff";
  sectionPlayerTwo.style.backgroundColor = "#ffffff";

  sectionPlayerOne.classList.add("active");
  sectionPlayerTwo.classList.remove("active");

  totalScore1 = 0;
  totalScore2 = 0;
  player1TotalScore.textContent = totalScore1;
  player2TotalScore.textContent = totalScore2;

  currentScore1 = 0;
  currentScore2 = 0;
  currentScoreP1.textContent = currentScore1;
  currentScoreP2.textContent = currentScore2;

  clearDots();
  diceContainer.style.visibility = "hidden";
});

rollDice.addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 6 + 1);
  createDice(randomNumber);

  addDiceRoll();
});

holdButton.addEventListener("click", function () {
  if (totalScore1 >= 20 || totalScore2 >= 20) {
    openModal();
  }

  if (sectionPlayerOne.classList.contains("active")) {
    totalScore1 += currentScore1;
    player1TotalScore.textContent = totalScore1;
    currentScore1 = 0;
    currentScoreP1.textContent = currentScore1;
    changePlayer();
  } else if (sectionPlayerTwo.classList.contains("active")) {
    totalScore2 += currentScore2;
    player2TotalScore.textContent = totalScore2;
    currentScore2 = 0;
    currentScoreP2.textContent = currentScore2;
    changePlayer();
  }
});

function addDiceRoll() {
  if (sectionPlayerOne.classList.contains("active")) {
    if (randomNumber !== 1) {
      currentScore1 += randomNumber;
      currentScoreP1.textContent = currentScore1;
    } else if (randomNumber === 1) {
      currentScore1 = 0;
      currentScoreP1.textContent = currentScore1;
      changePlayer();
    }
  } else if (sectionPlayerTwo.classList.contains("active")) {
    if (randomNumber !== 1) {
      currentScore2 += randomNumber;
      currentScoreP2.textContent = currentScore2;
    } else if (randomNumber === 1) {
      currentScore2 = 0;
      currentScoreP2.textContent = currentScore2;
      changePlayer();
    }
  }
}

function changePlayer() {
  if (sectionPlayerOne.classList.contains("active")) {
    sectionPlayerOne.classList.remove("active");
    sectionPlayerTwo.classList.add("active");
  } else if (!sectionPlayerOne.classList.contains("active")) {
    sectionPlayerOne.classList.add("active");
    sectionPlayerTwo.classList.remove("active");
  }
}

function createDice(number) {
  if (number === 1) {
    diceContainer.style.visibility = "visible";
    clearDots();
    document.querySelector(".dot:nth-child(7)").classList.add("dot-active");
  } else if (number === 2) {
    diceContainer.style.visibility = "visible";
    clearDots();
    document.querySelector(".dot:nth-child(3)").classList.add("dot-active");
    document.querySelector(".dot:nth-child(4)").classList.add("dot-active");
  } else if (number === 3) {
    diceContainer.style.visibility = "visible";
    clearDots();
    document.querySelector(".dot:nth-child(3)").classList.add("dot-active");
    document.querySelector(".dot:nth-child(4)").classList.add("dot-active");
    document.querySelector(".dot:nth-child(7)").classList.add("dot-active");
  } else if (number === 4) {
    diceContainer.style.visibility = "visible";
    clearDots();
    document.querySelector(".dot:nth-child(1)").classList.add("dot-active");
    document.querySelector(".dot:nth-child(3)").classList.add("dot-active");
    document.querySelector(".dot:nth-child(4)").classList.add("dot-active");
    document.querySelector(".dot:nth-child(6)").classList.add("dot-active");
  } else if (number === 5) {
    diceContainer.style.visibility = "visible";
    clearDots();
    document.querySelector(".dot:nth-child(1)").classList.add("dot-active");
    document.querySelector(".dot:nth-child(3)").classList.add("dot-active");
    document.querySelector(".dot:nth-child(4)").classList.add("dot-active");
    document.querySelector(".dot:nth-child(6)").classList.add("dot-active");
    document.querySelector(".dot:nth-child(7)").classList.add("dot-active");
  } else if (number === 6) {
    diceContainer.style.visibility = "visible";
    clearDots();
    document.querySelector(".dot:nth-child(1)").classList.add("dot-active");
    document.querySelector(".dot:nth-child(2)").classList.add("dot-active");
    document.querySelector(".dot:nth-child(3)").classList.add("dot-active");
    document.querySelector(".dot:nth-child(4)").classList.add("dot-active");
    document.querySelector(".dot:nth-child(5)").classList.add("dot-active");
    document.querySelector(".dot:nth-child(6)").classList.add("dot-active");
  }
}

function clearDots() {
  document.querySelector(".dot:nth-child(1)").classList.remove("dot-active");
  document.querySelector(".dot:nth-child(2)").classList.remove("dot-active");
  document.querySelector(".dot:nth-child(3)").classList.remove("dot-active");
  document.querySelector(".dot:nth-child(4)").classList.remove("dot-active");
  document.querySelector(".dot:nth-child(5)").classList.remove("dot-active");
  document.querySelector(".dot:nth-child(6)").classList.remove("dot-active");
  document.querySelector(".dot:nth-child(7)").classList.remove("dot-active");
}

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close-modal");

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

closeButton.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
