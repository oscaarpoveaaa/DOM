/* Reloj coloreado con setInterval
Crea un reloj coloreado como aquí: 
Usa HTML/CSS para el estilo, JavaScript solamente actualiza la hora en elements. */

"use strict";

let temporizador;

function refrescar() {
  let reloj = document.getElementById("reloj");
  let fecha = new Date();

  let horas = fecha.getHours();
  //Cogemos el primer hijo que en este caso serian las horas y le asignamos el valor de las horas
  reloj.children[0].innerHTML = horas;

  let minutos = fecha.getMinutes();
  //Cogemos el segundo hijo que en este caso serian los minutos y le asignamos el valor de los minutos
  reloj.children[1].innerHTML = minutos;

  let segundos = fecha.getSeconds();
  //Cogemos el tercer hijo que en este caso serian los segundos y le asignamos el valor de los segundos
  reloj.children[2].innerHTML = segundos;
}

function startReloj() {
  if (!temporizador) {
    //Aqui al darle al empezar llama a la función refrecar y te muestra la hora segundo por segundo al ponerle el intervalo de 1000
    temporizador = setInterval(refrescar, 1000);
  }
  refrescar(); 
}

function pararReloj() {
  //Le quita el intervalo de 1 segundo y dejaria de refrescarse
  clearInterval(temporizador);
  temporizador = null; 
}
