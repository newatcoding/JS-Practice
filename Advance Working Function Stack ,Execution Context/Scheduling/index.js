// <------------------------------------------------------6.8------------------------------------------------------------------------>
//Scheduling ste timeout and setInterval
function sayHi(){
    console.log("Delayed message");
}
let timerId=setTimeout(sayHi,1000);
clearInterval(timerId);       //to cancel

//setTImeout has better precision vs setInterval

let i = 1;
setInterval(function() {
  func(i++);
}, 100);

let j = 1;
setTimeout(function run() {
  func(j++);
  setTimeout(run, 100);
}, 100);


//https://javascript.info/settimeout-setinterval     for diagram showcase of delay and how it works
// the scheduler will invoke it only after the currently executing script is complete.
//so a 0 ms setTImenout will still only execute after script is done running

