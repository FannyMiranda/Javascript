
                            //EJERCICIO 46//

/*Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr*/

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line

for(var i = 0; i <arr.length; i ++) { 
for (var j = 0; j <arr [i] .length; j ++) { 
product *= arr [i] [j]; 
} 
} 
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll ([[1,2, 1], [3, 4], [5,6,7]]);