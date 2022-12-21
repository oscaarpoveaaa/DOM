/* Puede haber más filas en ella.
Escribe el código para ordenarla por la columna "name". */

"use strict";

//Aqui guardamos todos los tr del tbody
let ordenar = Array.from(tabla.tBodies[0].rows);

//Aqui comparamos la primera con la segunda fila por el campo 0 que es el nombre , si puseramos [1] se ordenaria por el apellido 
ordenar.sort((rowA, rowB) => rowA.cells[0].innerHTML.localeCompare(rowB.cells[0].innerHTML));

tabla.tBodies[0].append(...ordenar);
