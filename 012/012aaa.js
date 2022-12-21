/* En el ejemplo de abajo, la llamada table.remove() quita la tabla del 
documento. Pero si la ejecutas, puedes ver que el texto “aaa”` es aún visible. ¿Por qué 
ocurre esto? */

"use strict";

/* Sigue apareciendo ya que la tabla esta mal, el navegador intenta corregirla porque dentro de <table> 
no deberia de haber nada por lo que si eliminamos la tabla ese texto se sale fuera y por eso se mantiene  */


