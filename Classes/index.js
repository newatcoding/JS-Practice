//-----------------------------------------------9.1-------------------------------------------------------------------
//classes basic syntax

//baiscally a Constructor
class MyClass{    //creates a new object
    //class methods
    constructor(name){   //everything inside constructor will be instance of the object (direct properrty and methods)
        this.name=name
    }
    //everything outside will be prototypal method (or methods in parent prototype in prototypal chain )
    sayHi(){
        console.log(this.name);
    }

    //getters     
    get name(){
        return this._name;
    }
    set name(value){
        if(value.length<4){
            console.log("Name too short");
            return ;
        }
        this._name=value;
    }
}

const firstObj=new MyClass("lakshay");
//important difference between old vs ES6 way of prototype
// First, a function created by class is labelled by a special internal property [[IsClassConstructor]]: true. 
// So it’s not entirely the same as creating it manually.
// Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype".
// That’s good, because if we for..in over an object, we usually don’t want its class methods.

// Classes always use strict. All code inside the class construct is automatically in strict mode.

//Neither function declaration nor function expression anr hoiested