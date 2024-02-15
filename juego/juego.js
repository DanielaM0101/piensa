'use strict'
class JuegoMatematicas {
    constructor() {
      this.preguntas = [];
      this.respuestas = [];
      this.puntaje = 0;
    }
  
    agregarPregunta(pregunta, respuesta) {
      this.preguntas.push(pregunta);
      this.respuestas.push(respuesta);
    }
  
    mostrarPregunta() {
      const indice = Math.floor(Math.random() * this.preguntas.length);
      return this.preguntas[indice];
    }
  
    verificarRespuesta(respuestaUsuario) {
      const respuestaCorrecta = this.respuestas[indice];
      if (respuestaUsuario === respuestaCorrecta) {
        this.puntaje++;
        return true;
      } else {
        return false;
      }
    }
  
    obtenerPuntaje() {
      return this.puntaje;
    }
  }
  
  // Ejemplo de uso
  let juego = new JuegoMatematicas();
  
  juego.agregarPregunta("¿Cuánto es 2 + 2?", 4);
  juego.agregarPregunta("¿Cuánto es 5 - 3?", 2);
  juego.agregarPregunta("¿Cuánto es 6 x 7?", 42);
  
  let pregunta = juego.mostrarPregunta();
  alert(pregunta); // Imprime una pregunta aleatoria
  
  let respuestaUsuario = prompt("Ingresa tu respuesta:");
  let esCorrecta = juego.verificarRespuesta(respuestaUsuario);
  if (esCorrecta) {
    alert("¡Respuesta correcta!");
  } else {
    alert("Respuesta incorrecta.");
  }
  
  let puntaje = juego.obtenerPuntaje();
  alert(`Tu puntaje es: ${puntaje}`);
  