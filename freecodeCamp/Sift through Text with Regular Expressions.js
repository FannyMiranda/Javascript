              //EJERCICIO 105//

/*Select all the occurrences of the word and in testString.

You can do this by replacing the . part of the regular expression with the word and.*/

// Setup
var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";

// Example
var expressionToGetSoftware = /software/gi;
var softwareCount = testString.match(expressionToGetSoftware).length;
  

// Only change code below this line.

var expression = /and/gi;  // Change this Line
var expressionToGetAnd = testString.match(expression).length;  // Change this Line

// Only change code above this line

// This code counts the matches of expression in testString
var andCount = testString.match(expression).length;

