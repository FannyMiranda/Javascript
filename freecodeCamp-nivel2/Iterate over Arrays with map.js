              //EJERCICIO 113//

/*Use the map function to add 3 to every value in the variable oldArray, and save the results into variable newArray. oldArray should not change.*/


var oldArray = [1,2,3,4,5];

// Only change code below this line.
var newArray= oldArray.map(function(val){
  return val + 3;

});  

console.log(oldArray);
console.log(newArray);

