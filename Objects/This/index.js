
/*  ---------------------------------------------------- 4.4 ---------------------------------------------------------------------- */
//THIS
//Note: 2 types of this Implicit and Explicit(Explicit having higher priority) 

//Q: when  is  function called a method?
//ans: when that function is a property of an Object, This is a method of a object
// "use strict"

let user={
  name:"a",
  ano(){
    console.log(user.name);     //user.name is bad because if we assign new name to the object then user.name will give error
  },
  ano1(){
    console.log(this.name);      //here this refers to object you are in
  }
}
user.sayHi=function(){
  console.log("This function is a property of object 'user'., method name is syHi");
}
user.ano();

//This is not Bound

let admin={
  name:"admin"
}

function variableThis(){
  console.log(this.name);      //here this will refer to different objects depending on where it is placed
  console.log(this);
}
variableThis();    //this==undefined       in strict mode , in non strict mode this==global object  aka window
admin.f=variableThis;        //this now refers to admin
user.f=variableThis;      //this now refers to user

user.f();  
admin.f();

//NOTE: value of 'this' is evaluated at call-time/runtime and does not depend on where method was declared

//NOTE: Arrow Functions Have no this
// Arrow functions are special: they don’t have their “own” this.
//  If we reference this from such a function, it’s taken from the outer “normal” function.

let userThis = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  }
};

// userThis.sayHi(); // Ilya
"use strict"
//Examlple 1
function makeUser() {
  // let obj={
  //   name: "John",
  //   ref: this              //still here this is undefined
  // };
  // return obj;
  return {
    name: "John",
    ref: this
  };

}

let userProblem = makeUser();
console.log(userProblem);
console.log( userProblem.ref.name ); 