//doing all work of prptotypes in class

class Circle{
    constructor(radius){
        this.radius=radius;
        this.move=function(){

        }
    }
    //instance method (specific to circle object)
    draw(){
        console.log('draw');
    }
    //static method (no longer available to circle object)
    static parse(str){
        const radius=JSON.parse(str).radius;
        return new Circle(radius);
    }
}

//here everything in constructior becomes instance of the object and everything in class ends up as method in a prototype 
const c=new Circle(1);      //new is definatey needed  or it will br Type Error
//ES6 forces 'new' operator
const c2=Circle.parse('{"radius":1}');
// The code above has same effect as that of Prototype inheritence code