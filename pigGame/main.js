const rollBtn = document.querySelector(".btn--roll");
const dicePic = document.querySelector(".dice");
const currentScoreEl0 = document.querySelector("#current--0");

//let randomNumber = Math.floor(Math.random() * 6 + 1);

let holdCurrentScore = 0;

rollBtn.addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 6 + 1);
  dicePic.src = `dice-${randomNumber}.png`;
  if (randomNumber !== 1) {
    console.log(randomNumber);
    holdCurrentScore += randomNumber;
    currentScoreEl0.textContent = holdCurrentScore;
  } else {
    holdCurrentScore = 0;
    currentScoreEl0.textContent = holdCurrentScore;
  }
  console.log("click");
});
