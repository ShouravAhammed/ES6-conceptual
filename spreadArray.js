// for loop array push and and new array
const numbers = [23, 345, 45, 45, 12, 234, 456];
const numResult = numbers;
console.log('numbers', numbers);

const number1 = [];
for (const num of numbers) {
    number1.push(num);
}
number1.push(200, 300, 500);
console.log(number1);


// spreadArray 
const spreadNum = [...numbers];
console.log(spreadNum);
