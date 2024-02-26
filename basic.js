// primitive, single value 
let a = 10;
let b = a;
a = 12;
console.log(a);

// non primitive array and object is multiple value and reference address
const c = [45, 45, 56, 23];
const d = c;
d.push(23)
console.log(c);
console.log(d);



