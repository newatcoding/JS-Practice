/*  ---------------------------------------------------- 4.5 ---------------------------------------------------------------------- */
//Constructors    used to create many similar objects
//constructors are function but with Capital 1st letter and always "new" when calling
function User(name){
    this.name=name;
    this.isAdmin=false;
}

let user=new User("lakshay");     //created new object with property name:"lakshay"
let admin=new User("Ut");       //created new object with property name:"Ut"
console.log(user.name);
console.log(admin.name);


//return from constructor
function BigUser() {
    if(new.target){         //this line checks if your call had new in it if not you can place one -- mode test

    }
    this.name = "John";
  
    return { name: "Godzilla" };  // <-- returns this object
  }
  
  console.log( new BigUser().name ); 

  //An empty return returns 'this'

  function SmallUser() {

    this.name = "John";
  
    return; // <-- returns this
  }
  
  console.log( new SmallUser().name );