// try{
//     const a=1;
//     a=11;
    
// }catch(err){
//     console.log("error in any line in try , it stops executing and comes to catch block");
//     console.log(err);
// }   
//throw operator for throwing a error

class MyError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
    }
  }
  
  class ValidationError extends MyError { }
  
  class PropertyRequiredError extends ValidationError {
    constructor(property) {
      super("No property: " + property);
      this.property = property;
    }
  }

try{

}catch(err){
    if(err instanceof ValidityError){

    }else if(err instanceof SyntaxError){

    }else{
        throw err;
    }
}finally{
    console.log("This always run");
}
//exrending errors  
//we can  create custom error class to see instanceOf Our own custom error\

class Error {
    constructor(message) {
      this.message = message;
      this.name = "Error"; // (different names for different built-in error classes)
    //   this.stack = <call stack>;         non-standard, but most environments support it
    }
  }
  class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ValidationError"; // (2)
  }
}

function test() {
  throw new ValidationError("Whoops!");
}

try {
  test();
} catch(err) {
  alert(err.message); // Whoops!
  alert(err.name); // ValidationError
  alert(err.stack); // a list of nested calls with line numbers for each
  if (err instanceof ValidationError) {
    alert("Invalid data: " + err.message); // Invalid data: No field: name
  } else if (err instanceof SyntaxError) { // (*)
    alert("JSON Syntax Error: " + err.message);
  } else {
    throw err;
  }
}