// <-------------------------------------------------------------------11.8------------------------------------------------------------->
//Async n Await

//async function always returns a promise. Other values are wrapped in a resolved promise automaticallt
async function f(){
    return 1;
}
console.log(f().then(console.log));

//await only works inside async functions
//await makes JS wait until that promise settles and returns the result
async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    console.log(result); // "done!"
  }
  
  f();

  //error handling
  async function f() {

    try {
      let response = await fetch('http://no-such-url');
    } catch(err) {
      console.log(err); // TypeError: failed to fetch
    }
  }
  
  f();