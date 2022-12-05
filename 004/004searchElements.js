/* Aquí está el documento con la tabla y el formulario.
¿Cómo encontrar?...

Abra la página index.html en una ventana separada y haga uso de las herramientas del 
navegador. */

"use strict";

//La tabla con id="age-table".

let table = document.getElementById("age-table");

// T0do los elementos label dentro de la tabla (debería haber 3).

let elem_table = document.querySelectorAll("td > label");

alert("Los label que hay en la tabla son: " + elem_table.length);

// El primer td en la tabla (con la palabra “Age”).

let primer_td = document.querySelector("td");

alert(primer_td.textContent);

// El form con name="search".

let formulario = document.querySelector("form[name = 'search']");

formulario.style.background = "red";

// El primer input en ese formulario.

let primer_input = document.querySelector(
  "form[name = 'search'] > label > input"
);

console.log(primer_input);

// El último input en ese formulario.

let ultimo_input = document.querySelector(
  "form[name = 'search'] > input:last-child"
);

console.log(ultimo_input);
