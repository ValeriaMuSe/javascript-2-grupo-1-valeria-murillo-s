// Mini proyecto: Libreria
// Crear un programa que simule una librería. Debe tener las siguientes características:
// 1. Debe tener una clase Libreria que tenga las siguientes propiedades:
// - Nombre
// - Dirección
// - Libros y comics // lista de libros y comics
// - Debe contar un método que permita agregar libros y comics a la librería.

class Libreria {
  constructor (nombre, direccion, libros, comics) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.libros = libros
    this.comics = comics
  }
  
  ingresarLibro (libro) {
    this.libros.push(libro)
  }

  ingresarComic (comic) {
    this.comics.push(comic)
  }

}

const primerLibreria = new Libreria('Librería internacional', 'San José', ['Diario de Ana Frank', 'El principito', 'Alguien a quien conoces', 'Jurassic Park'],['Spiderman'])
console.log(primerLibreria)

const segundoLibreria = new Libreria('Librería Lehman', 'Alajuela', ['Metamorfosis'],['La liga de la justicia', 'Avengers'])
console.log(segundoLibreria)

// 2. Debe tener una clase Libro que represente un libro y tenga las siguientes propiedades: 
// título, autor, precio, cantidad y año.

// 3. Debe tener una clase Comic que herede de Libro y tenga las siguientes propiedades extras: 
// dibujante, editorial, volumen.

// 4.Los usuarios no pueden modificar datos de los libros o comics, pero sí pueden modificar la cantidad de libros disponibles, o el año, de igual 
// forma deben ser propiedades privadas tener en cuenta que para poder acceder y modificar las propiedades privadas debe usar getters y setters

// 5. Debe haber un método que permita obtener la información completa de un libro o comic, este debe llamarse "getInfo".

// 6. En caso de que la cantidad de libros o comics sea 0, debe mostrar un mensaje que diga "No hay ejemplares disponibles".

class Libro {
  #cantidad = '';
  #anio = '';
  constructor (titulo, autor, precio, cantidad, anio) {
    this.titulo = titulo
    this.autor = autor
    this.precio = precio
    this.cantidad = cantidad
    this.anio = anio
  }

  get getCantidad() {
    this.#cantidad;
  }

  set setCantidad (quantity) {
    this.#cantidad.push(quantity)
  }

  get getAnio() {
    this.#anio;
  }

  set setAnio(year) {
    this.#anio.push(year)
  }

  getinfo() {
    if (this.#cantidad == 0) {
      return 'No hay ejemplares disponibles'
    } else {
      return `El libro es ${this.titulo} y hay ${this.cantidad}`
    }
  }
}

const book1 = new Libro('Frankenstein', 'Mary Shelley', 11000, 5, 1797);
console.log(book1)

const book2 = new Libro('Boulevard', 'Flor M. Salvador', 15000, 0, 2020);
console.log(book2)
console.log(book2.getinfo())


class Comic extends Libro {
  constructor(titulo, autor, precio, cantidad, anio, dibujante, editorial, volumen) {
    super (titulo, autor, precio, cantidad, anio)
    this.dibujante = dibujante;
    this.editorial = editorial;
    this.volumen = volumen;
  }
  getinfo() {
    if (this.cantidad == 0) {
      console.log('No hay ejemplares disponibles')
    } else {
      return `El libro es ${this.titulo} y hay ${this.cantidad}`
    }
  }
}

const comic1 = new Comic('Spider-Man', 'Marvel', 9000, '2', '1962', 'Steve Ditko', 'Marvel', 1);
console.log(comic1)
console.log(comic1.getinfo())