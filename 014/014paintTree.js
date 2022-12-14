/* scribe una función createTree que crea una lista ramificada 
ul/li desde un objeto ramificado. Por ejemplo: 

Hay dos formas para resolver esta tarea:
Crear el HTML para el árbol y entonces asignarlo a container.innerHTML.
Crear los nodos del árbol y añadirlos con métodos DOM.
Haz  ambas soluciones.
P.S. El árbol no debe tener elementos “extras” como <ul></ul> vacíos para las hojas.
*/

"use strict";

let data = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

let container = document.getElementById("container");
createTree(container, data); // crea el árbol en el contenedor
