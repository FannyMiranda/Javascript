let nombre = process.argv[2]

let minusculasNombre = nombre.toLowerCase();

let resultado = `Hello, ${nombre}!
Your name lowercased is "${minusculasNombre}".`

console.log(resultado);


// console.log(`Hello, ${process.argv[2]}!
// Your name lowercased is "${process.argv[2].toLowerCase()}".`);

/*Se le asignará un nombre como primer argumento de su programa 
(process.argv [2]). Deberías generar un mensaje de dos líneas, 
primero saludando a esa persona y luego diciéndoles su nombre en 
minúscula. Por ejemplo, si el nombre era "Domenic", generaría:

    Hola, Domenic!
    Su nombre en minúscula es "domenic".

Puede comenzar haciendo esto usando constructos de ES5 si lo desea, 
pero la solución correcta debe usar una única cadena de plantilla de 
ES6 y no usar el operador +.*/