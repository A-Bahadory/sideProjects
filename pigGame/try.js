const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const diceImg = document.querySelector(".dice");
const playerOneScore = document.querySelector("#score--0");
const currentScore = document.querySelector("#current--0");
let holdPoint = 0;
let randomNumber;
let totalCurrentPoint = 0;

rollDiceBtn.addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 6 + 1);
  totalCurrentPoint += randomNumber;
  if (randomNumber === 1) {
    totalCurrentPoint = 0;
    // playerOneScore.textContent = totalCurrentPoint;
    currentScore.textContent = totalCurrentPoint;
    diceImg.src = "/07-Pig-Game/starter/dice-1.png";
  } else if (randomNumber === 2) {
    diceImg.src = "/07-Pig-Game/starter/dice-2.png";
  } else if (randomNumber === 3) {
    diceImg.src = "/07-Pig-Game/starter/dice-3.png";
  } else if (randomNumber === 4) {
    diceImg.src = "/07-Pig-Game/starter/dice-4.png";
  } else if (randomNumber === 5) {
    diceImg.src = "/07-Pig-Game/starter/dice-5.png";
  } else if (randomNumber === 6) {
    diceImg.src = "/07-Pig-Game/starter/dice-6.png";
  }
  if (randomNumber) {
    currentScore.textContent = totalCurrentPoint;
  }
});

holdBtn.addEventListener("click", function () {
  //   randomNumber = true;
  //   switch (holdBtn) {
  //     case true:
  //       holdPoint += randomNumber;
  //       playerOneScore.textContent = holdPoint;
  //       document.querySelector('.player--1').style.backgroundColor = 'yellow';
  //       break;
  //   }
  if (randomNumber) {
    holdPoint += randomNumber;
    playerOneScore.textContent = holdPoint;
  }
  //holdPoint += randomNumber;
  playerOneScore.textContent = totalCurrentPoint;
  currentScore.textContent = 0;
  console.log(
    (document.querySelector(".player--1").style.backgroundColor = "yellow")
  );
});
