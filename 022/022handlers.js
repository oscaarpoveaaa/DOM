/* Hay un botón en la variable. No hay handlers en él.
¿Qué handlers se ejecutan con el click después del siguiente código? ¿Qué alertas se 
muestran?
 */

"use strict";

let boton = document.querySelector('button')

//Aqui muestra 1 al pulsar
boton.addEventListener("click", () => alert("1"));

//Esta se muestra automáticamente despues, te devuelve el número 2 
boton.removeEventListener("click", () => alert("1"));

//Esta no muestra nada
boton.onclick = () => alert(2);