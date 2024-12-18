// const date = new Date() 

// console.log(date);
// console.log(date.toString());
// console.log(date.toISOString());
// console.log(date.toUTCString());
// console.log();

// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log();

// console.log(date.toTimeString());
// console.log(date.toLocaleTimeString());
// console.log();

// console.log(date.toJSON());

// const date1 = new Date(2004,5,5)
// const date1 = new Date(2004,5,5,13,6)
// const date1 = new Date("2004-06-05")
// const date1 = new Date("06-05-2004")
// console.log(date1.toDateString());
// console.log(date1.toLocaleString());

// console.log(Date.now()); // return ms
// console.log(date1.getTime()); // return ms

// const date2 = new Date() // date 
// const date3 = Date.now() // ms
// console.log(date2);
// console.log(date3);

const date = new Date()

date.toLocaleString('default', {
    weekday:"narrow"
})
console.log(date);

