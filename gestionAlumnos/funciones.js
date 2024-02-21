// Definir la clase Alumno
class Alumno {
    constructor(nombre, apellidos, edad) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.edad = edad;
      this.materiasInscritas = [];
      this.calificaciones = {};
    }
  }
  
  // Array para almacenar alumnos
  let alumnos = [];
  
  // Función para dar de alta un alumno
  function altaAlumno() {
    let nombre = prompt("Nombre del alumno:");
    let apellidos = prompt("Apellidos del alumno:");
    let edad = parseInt(prompt("Edad del alumno:"));
  
    let alumno = new Alumno(nombre, apellidos, edad);
    alumnos.push(alumno);
  }
  
  // Función para inscribir un alumno a una clase
  function inscribirAlumno() {
    let nombre = prompt("Nombre del alumno:");
    let alumno = alumnos.find(alumno => alumno.nombre === nombre);
    if (alumno) {
      let materia = prompt("Materia a inscribir:");
      alumno.materiasInscritas.push(materia);
      console.log(`Alumno ${alumno.nombre} inscrito en ${materia}`);
    } else {
      console.log("Alumno no encontrado");
    }
  }
  
  // Función para asignar calificaciones a un alumno
  function asignarCalificaciones() {
    let nombre = prompt("Nombre del alumno:");
    let alumno = alumnos.find(alumno => alumno.nombre === nombre);
    if (alumno) {
      let materia = prompt("Materia:");
      let calificacion = parseFloat(prompt("Calificación:"));
      alumno.calificaciones[materia] = calificacion;
      console.log(`Calificación ${calificacion} asignada a ${alumno.nombre} en ${materia}`);
    } else {
      console.log("Alumno no encontrado");
    }
  }
  
  // Función para crear un grupo y asignar alumnos
  function crearGrupo() {
    let grupo = prompt("Nombre del grupo:");
    let alumnosGrupo = [];
    let numAlumnos = parseInt(prompt("Número de alumnos en el grupo:"));
    for (let i = 0; i < numAlumnos; i++) {
      let nombre = prompt(`Nombre del alumno ${i + 1}:`);
      let alumno = alumnos.find(alumno => alumno.nombre === nombre);
      if (alumno) {
        alumnosGrupo.push(alumno);
      } else {
        console.log(`Alumno ${nombre} no encontrado`);
      }
    }
    console.log(`Grupo ${grupo} creado con éxito`);
    console.log("Alumnos del grupo:");
    console.log(alumnosGrupo);
  }
  
  // Función para buscar alumno por nombre
  function buscarPorNombre() {
    let nombre = prompt("Nombre del alumno a buscar:");
    let alumno = alumnos.find(alumno => alumno.nombre === nombre);
    if (alumno) {
      console.log(alumno);
    } else {
      console.log("Alumno no encontrado");
    }
  }
  
  // Función para buscar alumno por apellido
  function buscarPorApellido() {
    let apellido = prompt("Apellido del alumno a buscar:");
    let alumnosApellido = alumnos.filter(alumno => alumno.apellidos === apellido);
    if (alumnosApellido.length > 0) {
      console.log(alumnosApellido);
    } else {
      console.log("Alumnos con ese apellido no encontrados");
    }
  }
  
  // Función para obtener promedio de un alumno
  function promedioAlumno() {
    let nombre = prompt("Nombre del alumno:");
    let alumno = alumnos.find(alumno => alumno.nombre === nombre);
    if (alumno) {
      let calificaciones = Object.values(alumno.calificaciones);
      let promedio = calificaciones.reduce((acc, curr) => acc + curr, 0) / calificaciones.length;
      console.log(`Promedio de ${alumno.nombre}: ${promedio}`);
    } else {
      console.log("Alumno no encontrado");
    }
  }
  
  // Función para obtener promedio del grupo
  function promedioGrupo() {
    let grupo = prompt("Nombre del grupo:");
    // Aquí deberías tener una estructura de datos que relacione grupos con alumnos
    // Y luego calcular el promedio de calificaciones de ese grupo
  }
  
  // Función para ordenar alumnos por calificación ascendente
  function ordenarAscendente() {
    let alumnosOrdenados = alumnos.slice().sort((a, b) => {
      let promedioA = Object.values(a.calificaciones).reduce((acc, curr) => acc + curr, 0) / Object.values(a.calificaciones).length;
      let promedioB = Object.values(b.calificaciones).reduce((acc, curr) => acc + curr, 0) / Object.values(b.calificaciones).length;
      return promedioA - promedioB;
    });
    console.log("Alumnos ordenados ascendente:");
    console.log(alumnosOrdenados);
  }
  
  // Función para ordenar alumnos por calificación descendente
  function ordenarDescendente() {
    let alumnosOrdenados = alumnos.slice().sort((a, b) => {
  let promedioA = Object.values(a.calificaciones).reduce((acc, curr) => acc + curr, 0) / Object.values(a.calificaciones).length;
  let promedioB = Object.values(b.calificaciones).reduce((acc, curr) => acc + curr, 0) / Object.values(b.calificaciones).length;
  return promedioB - promedioA;
});
console.log("Alumnos ordenados descendente:");
console.log(alumnosOrdenados);
}
