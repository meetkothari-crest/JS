// console.log(null > 0);
// console.log(null == 0);
// console.log(null === 0);
// console.log(null >= 0);


// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined === 0);
// console.log(undefined >= 0);

// == => checks value
// === => checks datatype + value

// Stack & Heap Memory
// Primitive datatypes => Stack, Non-Primitive => Heap

// let a = "Meet"
// let b = a
// b = "Kothari"

// console.log(a);
// console.log(b);
// a & b have different reference

let userOne = {
    name:"One",
    age: "20"
}

let userTwo = userOne

userTwo.name = "Two"

console.log(userOne);

// Both userOne and userTwo have same reference
