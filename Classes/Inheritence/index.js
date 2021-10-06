class Animal {
    constructor (name){
        this.speed=0;
        this.name=name;
    }
    run(speed){
        this.speed=speed;
        console.log(`${this.name} has a speed of ${this.speed}`);
    }
    stop(){
        this.speed=0;
        console.log(`${this.name} stopped`);
    }

}
//all the properties of Animal will become property of Rabbit and animal will become out prototype with method hide and constructor in it 
class Rabbit extends Animal{

    //overriding constructor     (if not constructor and empty constructor is created like below and constructor is taken from super(i.e ))
    //parent Class
    // constructor(...args){
    //     super(...args);
    // }

    // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived
    // constructor(name,ear){
    //     this.speed=0;
    //     this.name=name;
    //     this.earLength=ear;
    // }

    // When a regular function is executed with new, it creates an empty object and assigns it to this.
    // But when a derived constructor runs, it doesn’t do this. It expects the parent constructor to do this job.
    // So a derived constructor must call super in order to execute its parent (base) constructor,
    //  otherwise the object for this won’t be created. And we’ll get an error.
    constructor(name,ear){
        // this.speed=0;
         super(name);
        this.earLength=ear;
    }

    hide(){
        console.log(`${this.name} hides`);
    }

    //overriding
    // stop(){
    //      super.stop();
    //     this.hide();
    //     // this.speed=0;
    //     // console.log('stopped before going up in prototypal chain');
    // }

    
    
}

let rabbit=new Rabbit("White rabbit");
// rabbit.abc();
// console.log();

//Arrow functions does not have 'super';     if accessed it is taken from outside function
