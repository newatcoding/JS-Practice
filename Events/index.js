// <------------------------------------------------2.1-------------------------------------------------------------------------->
// Introduction to browser events                      
//everything that happens in the DOM , generate some kind of signal that indicates an event

//#TypeS of EventS

//1. Mouse Events
    // click – when the mouse clicks on an element (touchscreen devices generate it on a tap).
    // contextmenu – when the mouse right-clicks on an element.
    // mouseover / mouseout – when the mouse cursor comes over / leaves an element.
    // mousedown / mouseup – when the mouse button is pressed / released over an element.
    // mousemove – when the mouse is moved.

//2. Keyboard Events
    //keydown and keyup - when a keyboard key is pressed and released

//3. Form elements Events
    //Submit- when form submits
    // focus- when you focus on an element, e.g. clicking on input tag makes input tag come on  focus

//4. Document events:
    // DOMContentLoaded – when the HTML is loaded and processed, DOM is fully built.

//5. CSS events:    
    // transitionend – when a CSS-animation finishes.


//for HTML to get event use wording "On"<Event> eg. onfoucs ,onclick, 

function countRabbits(){
    for(let i=1;i<=3;i++){
        console.log("Rabbit number "+ i);
    }
}