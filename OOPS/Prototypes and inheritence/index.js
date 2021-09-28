//inheritence
// base/super/parent class   (to be inherited)       
//derived/sub/child (to inherit )
// Types of Inheritance 
// Classical Vs Prototypical Inheritence

let x={}
console.log(x);
// x  is linked to another object  lets call it prototype
//all object created , directly or indirectly inherits from base object

//to get prototype of an object
console.log(Object.getPrototypeOf(x));
let y={};
console.log(Object.getPrototypeOf(x)===Object.getPrototypeOf(y));     

//prototype is just an object in memory 
//every objct has  a prototype except root object 
//when we try to find a method in our object environment , if not found , it moves up in prototypal chain to find it 
// like lexical environment, until it hits the end,    actually scope chaining supports prototypal chain

//Multi- Level Inheritance

let myArray = [];
console.log(myArray);

function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('draw');
    }
}
//object created by a given constructor will have a same prototype
const circle=new Circle(10);
console.log(circle); //circle inherits from Circle constructor and cunstouctor inherits from baseObject, helce multilevel Inheritence