
// **** Constructors ****
// function EstudianteConstructor(nombre, apellidos, fechaNacimiento, id, nuevoIngreso, carrera, cursosMatriculados, cursosCursados) {
//   this.nombre = nombre;
//   this.nombre = nombre;
//   this.apellidos = apellidos;
//   this.fechaNacimiento = fechaNacimiento;
//   this.id = id;
//   this.nuevoIngreso = nuevoIngreso;
//   this.carrera = carrera;
//   this.cursosMatriculados = cursosMatriculados || [];
//   this.cursosCursados = cursosCursados || [];

//   this.matricular = function(curso) {
//     this.cursosMatriculados.push(curso)
//   }

//   this.retirarMatricula = function(curso) {
//     const index = this.cursosMatriculados.indexOf(curso);
//     if (index > -1) {
//       this.cursosMatriculados.splice(index, 1);
//     }

//     // this.cursosMatriculados = this.cursosMatriculados.filter(item => item !== curso); // devuelve un array con los elementos que cumplen con la condición
//   }

//   this.agregarCursosCursado = function (curso, nota) {
//     const cursoObj = {curso, nota};
//     cursoObj.estado = nota >= 70 ? 'aprobado' : 'reprobado';

//     if(nota >= 70) {
//       cursoObj.estado = 'aprobado'
//     } else {
//       cursoObj.estado = 'reprobado'
//     }

//     this.cursosCursados.push(cursoObj)
//   }
// }

// const estudiantePrueba = new EstudianteConstructor('Test', 'Testing', '1990-10-30', 'arq-0001', false, 'Arquitectura', ['Introducción a la pintura', 'Historia del Arte I'], [{curso: 'Prueba', nota: 50 }])

// console.log(estudiantePrueba);

// Classes practice
class estudianteClase {
  constructor(nombre, apellidos, fechaNacimiento, id, nuevoIngreso, carrera, cursosMatriculados, cursosCursados){
    this.nombre = nombre;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.id = id;
    this.nuevoIngreso = nuevoIngreso;
    this.carrera = carrera;
    this.cursosMatriculados = cursosMatriculados || [];
    this.cursosCursados = cursosCursados || [];
  }

  set matricularSet (curso) {
    this.cursosMatriculados.push(curso)
  }

  get matricularGet () {
    this.cursosMatriculados;
  }

  set retirarMatriculaSet (curso) {
    const index = this.cursosMatriculados.indexOf(curso);
    if (index > -1) {
      this.cursosMatriculados.splice(index, 1);
    }
  }

  get retirarMatriculaGet () {
    this.cursosMatriculados;
  }

  set cursosCursadosSet (curso) {
    const cursoObj = {curso: curso.curso, nota:curso.nota, estado: ''};
    if(curso.nota >= 70) {
      cursoObj.estado = 'aprobado'
    } else {
      cursoObj.estado = 'reprobado'
    }
    this.cursosCursados.push(cursoObj)
  }

  get cursosCursadosGet () {
    this.cursosCursados;
  }

}

const nicole = new estudianteClase('Nicole', 'Wallace', '1991-11-30', 'dis-0001', true, 'Diseño Gráfico', ['Teoría del Color', 'Historia del Arte II']);
nicole.matricularSet = 'Tipografía'

nicole.retirarMatriculaSet = 'Historia del Arte II'

nicole.cursosCursadosSet = {curso: 'Historia del Arte I', nota: '80'}
console.log(nicole)