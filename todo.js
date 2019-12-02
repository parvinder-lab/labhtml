function run() {
    let btn = document.querySelector('#button1');
    btn.addEventListener('click', addNewToDo);
    storedata();

}
function addData(item){
    const db = window.localStorage;
    const list = document.querySelector('#todo-list');
    const node = document.createRange().createContextualFragment(db.getItem(item));
    list.appendChild(node);
}
function storedata(){
    const db = window.localStorage;
    const list = document.querySelector('#todo-list');
   Object.keys(db).forEach(addData);
    Object.keys(db).forEach((item) => {
    const node = document.createRange().createContextualFragment(db.getItem(item));
    
});
}
function checkUpdate(cu){
    if(cu.checked){
        cu.setAttribute('checked', cu.checked);
    
    }else {
        cu.removeAttribute('checked');
    }
const itemString = new XMLSerializer().serializeToString(cu.parentNode);
const id = cu.id;
window.localStorage.setItem(id, itemString);
}

function addNewToDo(event) {
    event.preventDefault();

    const todo = document.querySelector('#todo-label');
    const value = todo.value.trim();

    if (value.length > 0) {
        const hash = (Date.now().toString(36).substr(2, 4) + performance.now().toString(36).replace('.','').substr(0, 4) + Math.random().toString(36).substr(3, 4)).toUpperCase();

        const id = `todo-select-${hash}`;
        const template = document.querySelector('#todo-item');
        const item = document.importNode(template.content, true);
        const label = item.querySelector('label[for]');
        const input = item.querySelector('#todo-select')
        const list = document.querySelector('#todo-list');

        input.setAttribute('id', id);
        label.setAttribute('for', id);

        label.textContent = value;
        const db = window.localStorage;
        const itemString = new XMLSerializer().serializeToString(item);
        db.setItem(id, itemString);

        list.appendChild(item);
        alert("Is Everything ok?")
        
    }
    else{
        alert("To do is empty")
    }

    todo.value = '';
}


run();

function delfunc(htg){
    var d = htg.currentTarget.parentNode.querySelector("Input").id;
    localStorage.removeItem(d);
    const item = htg.currentTarget.parentNode;
    const list = item.parentNode;
    list.removeChild(item);
       
      }

      var x = document.getElementById("pp");
      
     
      function myFunction() { 
        x.style.animation = "inder 4s";    
      }
      x.addEventListener("animationstart", myStartFunction);
      
      x.addEventListener("animationend", myEndFunction);
      
      function myStartFunction() {
      
        this.style.backgroundColor = "blue";
      }
      
      function myEndFunction() {
       
        this.style.backgroundColor = "brown";
      }
