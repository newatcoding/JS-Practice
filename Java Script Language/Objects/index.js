//object and its properites
let user={
  name:'lakshay',
  age:12,
  print:function(){
    console.log("Objrct can have any key value pair ,even a function");
  },
  isBool:true,
  "likes birds": true , // multiword property name must be quoted and they ahave different access,
  "name":"pablo",     //this line is just overriding the name property above
}
user.print();

user.isBool=false;       //values can be changed
delete user.isBool        //properties cn be deleted
// console.log(user.isBool);
// console.log(user["likes birds"]);        //another way of access , mostly used for multiword property

//one way where bracket access is better than the . access
let key="name";
// console.log(user[key]);   
// console.log(user.key);  //doesnt work
// console.log(user.name);       //this is showing pablo because see next line
// console.log(user);

let fruit="apple";
let bag={
  [fruit]:5 , // computed Properties
  [fruit+'sucks']:12
}
// console.log(bag[fruit]);
// console.log(bag.applessucks);
//shorthand for same variable name properites

function ans(name,age){
  return {  //equivalent to
    name,             //name:name
    age             //age:age
  }
}

//object name hae no reserved name restrictions    like 'for' 'let' 'return'

//testing existeence of  property
if(user.getName=undefined){
  // console.log("property doest exist");
}
// console.log("key" in user);     //another way of finding property ,  this one is better in case if some key has value as undefined

for(let key in user){
  console.log(key);

}