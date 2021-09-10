
/*  ---------------------------------------------------- 4.1 ---------------------------------------------------------------------- */
//object and its properites
// let user={
//   name:'lakshay',
//   age:12,
//   print:function(){
//     console.log("Objrct can have any key value pair ,even a function");
//   },
//   isBool:true,
//   "likes birds": true , // multiword property name must be quoted and they ahave different access,
//   "name":"pablo",     //this line is just overriding the name property above
// }
// user.print();

// user.isBool=false;       //values can be changed
// delete user.isBool        //properties cn be deleted
// // console.log(user.isBool);
// // console.log(user["likes birds"]);        //another way of access , mostly used for multiword property

// //one way where bracket access is better than the . access
// let key="name";
// // console.log(user[key]);   
// // console.log(user.key);  //doesnt work
// // console.log(user.name);       //this is showing pablo because see next line
// // console.log(user);

// let fruit="apple";
// let bag={
//   [fruit]:5 , // computed Properties
//   [fruit+'sucks']:12
// }
// // console.log(bag[fruit]);
// // console.log(bag.applessucks);
// //shorthand for same variable name properites

// function ans(name,age){
//   return {  //equivalent to
//     name,             //name:name
//     age             //age:age
//   }
// }

// //object name hae no reserved name restrictions    like 'for' 'let' 'return'

// //testing existeence of  property
// if(user.getName=undefined){
//   // console.log("property doest exist");
// }
// // console.log("key" in user);     //another way of finding property ,  this one is better in case if some key has value as undefined

// for(let key in user){
//   console.log(key);

// }


/*  ---------------------------------------------------- 4.2 ---------------------------------------------------------------------- */

//Object referencing and copying
//One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, 
//whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.
// let user={abc:"ll",name:"aaa"};
// let admin=user;  // copy of reference
// console.log(user.abc + " " +admin.abc);// abc abc

// user.abc="changed";
// console.log(user.abc + " " +admin.abc);   // changed changed

// let a={};
// let b={type:"nothing"};

// console.log(a==b);   //false  because a and b are independent

// //cloning and merging
// let clone={};

// for(let key in user){
//     clone[key]=user[key];
// }
// clone.name="utkarsh"
// console.log(user.name+" " +clone.name); //as clone is a different object both will have different name now

// //shortcut for cloning
// Object.assign(a,b,clone);  // cloning keys of 'user' and 'clone' in 'a'
// console.log(a);


// //nesting an object
// let user1 = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };

// //now a big problem
// let clone2=Object.assign({},user1);

// clone2.name="lalala"
// console.log(user1.name+" "+clone2.name);

// //but the object inside user1 is copied as a reference 

// user1.sizes.width++;
// console.log(user1.sizes.width+" "+clone2.sizes.width);                 // 'sizes' object are the same in both objects above 


 /*  ---------------------------------------------------- 4.6 ---------------------------------------------------------------------- */
  //optional Chaining
//The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.
  let user={}

//   console.log(user.name.val);      //error type error
console.log(user.name?.val);        //checks whatever comes before '?' is not undefined or null if it does then it just gives undef or null 

//reason of usage is , non existence od error which is always better
//  user1?.name will give error , variable before ? must be declared