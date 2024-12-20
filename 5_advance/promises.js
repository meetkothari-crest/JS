// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.


// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout( function(){
//         console.log("Async Task Completed..");
//         resolve()
//     }, 1000 )
// })

// // resolve => then

// promiseOne.then(function(){
//     console.log("Promise is Consumed..");
// })



// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task..");
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("New Promise consumed..");
// })



// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({firstName:"Meet", lastName: "Kothari"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user.firstName);
// })



// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let isError = false;
//         if(!isError){
//             resolve({userName: "meetkothari", passWord: "meet123"})
//         }
//         else{
//             reject('ERROR: promiseFour')
//         }
//     }, 2000)
// }).then( (user) => {
//     console.log(user);
//     return user.userName;
// }).then( (res) => {
//     console.log(res);
// }).catch( (error) => {
//     console.log(error);
// }).finally( () => {
//     console.log("Finally always executes...");
// })



// const promiseFive = new Promise(function(resolve, reject){
//     let isError = false

//     setTimeout( () => {
//         if(!isError){
//             resolve({userName: "abc", passWord: "abc123"})
//         }
//         else{
//             reject('ERROR: promiseFive')
//         }
//     }, 2000)
// })

// async function consumePromiseFive(){
//     try {
//         const res = await promiseFive;
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()



// async function getUsers(){
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await res.json()
//         console.log(data); 
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getUsers()



// fetch('https://jsonplaceholder.typicode.com/users')
// .then( (res) => {
//     return res.json();
// })
// .then( (data) => {
//     console.log(data);
// })
// .catch( (error) => {
//     console.log(error);
// })



// const aThenable = {
//     then(onFulfilled, onRejected) {
//       onFulfilled({
//         // The thenable is fulfilled with another thenable
//         then(onFulfilled, onRejected) {
//           onFulfilled(42);
//           console.log("OnFulfilled with 42");
//         },
//       });
//     },
//   };
  
//   Promise.resolve(aThenable); // A promise fulfilled with 42

  

/*
Notes :
Promise Concurrency => Promise class offers 4 static methods to facilitate async task concurrently.

Promise.all() => Fulfills when all of the promises fulfill; rejects when any of the promises rejects.

Promise.allSettled() => Fulfills when all promises settle.

Promise.any() => Fulfills when any of the promises fulfills; rejects when all of the promises reject.

Promise.race() => Settles when any of the promises settles. In other words, fulfills when any of the promises fulfills; rejects when any of the promises rejects.

*/

// Promise.all()
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });


// Passing an array of promises that are already resolved,
// // to trigger Promise.all as soon as possible
// const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

// const p = Promise.all(resolvedPromisesArray);
// // Immediately logging the value of p
// console.log(p);

// // Using setTimeout, we can execute code after the queue is empty
// setTimeout(() => {
//   console.log("the queue is now empty");
//   console.log(p);
// });


// const mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
// const p = Promise.all(mixedPromisesArray);
// console.log(p);
// setTimeout(() => {
//   console.log("the queue is now empty");
//   console.log(p);
// });
// Logs:
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "rejected", <reason>: 44 }


// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("one"), 1000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("two"), 2000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("three"), 3000);
//   });
//   const p4 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("four"), 4000);
//   });
//   const p5 = new Promise((resolve, reject) => {
//     reject(new Error("reject"));
//   });
  
//   // Using .catch:
//   Promise.all([p1, p2, p3, p4, p5])
//     .then((values) => {
//       console.log(values);
//     })
//     .catch((error) => {
//       console.error(error.message);
//     });


// Promise.allSettled()
// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, 'foo'),
// );
// const promises = [promise1, promise2];

// Promise.allSettled(promises).then((results) =>
//   results.forEach((result) => console.log(result.status)),
// );