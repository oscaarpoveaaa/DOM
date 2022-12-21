/* Por qué en el código de abajo return false no funciona?
<script>
  function handler() {
    alert( "..." );
    return false;
  }
</script>
<a href="https://w3.org" onclick="handler()">el navegador irá a w3.org</a> */

"use strict";

function handler() {
  alert("...");
  return false;
}

/* Porque cuando el botón usa el onclick, crea el controlador a partir de ahí, por lo que en vez de enviarte a la pagina web,
realiza la función por eso muestra el alert */
