// <<<<<<<<<<<<<<<<<<<<<<<<<------------------------------------12.1----------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Generator
//Generators can  give multiple values one after another, on demands.

function* generateSequence(){
    yield 1;
    yield 2;
    return 3;
}
let generator=generateSequence();
//.next gives you next values
let one=generator.next(); //value:1 done:false
let two=generator.next(); //value:2 done:false
let three=generator.next(); //value:3 done:true
console.log(three);

//generators are iterable all values it gives are iterable just use for..in