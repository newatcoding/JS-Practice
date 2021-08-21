/*  ---------------------------------------------------- 2.1 n 2.2 ------------------------------------------------------------------ */
// alert('Hello world');         //if we remove this semicola there will be error JS doesn't always assume line break as next line
// [1,2].forEach(alert);

/*  ---------------------------------------------------- 2.3 ---------------------------------------------------------------------- */
 "use strict"   // using this now our code can use modern features of JS (Note : it is necessary that it is written at top of the code)

 /*  ---------------------------------------------------- 2.4 ---------------------------------------------------------------------- */
 let message="hello";        //let can be reinitialized not redeclared;
//  console.log(message);
//  let message="Nice"        //SyntaxError: 'message' has already been declared
//  ans=5;         //valid if we were not using "use strict"

 const ans=0;
//  console.log(ans); 
//  ans=1;        //TypeError: Assignment to constant variable.

 /*  ---------------------------------------------------- 2.5 ---------------------------------------------------------------------- */
 let n=100; // number   range {2^53-1 to -(2^53-1)}
 n=102.5;
 n=1/0;  //infinity
//  console.log(n);  //infinity
// console.log("not a number "/2+5);  //NaN 

 let bool=true; //boolean
 bool=false;    
 
 let string="Wazzup" //String        
 let str=`back Tick string which is changable dynamically ${1+2}`;       

 let bigInt = 1234567890123456789012345678901234567890n;  // the "n" at the end means it's a BigInt

 let nul=null;  //unlike another languages his does not mean null pointer , this is just representation of empty

 let undef=undefined;    //means value not assigned  ..every variable befoure initialization has this
 // all the daata type above are "primitive" meaning they contain only single value

 //to find type of data Type
//  console.log(typeof nul); // object              //this is an officially recognized error in typeof behavior,
//  console.log(typeof bigInt); //bigint
//  console.log(typeof alert); //function
//  console.log(typeof Math);  //object          // in-build JS object

  /*  ---------------------------------------------------- 2.6 ---------------------------------------------------------------------- */
        /*user interaction  alert , prompt and confirm*/
// alert("Shows user a message and goes away when ok is pressed");  //this is  model window i.e you can't interact with anything else

// let result=prompt("take 1+1(optional) argument 2nd one for default field",["default"]);  //returns whatever you wrote on the text field
// console.log(result);

// let answer=confirm("are you lakshay");    //returns true or false depending on what button you press
// console.log(answer);


  /*  ---------------------------------------------------- 2.7 ---------------------------------------------------------------------- */
// let val=true   //boolean
// console.log(typeof val);
// val=String(val);
// console.log(typeof val); //String

let convertToNumber="this on conversion to number will show Nan";
convertToNumber=Number(convertToNumber);  
// console.log( convertToNumber); // NaN     //conversion failed
//Numeric conversion
// Value	        Becomes…
// undefined	    NaN
// null	            0
// true and false	1 and 0
// string	        Whitespaces from the start and end are removed. 
             //  If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.

// console.log(Boolean(0)); //false 
// console.log(Boolean(1)); //true
// console.log(Boolean("Someting"));  //true
// console.log(Boolean(""));  //false

//boolean convesion

// Value	                        Becomes…
// 0, null, undefined, NaN, ""	    false
// any other value	                true

  /*  ---------------------------------------------------- 2.9 ---------------------------------------------------------------------- */
//comparison of different types
  // console.log('0000001'==1);  //true

  // //equal vs Strictly Equal
  // console.log('1'==1);  //true  checking equality with type conversion
  // console.log('1'===1);  //false  without type conversion

  // //null vs undefined
  // console.log(null==undefined);  //true      special rule these two are like sweet couple only works for them
  // console.log(null===undefined); //false  false because different type

  // // in case of  < , > , <= , >= null changes to 0 and undefuned changes to NaN
  // //that's why
  // console.log(null>0);  //false because null converted to 0 and now this statment is saying 0>0
  // console.log(null==0); //false cause null and 0 are different
  // console.log(null>=0); // true
  // in == undefined and null are equal to each other and not equal to anything else
  //NOTE: undefined comparison to any no. id false undefined is converted to NaN

/*  ---------------------------------------------------- 2.10 ---------------------------------------------------------------------- */

//falsy values "" , null , undefined, NaN are all assumed to be false under boolean conditions
//rest are truthy
if(!("" && NaN && undefined && null)){
  console.log("All False");
}
//shortcut 
true && console.log("short cut");

/*  ---------------------------------------------------- 2.12 ---------------------------------------------------------------------- */
// ?? operator is nullish coalescing
// a statement is defined if it's neither null nor undefined
// let nullish='user defined';
// console.log(nullish ?? 'Anonymous');  //Anonymous

//NOTE for loop has inline variable