/* Agrega JavaScript al button para hacer que <div 
id="text"> desaparezca al hacerle click. */

"use strict";

function ocultar() {
    let texto = document.getElementById("text");
    if (texto.style.display === "none") {
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }
}
