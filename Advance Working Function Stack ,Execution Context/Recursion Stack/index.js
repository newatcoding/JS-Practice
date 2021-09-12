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