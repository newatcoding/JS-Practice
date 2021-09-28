//abstraction
//hiding details and showing only essentials

function Circle(radius){
    let color='red';     //this is a local variable , not accesable from outside
    this.radius=radius;
    // this.defaultLocation={x:0,y:0};
    let defaultLocation={x:0,y:0}; //now it is local and cannot be seen from outside

    let computeOptimumLocation= function (factor){
        console.log(factor);
    }
    this.draw=function(){
        // let x,y;       //local scope
        computeOptimumLocation(0.1);
        console.log('draw');
    };

    Object.defineProperty(this,'defaultLocation',{
        get: function(){           // make this read only property
            return defaultLocation;
        },
        set: function(value){       //make the function writable
            if(!value.x || !value.y){
                throw new Error('Invalid Location');
            }
            defaultLocation=value;
        }
    });
}

const circle=new Circle(10);
// circle.computeOptimumLocation();  //this is not needed here
circle.draw();
// only 2 thing that are needed are draw method and radius         ,, so we need to hide rest

//closure is not scope , scope is temporary and it dies , closure stays there
//now if we log the object, only the needed properties will be visible , rest will be hidden
console.log(circle);

// circle.defaultLocation=1;  //error