// all variable are properties and all functions are methods in the object
const circle = {
    radius:1,
    location:{
        x:1,
        y:1
    },
    draw:function(){
        console.log("drawing a circle");
    }
};

circle.draw();

// if we  need to create another circle   we cant just copy and paste
// use factory or a constructor function to create circle object


//Factory  Function
function createCircle(radius){
    return {
        radius:radius,
        location:{
            x:1,
            y:1
        },
        draw:function(){
            console.log("factory)drawing a circle of radius "+this.radius);
        }
    }
}

const newCircle=createCircle(3);
newCircle.draw();

//Using Constructor Function     (naming convention is different, First letter is Uppercase)
function Circle(radius){
    this.radius = radius;
    this.draw= function(){
        console.log("draw circle of radius "+radius);
    } 
}

const another=new Circle(3);       //'new' operator create an empty object  & set 'this' to point to that object
//if we remove new then 'this ' = global     object or window depending where you run , node or browser