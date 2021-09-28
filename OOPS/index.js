// // all variable are properties and all functions are methods in the object
// const circle = {
//     radius:1,
//     location:{
//         x:1,
//         y:1
//     },
//     draw:function(){
//         console.log("drawing a circle");
//     }
// };

// circle.draw();

// // if we  need to create another circle   we cant just copy and paste
// // use factory or a constructor function to create circle object


// //Factory  Function
// function createCircle(radius){
//     return {
//         radius:radius,
//         location:{
//             x:1,
//             y:1
//         },
//         draw:function(){
//             console.log("factory drawing a circle of radius "+this.radius);
//         }
//     }
// }

// const newCircle=createCircle(3);
// newCircle.draw();

// //Using Constructor Function     (naming convention is different, First letter is Uppercase)
// function Circle(radius){
//     this.radius = radius;
//     this.draw= function(){
//         console.log("draw circle of radius "+radius);
//     } 
// }

// const another=new Circle(3);       //'new' operator create an empty object  & set 'this' to point to that object
// //if we remove new then 'this ' = global     object or window depending where you run , node or browser

// //if a cunstructor i not defined then JS uses in build constructor

// let x={};                    //is equal to let x=new Object();
// let str=''      //==     new String();
// //new Boolean(); new Number();            all these are inbuilt constructor 


// //Every function is an object

// Circle.call({},5)         // call('this', arguments of the function)      //explicit binding
// Circle.apply({},[1,2,3])          // apply('this', set of arguments)  //explicit binding

// <<<<<<<<<<------------------------------------------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Value Types(primitive)    VS Reference Types
//Number                        Objects
//String                        Function
//Boolean                       Arrays
//Symbol
//undefined
//null


let x=10;
let y=x;

x=20;
console.log(x+"<-x   y->"+y);     // value of x and y is different

//adding and removing properties
 //dot notation vs bracket notation
//bracket notation is used for dynamic access of properties

let user={
    name:'ll',
    age:220,
    'string prop':'this can only be accessed by bracket notation'
}
console.log(user.name);

let prop='name';
console.log(user[prop]);     // this is dynamic usage          change prop variable to change prop usage

console.log(user['string prop']);

//adding properties
user.add={x:1};
user['add2']='added using brackets';
console.log(user);
//delete properties
delete user['add'];
delete user.add2;
console.log(user);


// Enumerating property             using 'in'
if('name' in user){
    console.log("object user has 'name' property");
}