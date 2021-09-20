/*<------------------------------------------ 6.1 -------------------------------------------------------------------------------->*/
//Recursion Stack       NECESSART TO USE BREAKPOINTS
"use strict"
function pow(x,n){
    if(n==1){
        return 1;   
    }else{
        return x*pow(x,n-1);
    }
}

console.log(pow(2,5));


/*<------------------------------------------ 6.2 -------------------------------------------------------------------------------->*/
//Java sciprt can take multiple arguments in some cases
console.log(Math.max(1,2,3,4,5,6,7,8));

//Also in copying  multiple objects properties in one object;
// Object.assign(newObject , Old1, old2, old3, old4,old5 );

//Rest parameters
function sum(a,b){
    return a+b;
}
console.log(sum(1,2,3,4,5,6,7));      //here there will be no error in arguments but only 1st 2 will be counted

function sumAll(... args){
    let sum=0;
    for(let arg of args){
        sum+=arg;
    }
    return sum;
}
console.log(sumAll(1,2,3,4,5,6,7));
//multiple arguments doesnt work with array
//spread is necessary for arguments 
let arr=[1,2,3,4,5];
// console.log(sumAll(arr));       //will not work
console.log(sumAll(...arr));

//conmpartin array;
//  convert array to String and compare
// if(JSON.stringify(arr)===JSON.stringify(arr2))      