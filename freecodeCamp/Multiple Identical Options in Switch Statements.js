              //EJERCICIO 96//
/*Write a switch statement to set answer for the following ranges:
1-3 - "Low"
4-6 - "Mid"
7-9 - "High"

Note
You will need to have a case statement for each number in the range.*/



function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1:
      answer="Low";
    case 2:
      answer="Low";
    case 3:
      answer="Low";
      result="1,2, or 3";
      break;
    
    case 4:
      answer="Mid";
    case 5:
      answer="Mid";
    case 6:
      answer="Mid";
      result="4,5 or 6";
      break;
      
    case 7:
      answer="High";
    case 8:
      answer="High";
    case 9:
      answer="High"
      result="7,8 or 9";
      break
  }
  
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
sequentialSizes(1);

