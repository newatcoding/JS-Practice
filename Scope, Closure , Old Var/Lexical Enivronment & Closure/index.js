// <----------------------------------------6.3--------------------------------------------->
//lexical Environment

function counterMaker(){
    let count=0;                   // as this variable is in a block it will be visible only inside the block

    return function(){                                      // as function is created here it's reference to outer enviroment becomes
        return count++;                                     // counter maker     ->  Global Enviromment  -> null 
    }
}
let counter=counterMaker();                   //outer lexical environment initially had  {counterMaker:function()...}
                                                                                   //    {counter:undefined}     

console.log(counter());//0       //    at every call the new outer lexical environment is referenced using the old one
                                    // counter.[[Environment]] has the reference to {count: 0} Lexical Environment. 
console.log(counter());//1                   counter.[[Environment]] has the reference to {count: 1} Lexical Environment. 
console.log(counter());//2

//at each call the new refernce to outer lexical environemnt had a new value of counter given that we had access to "count"
// we were able to change it, and in next call when new environment was refernced , updated value was recieved


//