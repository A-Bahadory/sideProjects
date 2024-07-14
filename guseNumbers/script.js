"use strict";
const qSelector = function (className, text) {
  return (document.querySelector(className).textContent = text);
};
const style = function (className, color) {
  return (document.querySelector(className).style.backgroundColor = color);
};
const message = function (message) {
  document.querySelector(".message").textContent = message;
};

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    qSelector(".message", "No number");
    //when player win the game
  } else if (guess === secretNumber) {
    qSelector(".number", secretNumber);
    qSelector(".score", score);
    qSelector(".message", "Correct Number");
    style("body", "green");
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      qSelector(".highscore", highScore);
    }
    //when guess number is not equal
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message(guess > secretNumber ? "Too high" : "Too low");
      score--;
      qSelector(".score", score);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  style("body", "#222");
  qSelector(".score", score);
  qSelector(".number", "?");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  qSelector(".message", "Start guessing...");
});
