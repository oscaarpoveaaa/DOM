/* eleccionar todas las celdas diagonales Escribe el código para 
pintar todas las celdas diagonales de rojo. Necesitarás obtener todas las <td> de la 
<table> y pintarlas usando el código:
td debe ser la referencia a la celda de la tabla
td.style.backgroundColor = 'red';  */

"use strict";

let tds = document.querySelectorAll("td");

for (let i = 0; i < tds.length; i++) {
  if (i % 6 == 0) {
    tds[i].style.backgroundColor = "red";
  }
}
