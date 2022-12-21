/* CreateTextNode vs innerHTML vs textContent: Tenemos un 
elemento DOM vacio elem y un string text. ¿Cuáles de estos 3 comandos harán 
exactamente lo mismo? Pon un ejemplo.
elem.append(document.createTextNode(text))
elem.innerHTML = text
elem.textContent = text */

"use strict";

let texto = "Ejemplo";
  
  //Crea un nuevo nodo texto con el texto dado.
  ej1.append(document.createTextNode(texto));

  
  ej2.innerHTML = texto
  //Estos 2 hacen exactamente lo mismo ya que el otro si tuviera algo de texto lo añadiria despues y no lo sustituye
  ej3.textContent = texto;
