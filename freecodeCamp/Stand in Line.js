
//EJERCICIO 77//

/*Add the number to the end of the array, then remove the first element of array. The nextInLine function should then return the element that was removed.*/

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
return arr.shift();
   // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
