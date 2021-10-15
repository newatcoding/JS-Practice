// <<<<<<---------------------------------------------------------11.2---------------------------------------------------->>>
//Promises
// A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. 
// In terms of our analogy: this is the “subscription list”. The “producing code” takes whatever time it needs to produce the promised result,
//  and the “promise” makes that result available to all of the subscribed code when it’s ready.

//function new Promise // executor

// let promise = new Promise(function(resolve, reject) {
//     // executor (the producing code, "singer")
//     setTimeout(()=>resolve("done"),100);
//     setTimeout(() => {
//         reject(new Error("Incomplete"))
//     }, 1000);
// });

// //resolve and reject are Callbacks provided by JS themselves
// //resolve(value) ,, reject(error)
// //state of promise     Pending , fulfilled and rejected

// // A Promise object serves as a link between the executor (the “producing code” or “singer”) and the consuming functions (the “fans”), 
// // which will receive the result or error. Consuming functions can be registered (subscribed)
// //  using methods .then, .catch and .finally.

//         //then
// promise.then(function(result){
//     console.log("function for success "+result);
// },function(err){
//     console.log("function for faliure "+err);
// })

//         //catch     
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });
// // .catch(f) is the same as promise.then(null, f)
// promise1.catch(alert);  //(only interest in error) catch == .then(null, function());

//         //finally     (always runs no matter error or not)
// //.finally(f) == .then(f,f)        (not completely equal)

// function loadScript(src) {
//     return new Promise(function(resolve, reject) {
//       let script = document.createElement('script');
//       script.src = src;
  
//       script.onload = () => resolve(script);
//       script.onerror = () => reject(new Error(`Script load error for ${src}`));
  
//       document.head.append(script);
//     });
//   }

// let promise12 = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

// promise12.then(
//   script => console.log(`${script.src} is loaded!`),
//   error => console.log(`Error: ${error.message}`)
// );

// promise12.then(script => alert('Another handler...'));




// <-------------------------------------------------------------------11.3------------------------------------------------------------->
// promise chaining

new Promise(function(resolve,reject){
    setTimeout(resolve(1),100);
}).then(function(result){
    console.log(result);
    return result*2;
}).then(function(result){
    console.log(result);
    return result*2;
}).then(function(result){
    console.log(result);
    return result*2;
}).then(function(result){
    console.log(result);
    return result*2;
});