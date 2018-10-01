const pirates = [
  {
    name: 'Jack Sparrow',
    age: 35
  },
  {
    name: 'Will Turner',
    age: 22
  },
  {
    name: 'Elizabeth Turner',
    age: 21
  }
];

// renvoyer, pour chaque pirate, une chaine
// NAME a AGE ans

function showNameAndAgeForOne(person) {
  return person.name + ' a ' + person.age + ' ans';
}

// console.log(showNameAndAgeForOne({
//   name: 'Joe', age: 50
// }))

// function showPiratesNameAndAge(items) {
//   return items.map(showNameAndAgeForOne);
// }

// function showPiratesNameAndAge(items) {
//   return items.map(function (item) {
//     return item.name + ' a ' + item.age + ' ans';
//   });
// }

const showPiratesNameAndAge = items => items.map(
  item => item.name + ' a ' + item.age + ' ans'
);

console.log(pirates);
console.log(showPiratesNameAndAge(pirates));