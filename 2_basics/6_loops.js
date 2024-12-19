// for(let i=0; i<5; i++)
// {
//     console.log(`Outer value is ${i}`);

//     for(let j = 0; j < 5; j++)
//     {
//         console.log(`inner value is ${j} and Outer is ${i}`);
//     }
// }


// While Loop
// const myArr = ["Meet", "Kothari"]

// let index = 0;
// while (index < myArr.length) {
//     console.log(`Index : ${index}, Data : ${myArr[index]}`);
//     index += 1;
// }


// // for-of loop
// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(`Num is ${num}`);
// }


// map
// const map = new Map()

// map.set("firstname","Meet")
// map.set("lastname","Kothari")

// // console.log(map);

// for (const [key, value] of map) {
//     console.log(`${key} :- ${value}`); 
// }


// Object
// const myObj = {
//     name:"Meet",
//     "ln": "Kothari"
// }
// It will Give error because, Objects are not iterable using for-of-loop
// for (const [key, value] of myObj) {
//     console.log(`${key} :- ${value}`);
// }

// for-in loop
// const myObj = {
//     firstname:"Meet",
//     lastname: "Kothari"
// }

// for (const key in myObj) {
//    console.log(`${key} :- ${myObj[key]}`);
// }

// const arr = ['Meet', "Kothari"]

// for (const key in arr) {
//     console.log(`${key} :- ${arr[key]}`);
// }



// forEach loop
// const lang = ["C", "C++", "Py", "JS", "Java"]

// lang.forEach( (val)=>{
//     console.log(val);
// } )


// const lang = ["C", "C++", "Py", "JS", "Java"]

// function one(val){
//     console.log(val);
// }

// lang.forEach(one)


// const lang = ["C", "C++", "Py", "JS", "Java"]

// // 1 => Value, 2=> Index, 3 => Whole Arr, 4 => undefined
// lang.forEach(  (val, a , b) => {
//     console.log(val, a, b);
// } )


// const myarr = [
//     {
//         langName: "C++",
//         langExt: "cpp"
//     },
//     {
//         langName: "Pyhton",
//         langExt: "py"
//     },
//     {
//         langName: "JavaScript",
//         langExt: "js"
//     }
// ]

// myarr.forEach( (val)=> {
//     console.log(`${val.langName} :- ${val.langExt}`);
    
// } )

// Note : forEach loop not return any values....


// Filter => return values based on condition
// const myArr = [1,2,3,4,5,6,7,8,9]

// const filteredNum = myArr.filter( (num) => num%2==0 )
// console.log(filteredNum);


// //Map => returns all values
// const myArr = [1,2,3,4,5,6,7,8,9]

// const mapNum = myArr.map( (num) => num + 10 )
// console.log(mapNum);


// Chaining
// const myArr = [1,2,3,4,5,6,7,8,9]

// const mapNum = myArr
//                 .map( (num) => num * 10 )
//                 .map( (num) => num + 1 )
//                 .filter( (num) => num > 50 )
// console.log(mapNum);


// Reduce 
// const myArr = [1,2,3,4]

// const sum = myArr.reduce( (acc, currVal) => {
//     console.log(`acc :- ${acc}, currVal :- ${currVal}`);
//     return acc + currVal;
// }, 0 )

// console.log(sum);


const shoppingCart = [
    {
        course: "Javascript",
        price: 1999
    },
    {
        course: "Python",
        price: 999
    },
    {
        course: "C++",
        price: 499
    }
]

const total = shoppingCart.reduce( (acc,item) => {
    return acc + item.price;
}, 0)
console.log(total);
