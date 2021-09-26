// <---------------------------------------------------------------7.1-------------------------------------------------------------------->
// Property Flags
//object property is more flexible than normal

//properties have 3 special attributes or 'flags'
// writable – if true, the value can be changed, otherwise it’s read-only.
// enumerable – if true, then listed in loops, otherwise not listed.
// configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.

//let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);     with this we get info about the properties

let user={
    name:"lakshay",
    age:20
}
let descrip=Object.getOwnPropertyDescriptor(user,'name');
console.log(descrip);

//To change these properties we use
Object.defineProperty(user,'name',{
    value:"john",
    writable:false,
    enumerable:false,
    configurable:false
})

// False writable
console.log(user.name);   // value is changed to "john"
//now as the writable is false , changing value will not work
user.name="changed";
console.log(user.name);   //john

//False enumerable        ,, ie that property not visible in loops
for(let val in user){
    console.log(val);
}

//false configurable , we cannot change the attributes