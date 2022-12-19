/* ¿Qué muestra el script?
<html>
<body>
  <script>
    alert(document.body.lastChild.nodeType);
  </script>
</body>
</html> */

"use strict";

/* Muestra 1 ya que al ejecutarse el script el último nodo es el propio script, ya que el navegador no ha procesado el resto de la página*/