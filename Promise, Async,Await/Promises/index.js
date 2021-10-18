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

//bigger example
//fetch returns a promise which is called a response
// fetch('/article/promise-chaining/user.json')
//   // Load it as json
//   .then(response => response.json())
//   // Make a request to GitHub
//   .then(user => fetch(`https://api.github.com/users/${user.name}`))
//   // Load the response as json
//   .then(response => response.json())
//   // Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
//   .then(githubUser => {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => img.remove(), 3000); // (*)
//   });


// <-------------------------------------------------------------------11.4------------------------------------------------------------->
        //Error Handling

  //Implicit try catch if any exception happens .catch() takes it
  // new Promise(function(res,rej){
  //   throw new Error("Woops");
  // }).catch(alert);

  // //rethrowing
  // new Promise(function(res,rej){
  //   throw new Error("Woops");
  // }).catch(alert).then(()=>{
  //     console.log("coninuing with our work")
  // })

  // <-------------------------------------------------------------------11.5------------------------------------------------------------->
              //Promise API

  //--> Promise.all

  // let promise = Promise.all([...promises]);
  //above code is much better and faster than using a loop to run all promises

  Promise.all([ new Promise(res => setTimeout(()=>res(1),3000)),
                new Promise(res => setTimeout(()=>res(2),2000)),
                new Promise(res => setTimeout(()=>res(3),1000))]).then(console.log);
//better that using loop and the doing all promises

//if any one promise is rejected in promise.all the all are rejected


//--> Promise.allSettled
//if any one request is failed it just gives the rest

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { // (*)
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        console.log(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        console.log(`${urls[num]}: ${result.reason}`);
      }
    });
  });

  
  //--> promise.race
// waits for the first promise to settle, and its result/error becomes the outcome.
//  basically it is a race , whoever gives fastest settled answer wins
//it will give first settled answer (all error will be left alone)
//
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve("1 won"), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve("2 won"), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve("3 won"), 3000))
]).then(console.log); // 1


//--> promise.any
//same as promise.race but waits for first fullfilled promise 
//If all of the given promises are rejected, AggregateError becomes the error of Promise.any.
// Promise.any([
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then(console.log); // 1


//there is also promise.reject or promise.resolve && promise.reject