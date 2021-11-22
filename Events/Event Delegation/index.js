// <------------------------------------------------2.3-------------------------------------------------------------------------->
// Event Delegation
// Capturing and bubbling allow us to implement one of most powerful event handling patterns called event delegation.

// The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them
//  – we put a single handler on their common ancestor.

let selectedId;
let table=document.querySelector("table");
table.onClick= function(event){
    let target=event.target;         // asking where was the click
    if(target.tagName!='TD') return ; 

    highlight(target);
};

function highlight(td){
    console.log("clicked");
    if(selectedId){
        selectedId.classList.remove('highlight');
    }
    selectedId=td;
    selectedId.classList.add('highlight');
}
let menu=document.getElementById('menu');
class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); // (*)
    }

    save() {
      console.log('saving');
    }

    load() {
      console.log('loading');
    }

    search() {
      console.log('searching');
    }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    };
  }

  new Menu(menu);