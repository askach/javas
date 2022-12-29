// 1. Zapytaj usera ile ma subskrypcji
// 2. Sprawdz jaki ma aktualnie status - 100 - brąz, 1000 - złoty, 10000 - diament
// 3. Ile subskrypcji przybywa miesięcznie
// 4. Oblicz jaki status będzie miał w następne 12 mcy
// 5. Pytaj użytkownika aż poda liczbę - pętla while albo do while aż isnan będzie false
// 6. Dodaj obsługę przycisku anuluj + console log co prompt zwraca jak się wciśnie anuluj, parseint do innej zmiennej


var subscribersNumber = parseInt(prompt("How many subscribers do you have?"));

console.log(subscribersNumber);

while (isNaN(subscribersNumber)) {
    alert("Value not a number");
    var subscribersNumber = parseInt(prompt("How many subscribers do you have?"));
}

console.log(subscribersNumber);

// do {
//     console.log(subscribersNumber);

// } while (isNaN(subscribersNumber));

// if (isNaN(subscribersNumber)) {
//     alert("Value not a number")
// };

if (subscribersNumber >= 100 && subscribersNumber < 1000) {
    console.log('You have bronze status')
} else if (subscribersNumber >= 1000 && subscribersNumber < 10000) {
    console.log('You have gold status')
} else if (subscribersNumber >= 10000) {
    console.log('You have diamond status')
};

var subPerMonth = parseInt(prompt("How many subscribers increase monthly?"));
console.log(subPerMonth);


// if (isNaN(subPerMonth)) {
//     alert("Value not a number")
// };

while (isNaN(subPerMonth)) {
    alert("Value not a number");
    var subPerMonth = parseInt(prompt("How many subscribers increase monthly?"));
}


const subPerYear = subPerMonth * 12;
const subInNextYear = subscribersNumber + subPerYear;

if (subInNextYear >= 100 && subInNextYear < 1000) {
    console.log('You will have bronze status')
} else if (subInNextYear >= 1000 && subInNextYear < 10000) {
    console.log('You will have gold status')
} else if (subInNextYear >= 10000) {
    console.log('You will have diamond status')
};