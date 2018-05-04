                            //EJERCICIO 38//

//Agregue una "bark"propiedad myDogy configúrela con un sonido de perro, como "woof". Puede usar la notación de punto o corchete.//



var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup //
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

// Only varchange code below this line.//
myDog.bark ="woof";

                            //EJERCICIO 39//

//Delete the "tails" property from myDog. You may use either dot or bracket notation.//


// Example//
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

// Setup//
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"],
  "bark": "woof"
};

// Only change code below this line.//

delete myDog.tails;


                            //EJERCICIO 40//

/*Instructions
Convert the switch statement into a lookup table called lookup. Use it to lookup val and assign the associated string to the result variable.*/

// Setup
function phoneticLookup(val) {
  var result = "";

    // Only change code below this line
  var lookup={
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
    
  };
  
  result = lookup[val];

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");


                            //EJERCICIO 41//


/*Instructions
Modify the function checkObj to test myObj for checkProp. If the property is found, return that property's value. If not, return "Not Found".*/

// Setup//
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here//
  if (myObj.hasOwnProperty(checkProp)){
  return myObj[checkProp];
}else if (myObj.hasOwnProperty(checkProp)!==true){
  return "Not Found";
}else{
  return "Change Me!";
}
}

// Test your code by modifying these values//
checkObj("gift");

                            //EJERCICIO 42//

/*Use a for loop to work to push the values 1 through 5 onto myArray.*/

// Example
var myArray = []

for (var i = 0; i < 5; i++) {
  myArray.push(i);
}

// Setup
var myArray = [];
for (var i=1; i<6; i++){
  myArray.push(i);
}
