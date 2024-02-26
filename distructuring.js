// simple process
const num = [23, 1, 34, 45, 65];
// const a = num[0];
// const b = num[1];
// const c = num[2];
// console.log(a);
// console.log(b);
// console.log(c);

// distructuring
// const [a, b, c] = num;
// console.log(a, b, c);

// distructuring and spreadArray
const [a, b, ...c] = num;
console.log(a, b, c);

