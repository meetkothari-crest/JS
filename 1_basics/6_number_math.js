const num1 = 100
const num2 = new Number(100.12359)

// console.log(num1);
// console.log(num2.toString()); // we can pass radix number as an argument.
// console.log(num2.toFixed(3));
// console.log(num2.toPrecision(5));
// console.log(num2.valueOf());
// console.log(num2.toExponential(2));
// console.log(0.255e3)

// const num3 = 1000000
// console.log(num3.toLocaleString());
// console.log(num3.toLocaleString('en-US'));

// console.log(-0.2 - 0.1 + 0.3); // -5.551115123125783e-17
// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3) // false

// MATH 

// console.log(Math);
// console.log(Math.abs(-1));
// console.log(Math.round(5.4));
// console.log(Math.round(5.5));
// console.log(Math.ceil(5.2));
// console.log(Math.floor(5.2));
// console.log(Math.sqrt(4));
// console.log(Math.sin(Math.PI/2));
// console.log(Math.min(2,3,5,1));
// console.log(Math.max(2,3,5,1));

// console.log(Math.random()); // b/w 0(consider) to 1

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1))+ min);

