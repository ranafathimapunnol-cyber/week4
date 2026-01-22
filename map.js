// 1
let nums = [1, 2, 3];

let doubled = nums.map(n => n * 2);
console.log(doubled); 

// 2
let marks = [35, 78, 90, 22];

let pass = marks.filter(m => m >= 40);
console.log(pass); 

// 3
let salaries = [10000, 20000, 30000];

let total = salaries.reduce((sum, s) => sum + s, 0);
console.log(total); 



