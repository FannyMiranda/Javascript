// Las funciones de flecha son una de las nuevas características más divertidas de ES6.

// En este ejercicio, nos enfocaremos en uno de los usos más comunes de las funciones de flecha: acortar funciones muy simples. En ES6, puede escribir una función de flecha como:

// x => x + 1

// y eso significa lo mismo que el código ES5:

// función (x) {return x + 1; }

// Muy bien, ¿sí? Puede poner cualquier expresión en el lado derecho de =>, y se convertirá en el valor de retorno. Esto es especialmente útil cuando se realizan operaciones como mapa o filtro en matrices.

// Tenga en cuenta que si necesita varios argumentos, deberá envolverlos entre paréntesis, de esta manera:

// (x, y) => x + y

// ## Challenge

// Se le dará una cantidad variable de argumentos (process.argv [2] hacia adelante) a su programa, todos los cuales serán cadenas. Utilice las funciones de flecha para realizar una operación de reducción de mapa sobre ellos, antes de enviarlos a la consola. Es decir, su solución debería comenzar con algo como:

// var inputs = process.argv.slice (2);
// var result = inputs.map (/ * ¿qué va aquí? * /)
// .reduce (/ * ¿qué va aquí? * /);

// En particular, debes:

// * Asigna todas las cadenas entrantes a su primer personaje
// * Reduce el resultado al concatenarlos juntos

// Entonces una entrada de ["Hola", "flecha", "funciones"] se convertiría en "Haf".

// Para mostrar su trabajo, debe enviar la transformación a la consola. El ejemplo anterior sería:

// [Hola, flecha, funciones] se convierte en "Haf"

var inputs = process.argv.slice(2);
var letters = inputs.map(item => item[0])
let result = letters.reduce((item, sum) => item + sum, '')

console.log( `[${inputs}] becomes "${result}"` );
