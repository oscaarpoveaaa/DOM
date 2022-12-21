/* Crea un botón que se oculte a sí mismo al darle un click. */

"use strict";

function ocultar() {
    let texto = document.getElementById("boton");
    if (texto.style.display === "none") {
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }
}
