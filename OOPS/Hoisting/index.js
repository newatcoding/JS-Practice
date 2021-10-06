//functions Declarations are hoisted (meaning they are moved to the top , (this is not actually what happends but for sake of understand) )

sayHello();
function sayHello(){
    console.log("Can be called from anywhere within the environment");
}
// sayBye(); // not hoisted as it is function expression
// const sayBye=function(){
//     console.log("Not hoisted");
// }
//same thigs happens with primitive types i.e boolean number string null undefined

//when it comes to classes
// --------------------------------------------------------CLasses--------------------------------------------------------------------

// const c=new Circle();       //error  class is not defined
// //Class Declaration         (Not Hoisted)
// class Circle{

    
// }
const s=new Square();
//class Expression (Not hoisted)
const Square= class{

}

//Unlike function class is  not hoisted in both declaration or Expression

