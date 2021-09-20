// <------------------------------------------------------6.3----------------------------------------------------->
// Usually, a Lexical Environment is removed from memory with all the variables after the function call finishes.
//  That’s because there are no references to it. As any JavaScript object, it’s only kept in memory while it’s reachable.

// However, if there’s a nested function that is still reachable after the end of a function, then it has 
// [[Environment]] property that references the lexical environment.

//Example   a function returning a functions

function counterMaker(){
    let count=0;               
    return function(){                                      
        return count++;                                     // counter maker     ->  Global Enviromment  -> null 
    }
}
let counter=counterMaker();  
//here counterMaker reference may be removed from call stack but garbage collector will not remove it from memory
//lexical environment of counterMaker stays alive

//Question : What happens if
let arr=[counter(),counter(),counterMaker()(),counter()];
counter=counterMaker();
arr.push(counter());
for(let v in arr){
    console.log(v);
}
//after calling countMaker again count is not changed to zero
//that's why we get increasing number logs


//A Lexical Environment object dies when it becomes unreachable (just like any other object). 
// In other words, it exists only while there’s at least one nested function referencing it.

counter=null;       //doing this remove the reference to CounterMaker Lexical Environment and hence garbage collection removes it
counter=counterMaker();
console.log(counter());     //0      because new lexical Environment of CounterMaker is made now.


// <------------------------------------------------------4.3----------------------------------------------------->
//main concept is reachability
// https://javascript.info/garbage-collection#reachability        here all data is important