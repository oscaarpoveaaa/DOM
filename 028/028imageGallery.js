/* Crea una galería de imágenes donde la imagen principal 
cambia al hacer clic en una miniatura. Como en Amazon, por ejemplo. */
"use strict";

//Creo 2 arrays en el cual les meto las imagenes por url que vamos a usar
let fondosChicos = [
  "url('https://img.freepik.com/vector-gratis/fondo-textura-acuarela-decorativa-verde-suave_1055-8856.jpg?w=2000')",
  "url('https://img.freepik.com/vector-gratis/fondo-azul-galaxia_125540-99.jpg?w=2000')",
  "url('https://img.freepik.com/vector-gratis/fondo-pantalla-comics-amarillos-diseno-plano_23-2148801759.jpg?w=2000')",
  "url('https://img.freepik.com/foto-gratis/fondo-textura-macro-acuarela-abstracta-violeta_23-2148300805.jpg?w=2000')",
];
let imagenGrande = [
  "url('https://img.freepik.com/vector-gratis/fondo-textura-acuarela-decorativa-verde-suave_1055-8856.jpg?w=2000')",
  "url('https://img.freepik.com/vector-gratis/fondo-azul-galaxia_125540-99.jpg?w=2000')",
  "url('https://img.freepik.com/vector-gratis/fondo-pantalla-comics-amarillos-diseno-plano_23-2148801759.jpg?w=2000')",
  "url('https://img.freepik.com/foto-gratis/fondo-textura-macro-acuarela-abstracta-violeta_23-2148300805.jpg?w=2000')",
];

//Cojo la imagen principal por el nombre de la clase
let imagenPrincipal = document.getElementsByClassName("imagen-principal")[0];

//Cojo las subimagenes 
let subImagenes = document.querySelectorAll('[class *= "subImagen-"]');

imagenPrincipal.style.backgroundImage = imagenGrande[0];
subImagenes[0].style.backgroundImage = fondosChicos[0];
subImagenes[1].style.backgroundImage = fondosChicos[1];
subImagenes[2].style.backgroundImage = fondosChicos[2];
subImagenes[3].style.backgroundImage = fondosChicos[3];

subImagenes[0].addEventListener("click", accion0);
subImagenes[1].addEventListener("click", accion1);
subImagenes[2].addEventListener("click", accion2);
subImagenes[3].addEventListener("click", accion3);

function accion0() {
  imagenPrincipal.style.backgroundImage = imagenGrande[0];
}
function accion1() {
  imagenPrincipal.style.backgroundImage = imagenGrande[1];
}
function accion2() {
  imagenPrincipal.style.backgroundImage = imagenGrande[2];
}
function accion3() {
  imagenPrincipal.style.backgroundImage = imagenGrande[3];
}
