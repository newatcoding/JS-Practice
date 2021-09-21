// <--------------------------------------------------------6.6 ----------------------------------------------------------->
//function objects

//function are objects and they have name property

function sayHi(){
    console.log("this is a function object");
}
console.log(sayHi.name);        //and like every object it has inbuilt properties and methods

//custom function objects;
function custom(){
    custom.count++;
}
custom.count=0;
console.log(custom.count);
custom();
console.log(custom.count);


//Named Function Expressions
//this is still a function expression nat a declaration even if we add a name to it
let hell=function func(){
    console.log("I can access the fun internally");
}
hell();
// There are two special things about the name func, that are the reasons for it:
// 
// It allows the function to reference itself internally. no prolem id hell==null is done , it will be able to access via func
// It is not visible outside of the function.


let hello=function func(){
    console.log("I can access the fun internally");
    // func();
}
hell();