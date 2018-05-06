// ej 5
// crea un array con la gente que empieza por J
// Sin utilizar el metodo filter de los arrays
// Utilizad el bucle for of
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
for (let a of gente){
    if(a.nombre[0]==="J" ){
        console.log(a.nombre);
    }
}
       




