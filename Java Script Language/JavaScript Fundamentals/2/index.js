/*----------------------------------------------------- 2.13 ----------------------------------------------------------------------*/
// for(let i=0;i<10;i++){  //inline variable
//     console.log(i);
// }

//lables 
outer: for(let i=0;i<10;i++){
    console.log(i);
    if(i>=5) break outer;
}
// labels doest know allow jumps

/*----------------------------------------------------- 2.14 ----------------------------------------------------------------------*/
//switches
//without 'break' all cases after the chosen one with condition will print 
let x=3;
switch(x){
    case 1:{
        console.log("1");
        break;
    }case 2:{
        console.log("2");
        break;
    }default:{
        console.log("not 1 or 2");
        break;
    }
}

/*----------------------------------------------------- 2.15 ----------------------------------------------------------------------*/
//Functions

function showMessage(parameter1, parameter2){
    let message= "This is a Local Variable"
    console.log(parameter2,parameter1);
    console.log(message);
}
// console.log(message);        // local variable of a function will not be accessable from outside of the function where it is declared 
//reference error when you are reference something which does not exist in your lexical environment
//if one of the arguments is not given it automatically has undefined value inside it
showMessage("Argument1", "Argument2");

//outer variable
// let outerVariable="This is outer Variable"
// function showOuter(){
//         //  outerVariable="Outer value Changed";            //here because the variable was outer , it was accessable by the function
//     let outerVariable="Same name can be declared in local scope without error";
//     console.log(outerVariable);
// }
// console.log(outerVariable);
// showOuter();
// console.log(outerVariable); 


//default parameter value
// function defaultParam(parameter1, args= " No data given "){
//     // alert(parameter1+" :"+ args);
//     console.log(parameter1);
//     console.log(args);
// }
// // console.log("User 1");

// defaultParam("User 1");

//function as a default parameter
function functionParam(){  
    console.log("Nothing was given");
}
function defaultParam1(parameter1, args= functionParam()){
    console.log(parameter1);
    console.log(args);
}
// defaultParam1("User 1");

//function that returns nothing or empty return is undefined
function doNothing(){

}
// console.log(doNothing());

/*----------------------------------------------------- 2.16 ----------------------------------------------------------------------*/
//function declaration vs function expression
function hello(){
    console.log("function declaration");
}
// hello();

// Here, the function is created and assigned to the variable explicitly, like any other value. 
const func=function(){
    console.log("Functional Expression");
}
// func();
//it will be easier when you understand inner working of JS
function sayHi(msg){
    console.log("left else");
    console.log("This one just shows the whole code "+ msg);
}
//fon now justunderstand this variable of sayHi is created and to its value is added all the function code
// console.log(sayHi);
let fnCopy=sayHi;  //both works because it's a reference to the same function  to check use '==='
fnCopy("this is it");
console.log(fnCopy.length+" " +sayHi.length);
fnCopy=function(){

};
console.log(sayHi.length+" "+fnCopy.length);
