/* Agregar un botón de cierre: Hay una lista de mensajes.
Usa JavaScript para agregar un botón de cierre en la esquina superior derecha de cada 
mensaje.  */

"use strict";

let mensaje = document.getElementsByClassName("mensaje");

for (let elem of mensaje) {
  //Insertamos despues del elemento cogido un botón que dice borrar
  elem.insertAdjacentHTML("afterbegin", "<button> Borrar </button>");
  //Decimos que cuando se pulse el botón se borre el elemento actual que en este caso seria el <p> del mensaje
  elem.firstChild.onclick = () => elem.style.display = "none";
}
