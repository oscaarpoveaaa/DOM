/* Hay un árbol estructurado como ul/li anidado.
Escribe el código que para cada <li> muestra:
¿Cuál es el texto dentro de él (sin el subárbol)?
El número de <li> anidados: todos los descendientes, incluidos los profundamente 
anidados. */

"use strict";

/* Escribe el código que para cada <li> muestra:
¿Cuál es el texto dentro de él (sin el subárbol)? */

let listas = document.querySelectorAll("ul > li > ul > li > ul > li");

for (let elem of listas) {
    console.log(elem.textContent);
};

/* El número de <li> anidados: todos los descendientes, incluidos los profundamente 
anidados. */

let numListas = document.querySelectorAll("li")

console.log(numListas.length)