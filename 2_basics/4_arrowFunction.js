const user = {
    firstName: "Meet",
    lastName: "Kothari",

    sayHello : function(){
        console.log(`Hello ${this.firstName}`);
        console.log("Inner : ", this);
    }
}

// user.sayHello()
// user.firstName = "sam"
// user.sayHello()

// console.log("Outer : ", this);



// function one() {
//     let a = 100
//     console.log(this.a);
// }

// const one = () => {
//     let a = 100
//     console.log(this); // {}
//     console.log(this.a); // undefined
// }

// one()

// const add = (num1, num2) => {
//     return num1 + num2;
// }

// const add = (num1, num2) => (num1 + num2)

// if we use { } in arrow function then we have to use return keyword
// if we use ( ) in arrow then we can't use return keyword
// console.log(add(2, 4));


// const obj = () => {return {name:"Meet"}} // it will return object
// const obj = () => ({name:"Meet"}) // it will also return object

// console.log(obj());

