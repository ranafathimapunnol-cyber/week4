
// 1
let numbers = [5, 2, 9, 1, 10];

numbers.sort((a, b) => a - b);
console.log(numbers);



// 2
let number = [5, 2, 9, 1, 10];

number.sort((a, b) => b - a);
console.log(number);



// 3
let names = ["banana", "Apple", "cherry"];

names.sort((a, b) => a.localeCompare(b));
console.log(names);



// 4
let users = [
  { name: "Ravi", age: 25 },
  { name: "Asha", age: 20 },
  { name: "Neha", age: 30 }
];

users.sort((a, b) => a.age - b.age);
console.log(users)

// 5
let result = users
  .filter(user => user.age >= 21)
  .sort((a, b) => a.age - b.age)
  .map(user => user.name);

console.log(result);


// 6
let original = [3, 1, 2];
let sorted = original.sort((a, b) => a - b);

console.log(original); 








