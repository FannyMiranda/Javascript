// ej 7
// crea un array con la gente que su nombre empieza por J o L
// utilizando el metodo filter de los arrays
// y muestralo por consola.


let gente = [
  {nombre:'Jamiro', edad:45},
  {nombre: 'Juan', edad: 35},
  {nombre: 'Paco', edad:34},
  {nombre: 'Pepe', edad:14},
  {nombre: 'Pilar', edad:24},
  {nombre: 'Laura', edad:24},
  {nombre: 'Jenny', edad:10},
]
 let filtrado = gente.filter(function(element){
     if(element.nombre [0] ==="J" || element.nombre[0]==="L"){
         return element.nombre;
     }
 })
    console.log(filtrado);
    