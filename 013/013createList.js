/* Escribir una interfaz para crear una lista de lo que ingresa un 
usuario. Para cada item de la lista:
Preguntar al usuario acerca del contenido usando prompt.
Crear el <li> con ello y agregarlo a <ul>.
Continuar hasta que el usuario cancela el ingreso (presionando Esc o con un ingreso 
vacío). */
/* Todos los elementos deben ser creados dinámicamente.
Si el usuario ingresa etiquetas HTML, deben ser tratadas como texto.  */

"use strict";

//Creamos un Ul y lo añadimos despues del Body
let ul = document.createElement("ul");
document.body.append(ul);

while (true) {
    //Vamos pidiendo el dato al usuario y guardandolo
  let dato = prompt("Introduce el dato: ");

  if (!dato) {
    //Si dato es nulo hacemos un break para salir
    break;
  }

  //Creamos el Li
  let li = document.createElement("li");

  //Y le añadimos el contenido del dato recogido anteriormente
  li.textContent = dato;
  //Añadimos despues del Ul el Li con el contenido guardado
  ul.append(li);
}
