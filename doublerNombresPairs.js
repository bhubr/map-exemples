const numbers = [0, 3, 4, 6, 7, 9, 10, 11];

// doubler le nombre passé en paramètre s'il est pair,
// et sinon, le renvoyer tel quel
// function doubleIfEven(num) {
//   if (num % 2 === 0) {
//     return num * 2;
//   }
//   return num;
// }


// ternaire
// const resultat = condition ? (condition2 ? val1 : val2) : valeurSiFaux;


const modifiedNumbers = numbers.map(
  num => (num % 2 === 0) ? num * 2 : num
);
console.log(modifiedNumbers);

// console.log(doubleIfEven(3));
// console.log(doubleIfEven(4));