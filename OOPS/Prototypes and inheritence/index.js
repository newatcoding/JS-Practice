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

//we cannot iterate over prototype beacuse they are non enumerable

let objectBase=Object.getPrototypeOf(Object.getPrototypeOf(circle));
let descriptor=Object.getOwnPropertyDescriptor(objectBase,'toString');
console.log(descriptor) ;  //here enumerable is false meaning not visible (in loops or anything)

//learn about define property in Object property Configuration

//this will be used are parent proto for all object created by this constructor
// Circle.prototype           


//Prototype vs instance method
function Circle1(radius){
    this.radius=radius;
    this.move=function(){
        console.log('move');
    }
}
const c1=new Circle1(1);      
const c2=new Circle1(2);

//2 objects have 2 copies os same function 'draw';    wastage of memory
//solutions           use  prototypical inheritance
//taking draw out of Circle and have it outside in another object to inherit from

Circle1.prototype.draw=function(){
    console.log('draw');
    
}
console.log(c1);
console.log(c2);

Circle1.prototype.toString=function(){
    return 'Circle with radius '+ this.radius;
}

////NOTE     INSTANCE MEANS IT'S OWN PROPERTY
console.log(c1.toString());
console.log(c2.toString());

//iterating over instance and prototye properties

console.log(Object.keys(c1));    //only returns instance members only

//for in loop returns all instance AND prototypal members
for(keys in c1){
    console.log(keys);
}

//don't change prototype of already existing  objects , there may be a problem in future 
Array.prototype.shuffle = function(){

};

const array=[];
