// // Singleton => Object.create

// const sym = Symbol("address")
// // Object literals
// const obj = {
//     name:"Meet",
//     [sym]:"Surat",
//     "last name":"Kothari"
// }

// console.log(obj.name);
// // console.log(obj.last name); // Not work
// console.log(obj["last name"]);
// console.log(obj[sym]);

// obj.name="M"
// Object.freeze(obj) // Freeze the object
// obj.name="MK"

// console.log(obj);


// const user = new Object()
// console.log(user);


const obj1 = {1:'a',2:'b'}
const obj2 = {3:'a',4:'b'}

// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));
console.log(obj3.hasOwnProperty('1'));
