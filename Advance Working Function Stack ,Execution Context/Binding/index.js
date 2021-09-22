// <--------------------------------------------6.9----------------------------------------------->
//losing this
//Function Binding
// When passing object methods as callbacks, for instance to setTimeout, there’s a known problem: "losing this".
//this of all callbacks are forgotten  
// "use strict"
let user = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };
  
//   setTimeout(user.sayHi, 1000);     //prints undefined because sayhi forgot its 'this' 
// //as  method is passed somewhere else seperated from object
// //setTimenout sets this==windows(in browser ) (for Nodejs it becomes a timer object)

//             //SOLUTIONS TO SAVE THIS
//     // 1.       Wrapper function 

// setTimeout(function(){
//     user.sayHi();   //Hello , John    //implicit binding   "Object.call"; (here object user is saved)
// },1000);

//     //2.  Bind

// function rando(){
//     console.log(this);
// }

// let randoBind=rando.bind(user);
// randoBind();        //this== user         //explicit binding
// rando();             //this == window

//we are to predefine some arguments;

function change(name ,age){
    console.log(name+" "+age);
}
let bind1=change.bind(user,user.firstName);
let bind2=change.bind(this);
let bind3=change.bind(this,"lakshay","20");

bind1("abc",21);           //here abc has no effect , one of the arguments is predefined
bind2("ut",24);
bind3();

//Explicit binding with .bind .call and .apply  has higher priority