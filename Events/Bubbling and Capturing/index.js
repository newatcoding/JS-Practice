// <------------------------------------------------2.2-------------------------------------------------------------------------->
//Bubbling 
// So if we click on <p>, then we’ll see 3 alerts: p → div → form.
// The process is called “bubbling”, because events “bubble” from the inner element up through parents like a bubble in the water.

//NOTE: focus does not bubble , almost all other events do

// The most deeply nested element that caused the event is called a target element, accessible as event.target.

//stop bubbling
{/* <button onclick="event.stopPropagation()">Click me</button> */}
//to stop any more events on element we use event.stopImmediatePropagation


//Capturing
// The standard DOM Events describes 3 phases of event propagation:

// Capturing phase – the event goes down to the element.
// Target phase – the event reached the target element.
// Bubbling phase – the event bubbles up from the element.

// elem.addEventListener(..., {capture: true})
// // or, just "true" is an alias to {capture: true}
// elem.addEventListener(..., true)

//is false, (default) the handler is set on bubbling phase

for(let ele of document.querySelectorAll('*')){
    ele.addEventListener("click", e=>console.log(`Capturing: ${ele.tagName}`),true); //capturing
    ele.addEventListener("click", e=>console.log(`bubbling: ${ele.tagName}`)); //bubbling
}
