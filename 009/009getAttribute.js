/* Escribe el código para obtener el atributo data-widget-name 
del documento y leer su valor.
<!DOCTYPE html>
<html>
<body>
  <div data-widget-name="menu">Elige el género</div>
</body>
</html> */

"use strict";

let menu = document.querySelector('[data-widget-name]');

alert(menu.dataset.widgetName);

