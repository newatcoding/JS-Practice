// <-------------------------------------------------------- 6.3------------------------------------------------------------------------------------>
// Scope and closure
// block of a code is { ..... ... }
//if variable is declared inside a block it is only seen inside a block

{
    let message="only visible inside  {  } braces";
    console.log(message);
}
// console.log(message);       //Refernce error message is not defined

//give that a variable is not visible outside the block  we can resue the variable name
{
    let message="new message same varaible"
    console.log(message);
}

//nested functions  // function inside a function 
//function as a return value;

function count(){
    let cnt=0;
    return function counter(){
        return cnt++;
    }
}
let counted=count();
console.log(counted());  //0
console.log(counted());  //1
console.log(counted());  //2