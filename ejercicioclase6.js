// 1. Crear una clase Persona que reciba nombre, apellido, id, edad y ubicación.
// Agregar un método que se llame saludar, y que retorne un saludo con el nombre y apellido de la persona.

class persona {
  constructor(nombre, apellido, id, edad, ubicacion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.id = id;
    this.edad = edad;
    this.ubicacion = ubicacion;
  }

  saludar() {
    return `Hola soy ${this.nombre} ${this.apellido}`;
  }
}

const susan = new persona('Susan', 'Evans', 1, 21, 'Costa Rica');
console.log(susan.saludar());

// 2. Crear una clase Empleado que herede de Persona y reciba un parámetro sueldo, posición, departamento, ingreso.
// Agregar un método que se llame imprimirSueldo, que imprima el sueldo anual del empleado.

// ¿Qué es extend? 👀
// El extend es para heredar de la clase padre.
class empleado extends persona {
  constructor(nombre, apellido, id, edad, ubicacion, sueldo, posicion, departamento, anioIngreso) {
    // Y, ¿qué es el super? 🙃
    // El super() llama al constructor de la clase padre, y si no lo hago, esa clase no se va a ejecutar.
    super(nombre, apellido, id, edad, ubicacion, sueldo, posicion, departamento, anioIngreso)

    this.sueldo = sueldo;
    this.posicion = posicion;
    this.departamento = departamento;
    this.anioIngreso = anioIngreso;
  }

  imprimirSueldo() {
    return `Mi sueldo anual es ${this.sueldo * 12}`
  }
}

const susanSueldo = new empleado('Susan', 'Evans', 1, 21, 'Costa Rica', 600000, 'Líder de equipo', 'Programación', 2019);
console.log(susanSueldo.imprimirSueldo());

// 3. Crear una clase Desarrollador que herede de Empleado, Desarrollador debe recibir un parámetro llamado lenguajes (tiene que ser un array 
// de objetos): debe incluir nombreDeLenguaje y conocimiento (es un valor numérico del 1 al 100). Agregar un método se 
// llame lenguajeDominado y que imprima el lenguaje que domina el desarrollador:
// el lenguaje que domina depende del valor que tenga en la propiedad conocimiento, de manera que se imprima el lenguaje con mayor valor numérico.
// Agregar un método que se llame agregarLenguaje para agregar un nuevo lenguaje al array de lenguajes.

// Este último ejercicio no logré resolverlo

class desarrollador extends empleado {
  constructor(nombre, apellido, id, edad, ubicacion, sueldo, posicion, departamento, anioIngreso, lenguajes) {
    super(nombre, apellido, id, edad, ubicacion, sueldo, posicion, departamento, anioIngreso, lenguajes)
    // this.lenguajes = lenguajes
    
    this.lenguajeDominado = function (nombreDeLenguaje, conocimiento) {
      const lenguajeObj = {nombreDeLenguaje, conocimiento, loSabe: ''};

      if (conocimiento === Math.max) {
        lenguajeObj.loSabe = 'Sí'
      } else if (conocimiento === Math.min) {
        lenguajeObj.loSabe = 'No'
      }

      this.lenguajeDominado.push(lenguajeObj)
    }
  }
}

const susanConocimiento = new desarrollador('Susan', 'Evans', 1, 21, 'Costa Rica', 600000, 'Líder de equipo', 'Programación', 2019);
susanConocimiento.lenguajeDominado = [{nombreDeLenguaje: 'JavaScript', conocimiento: 70},{nombreDeLenguaje: 'Java', conocimiento: 40}]

console.log(susanConocimiento);