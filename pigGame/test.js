// const score = [0, 3, 5];

// let activePlayer = 2;
// console.log((score[activePlayer] = 0));
// console.log(score);
//score[activePlayer] += 12;
//console.log(score);

const testArr = [1, 2, 3];
//console.log(testArr);
testArr[1] += "this is a new assignment";
//console.log(testArr);

//array indexing has used in this method

let activePlayer = 4;

activePlayer = activePlayer === 4 ? 3 : 4;

// if (activePlayer === 0) {
//   activePlayer = 8;
// } else {
//   activePlayer = 1;
// }

//create random number
//const randomNumber = Math.floor(Math.random() * 6 + 1);

//get access to variable value out of function

let holdCurrentScore = 0;

function testFunction() {
  randomNumber = Math.floor(Math.random() * 6 + 1);
  holdCurrentScore += randomNumber;

  console.log("click");
}

// Accessing holdCurrentScore outside the event listener function
console.log("Initial score:", holdCurrentScore);

// Simulate a button click
testFunction();

// After the simulated click
console.log("Updated score:", holdCurrentScore);
