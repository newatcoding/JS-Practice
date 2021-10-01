//shape consructor
function Shape(color){
    this.color=color;
}
Shape.prototype.duplicate=function(){
    console.log('duplicate');
} 
function Circle(radius,color){
    Shape.call(this,color);
    this.radius=radius
}



//Method for creating an  object with a  given prototype
// Circle.prototype=Object.create(Object.prototype);   //implicit relation    // object base 
//new Circle.prototype.constructor() = new Circle
Circle.prototype=Object.create(Shape.prototype); 
Circle.prototype.constructor=Circle;
Circle.prototype.draw=function(){
    console.log('draw');
}
const s =new Shape();
const c=new Circle(1.2,'red');
// console.log(s);
// console.log(c);
Circle.prototype.duplicate= function(){
    console.log('duplicate circle');
}
function Square(size){
    this.size=size;
}

// Square.prototype=Object.create(Shape.prototype); 
// Square.prototype.constructor=Square;
//these two lines above are too muh , to shoten them we create a function 
//this function will create the prototypal inheritance
function extend(Child,Parent){
    Child.prototype=Object.create(Parent.prototype);
    Child.prototype.constructor=Child;
}

// const sq=new Square(10);
extend(Square,Shape);
//METHOD OVERRIDING

Square.prototype.duplicate= function(){
    console.log('duplicate square');
}

//polymorphism
const shapes=[
    new Circle(12,'blue'),
    new Square(10)
];

//now both ciccle and square have dupplicate method
//polymorphism will have different function calls

for(let shape of shapes){
    shape.duplicate();
}