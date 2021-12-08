/* Creare un bottone di chiudura e appenderlo ad ogni elemento della lista */
let myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//Cliccare sul bottone di chiusura per nascondere l'elemento corrente della lista
let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

//Aggiungere un simbolo "checked" quando si clicca su un elemento della lista
let list = document.querySelector('ul');
list.addEventListener('click', (ev)=>{
    if (ev.target.tagName == 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false)

/* Creare un nuovo elemento nella lista quando si clicca sul bottone "Add" */
function newElement() {
    let li = document.createElement('li');
    let inputValue = document.querySelector('#myInput').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Devi scrivere qualcosa nell'input!")
    }else{
        document.querySelector('#myUL').appendChild(li);
    }
    document.querySelector('#myInput').value = '';

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
       close[i].onclick = ()=>{
           let div = this.parentElement;
           div.style.display = "none";
       }    
    }
}