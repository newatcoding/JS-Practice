// <--------------------------------------------------------------------1.4------------------------------------------------------------------------>
//if the element has id attribute
// let ele=document.getElementById('ele');

// ele.style.background='red';
// //for complicaed id name us square brackets window['ele-window'];

// //querySelectorAll , returns all elements intede elem matching given CSS selector
// let selectall=document.querySelectorAll('div');
// console.log(selectall);

// //querySelector returns 1st elements of the given css selector
// console.log(document.querySelector('p'));

// //matches doesnt look for anything it just checks if element matches given css selector
// for(let elem of document.body.children){
//     if(elem.matches('div[id="ele"]')){
//         console.log("found");
//     }
// }

// //ancestors of elements are parent or thier parent or their  parent
// //closest looks for nearest ancestor that matches CSS-selector, returns whole deep copied elements
// let chapter=document.querySelector('.chapter'); // '.' for class  LI;

// console.log(chapter.closest('.book')); //
// console.log(chapter.closest('.contents'));

// //getElementBy /TagName or /ClassName returns all the element with that CSS query
// //it returns the collection of HTMLelements  not the element
// console.log(document.getElementsByTagName('div'));


//NOTE: querySelectorAll returns a static Collecions, it is like fixed array of elements
//while getElementBy is dynamic , changes with execution , if there is something new also 
//these are Live Collections- getElementBy TagName / ClassName / Name are Live 
//rest querySelector +All , ById are all static 

//lean what is CSS selector

// <--------------------------------------------------------------------1.5------------------------------------------------------------------------>
//dom node has different properties
//node type gets yoy type of DOM node

let elm1=document.body;
console.log(elm1.nodeType);     //1 means- element nodes, 
//3 means text ndoes
//9 means document object

//nodeNames or TagNames give name of the tag

//innerHTML allows to get the HTML inside as a String
console.log(document.body.innerHTML);

//NOTE innerHTML+= does a full override


//OuterHTML
//innerHTML+element itself
console.log(elm1.outerHTML);

//NOTE: innerHTML is only Valid for ELement Nodes
//text Nodes have properties Data and nodeValues ,which are almost the same


//textContent provides text inside the element  only text, not tags (It includes the spaces)
console.log(elm1.textContent);

//hidden 
elm1.hidden  //shows if hidden or not, you can change it

// <--------------------------------------------------------------------1.6------------------------------------------------------------------------>
//DOM properties
//HTML attributes
//creating DOM properties
document.body.myData={
    name:'lala',
    title:"Local"
}
console.log(document.body.myData.title);

// when browser parses HTML to create DOM objects for tags, it uses recognised Standard Tag attributes and creates DOM properties from them.
console.log(document.body.id); // test
console.log(document.body.something) //undefined

//Q: How to access non- stadard attributes
// elem.hasAttribute(name) – checks for existence.
// elem.getAttribute(name) – gets the value.
// elem.setAttribute(name, value) – sets the value.
// elem.removeAttribute(name) – removes the attribute.
console.log(document.body.getAttribute('something'));

//some exception to property -attribute synchronization
//example input tag  input.value if changed in script will not show change
//here value changes from attribute-> property, not viceversa
let input = document.querySelector('input');

// attribute => property
input.setAttribute('value', 'text');
console.log(input.value); // text

// NOT property => attribute
input.value = 'newValue';
console.log(input.getAttribute('value')); // text (not updated!)


//dom properties are typed, can be string , boolean, object. etc.
console.log(input.getAttribute('checked')); //true
console.log(div.getAttribute('style')); //color:red;font-size

//non-standard data set is needed to either send data from html to js or to mark the HTML