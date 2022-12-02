/* Para cada una de las siguientes preguntas, da al menos una forma de cómo acceder a 
ellos:*/

"use strict"

//¿El nodo <div> del DOM?
let elemento1 = document.getElementsByTagName('div');
for(let elem of elemento1){
    alert(elem.innerHTML);
}
//¿El nodo <ul> del DOM?
let elemento2 = document.getElementsByTagName('ul');
for(let elem of elemento2){
    alert(elem.innerHTML);
}
//El segundo <li> (con Peter Parker)? 
let elemento3 = document.querySelectorAll('ul > li:last-child');
for(let elem of elemento3){
    alert(elem.innerHTML);
}
