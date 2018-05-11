// `The minimum of [18,5,7,24] is 5`
// Math.min(3,5,6,81,1,-8) // -8

// let inputs = process.argv.slice(2);
// let minimun = Math.min(...inputs);
// let result = `The minimum of [${inputs}] is ${minimun}`;
// console.log(result);


console.log(`The minimum of [${process.argv.slice(2)}] is ${Math.min(...process.argv.slice(2))}`);
