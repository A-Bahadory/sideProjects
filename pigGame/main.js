// const rollBtn = document.querySelector(".btn--roll");
// const dicePic = document.querySelector(".dice");
// const currentScoreEl0 = document.querySelector("#current--0");

//let randomNumber = Math.floor(Math.random() * 6 + 1);

// let holdCurrentScore = 0;

// rollBtn.addEventListener("click", function () {
//   let randomNumber = Math.floor(Math.random() * 6 + 1);
//   dicePic.src = `dice-${randomNumber}.png`;
//   if (randomNumber !== 1) {
//     console.log(randomNumber, "random number");
//     holdCurrentScore += randomNumber;
//     currentScoreEl0.textContent = holdCurrentScore;
//   } else {
//     holdCurrentScore = 0;
//     currentScoreEl0.textContent = holdCurrentScore;
//   }
//   console.log("click");
// });

//Query Elements
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//changing textContent and classes
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

//Keeping score and other data which created in JS
let currentScore = 0;

//Rolling Dice functionality
btnRoll.addEventListener("click", function () {
  //Generate random number
  //The Math.trunc() static method returns the integer part of a number by removing any fractional digits.
  const dice = Math.trunc(Math.random() * 6) + 1;

  //Display Dice picture
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  // check for rolled dice not equal to 1
  if (dice !== 1) {
    // we add dice to the currentScore
    // currentScore = currentScore + dice
    currentScore += dice;
    current0El.textContent = currentScore;
    console.log(currentScore);
  } else {
    // Switch to the next player
  }
});
