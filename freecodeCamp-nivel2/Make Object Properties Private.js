              //EJERCICIO 113//
/*Now try it yourself! Modify the Bike constructor to have a private property called gear and two public methods called getGear and setGear to get and set that value.*/



var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var Bike = function() {
  var gear = 10;
  //public methods


    
  this.getGear = function() {
    return gear;
  };
  
  this.setGear = function (change){
    gear = change;

};
};

var myCar = new Car();

var myBike = new Bike();



