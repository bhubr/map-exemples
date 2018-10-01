// parcours de tableau avec for
// for (let i = 0 ; i < arr.length ; i++) {
//   const item = arr[i];
// }


// Je veux doubler les valeurs de numbers
const numbers = [1, 2, 5, 7];
// const doubledNumbers = [];

// for (let i = 0 ; i < numbers.length ; i++) {
//   const number = numbers[i];
//   const doubled = 2 * number;
//   doubledNumbers.push(doubled);
// }

// console.log(doubledNumbers);

function double(num) {
  return num * 2;
}

const doubledNumbers = numbers.map(double);
console.log(doubledNumbers);