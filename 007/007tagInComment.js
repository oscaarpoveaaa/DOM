/* Etiqueta en comentario: ¿Qué muestra este código?
<script>
  let body = document.body;
  body.innerHTML = "<!--" + body.tagName + "-->";
  alert( body.firstChild.data ); // ¿qué hay aquí?
</script> */

"use strict";

/* El código muestra BODY ya que el contenido del <body> se reemplaza por el texto <!--BODY-->,el texto es ahora el único nodo hijo, así que lo obtenemos en body.firstChild.
Esto cogería solo lo que hay dentro del texto y por eso da BODY */

