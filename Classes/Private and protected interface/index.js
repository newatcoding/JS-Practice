// <---------------------------------------------------9.4------------------------------------------------------------------------------.>
// Internal and external interface
// In object-oriented programming, properties and methods are split into two groups:

// Internal interface – methods and properties, accessible from other methods of the class, but not from the outside.
// External interface – methods and properties, accessible also from outside the class.

// In JavaScript, there are two types of object fields (properties and methods):
// 
// Public: accessible from anywhere. They comprise the external interface. Until now we were only using public properties and methods.
// Private: accessible only from inside the class. These are for the internal interface.

//protected are usually prefixed with _
// private start with #
class CoffeeMachine{
    _waterAmount=0;
    #waterLimit=200;
    set waterAmount(value){
        if(value<0){
            value=0;
        }
        this._waterAmount=value;
    }
    get waterAmount(){
        return this._waterAmount
    }
    constructor(power){
        this.power=power;
        console.log(`Created a machine of power ${power}`);
    }
}

let coffeeMachine=new CoffeeMachine(100);
coffeeMachine.waterAmount=200;
coffeeMachine.waterAmount=-10;

//trying to access private private gives error
// coffeeMachine.#waterLimit        error