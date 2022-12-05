/* Si elem – es un elemento nodo arbitrario del DOM...
Demúestralo. */

"use strict";

//¿Es cierto que elem.lastChild.nextSibling siempre es null?
let elem = document.querySelector("ul");
alert(elem.lastChild.nextSibling);
//Si, es siempre null ya que al coger el ultimo elemento, es imposible coger el siguiente ya que no existe

//¿Es cierto que elem.children[0].previousSibling siempre es null ?
let prueba2 = elem.children[0].previousSibling;
alert(prueba2);
//No, ya que puede que al recoger un elemento, puede que el anterior sea el mismo padre y en este caso, lo coja
