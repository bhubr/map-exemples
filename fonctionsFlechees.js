
// Fonction qui me renvoie un tableau
// composé de tous les nombres entre min et max

// Cas général pour une fonction fléchée
// - parenthèses avec paramètres
// - flèche =>
// - corps de fonction normal
const range = (min, max) => {
  const results = [];
  for (let num = min; num <= max ; num++) {
    results.push(num);
  }
  return results;
}

const addition = (num1, num2) => num1 + num2;

function double(num) {
  return num * 2;
}

const doubleArrow = num => num * 2;


console.log(range(3, 7));