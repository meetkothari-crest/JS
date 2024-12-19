// Immediately invoked function expressions

// // Normal Function
// function one(){
//     console.log("One Called...");
// }
// one()

// // IIFE => ()() // First () => Function definition, Second () => For execution of function

// (function one(){
//     console.log("One called...(1)");
// })()

// IIFE use for remove Global scope variable/declaration pollution and invoke function

// (function one(){
//     console.log("One called...(2)");
// })();

// // If we use IIFE below one IIFE then we have to use ; at the end of ()

// ( () => {
//     console.log("two");
// })()


// console.log(( (num1, num2) => {
//     return num1+num2;
// })(4,5));

// const sum = ( (num1, num2) => {
//         return num1+num2;
//     })(4,5);
// console.log(sum);



// Nullish coalescing operator (??) : null , undefined

// let val;
// // val = 5 ?? 10
// // val = null ?? 10 // val = 10
// val = undefined ?? 15

// console.log(val);

// Terniary operator => condition ? true : false

// console.log("Meet"); 
// console.log("Meet");
// // New Line after each console.log

// process.stdout.write("Hello")
// process.stdout.write("Hello")
// // Same Line