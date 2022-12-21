/* Inserta el HTML en la lista. Escribe el código para insertar 
<li>2</li><li>3</li> entre dos <li> aquí:
<ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul> */

"use strict";

// LLamamos al id 'one' y usamos el insertAdjacentHTML que sirve para insertar algo depende de lo que pongas, en este caso he usado 
// beforeend que sirve para insertar al final de one el elemento que en este caso es el 2 y el 3 
one.insertAdjacentHTML('beforeend', '<li>2</li><li>3</li>');