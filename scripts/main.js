//1. Losowanie liczb 0-10
//2. Zapytanie usera o wynik mnożenia dwóch wylosowanych wcześniej liczb

//3. 10 pytań z mnożenia
//4. Wyświetlenie wyniku testu - 50%+ test zdany

// Math.random(); 0 - 0.9(999);
//
// Math.round(1.5) => 2
//
// Math.floor()
// Math.ceil()

function between(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let correctAnswear = 0;
let incorrectAnswear = 0;

for (let i = 0; i < 10; i++) {
  const firstNumber = between(0, 10);
  const secondNumber = between(0, 10);
  const multResult = prompt(
    `What's the result? ${firstNumber} * ${secondNumber}`
  );

  if (firstNumber * secondNumber === parseInt(multResult)) {
    // alert("Correct result");
    correctAnswear = parseInt(correctAnswear) + 1;
  } else {
    // alert("Correct result");
    incorrectAnswear = parseInt(incorrectAnswear) + 1;
  }
}

if (correctAnswear >= 5) {
  alert("Test passed!");
} else {
  alert("Test failed");
}

console.log(correctAnswear);
console.log(incorrectAnswear);
console.log(correctAnswear / (correctAnswear + incorrectAnswear));
