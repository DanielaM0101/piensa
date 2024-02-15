'use strict'

class NivelJuego {
    constructor(nombre, dificultad, objetivo) {
      this.nombre = nombre;
      this.dificultad = dificultad;
      this.objetivo = objetivo;
    }
  
    obtenerNombre() {
      return this.nombre;
    }
  
    obtenerDificultad() {
      return this.dificultad;
    }
  
    obtenerObjetivo() {
      return this.objetivo;
    }
  }
  
  // Ejemplo de uso
  let nivel1 = new NivelJuego("Nivel 1", "Fácil", "suma entre dos numeros");
  alert(nivel1.obtenerNombre()); // Output: Nivel 1
  alert(nivel1.obtenerDificultad()); // Output: Fácil
  alert(nivel1.obtenerObjetivo()); // Output: suma
  