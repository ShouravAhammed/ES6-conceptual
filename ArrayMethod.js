const numbers = [10, 20, 30, 40];

const sum = [...numbers];
const sums = sum.map(x => x + x);
console.log(sums);

const sum2 = sums.map(x => x + 5);
console.log(sum2);


// simple 
// let sum3 = 0
// for (const mul of numbers) {
//     sum3 = sum3 + mul;
// }
// console.log(sum3);

// reduce
const sum3 = numbers.reduce((preValue, currentValue) => preValue + currentValue, 0)
console.log(sum3);