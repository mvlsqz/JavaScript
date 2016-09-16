//var nothing = {};
var author = {
  "firstname": "Douglas",
  "lastname": "Crockford"
};

var author = {
  'firstname' : "Douglas",
  'lastname' : "Crockford",
  'book' : {
    title: "JavaScript - The Good Parts",
    pages: "172"
  }
};

console.log(author.firstname);
console.log(author.lastname);
console.log(author.book.title);
//console.log(author.age || "No Age Found"); // useful trick using or operator

var meetingRoom = {};

meetingRoom.book = function(roomId) {
  console.log("booked meeting room - " + roomId);
};

meetingRoom.book("VL");

//A function returns nothing and creates nothing
function Player() {
}

// add a function to the prototype property of the function
Player.prototype.usesBat = function() {
  return true;
};

// We call player() as a function and prove that nothing happens
var crazyBob = Player();
if (crazyBob === undefined) {
  console.log("CrazyBob is not defined");
}

// Now we call the player() as a constructor along with 'new'

// 1. The instance is created
// 2. method usesBat() is derived from the prototype of the function
var swingJay = new Player();

if (swingJay && swingJay.usesBat && swingJay.usesBat()) {
  console.log("SwingJay exists and can use bat");
}

// MARK: Instance properties Versus prototype properties

function Player() {
  this.isAvailable = function() {
    return "Instance method says - he is hired";
  };
}


Player.prototype.isAvailable = function() {
  return "Prototype method says - he is Not hired";
};

var crazyBob = new Player();
console.log(crazyBob.isAvailable());

// NOTE: this keyword
function globalAlias() {
  return this;
}

console.log(globalAlias());

/*
 *var f = {
 *  name: "f",
 *  func: function() {
 *    return this;
 *  }
 *};
 *
 *console.log(f.func());
 */

// var member = "global";

function f() {
  this.member = "f";
}

var o = new f();
console.log(o.member);

/*
 *function Player() {
 *  isAvailable = false;
 *}
 *
 *var crazyBob = new Player();
 *Player.prototype.isAvaible = function() {
 *  return isAvailable;
 *};
 */

//console.log(crazyBob.isAvaible());

function Player(name, sport, age, country) {

  this.constructor.noOfPlayers++;

  //Private Properties and Functions
  //Can only be viewed, edited or invoked by privileged members
  var retirementAge = 40;
  var available = true;
  var playerAge = age ? age : 18;
  function isAvailable() {
    return available && (playerAge < retirementAge);
  }
  var playerName = name ? name : "Unknown";
  var playerSport = sport ? sport : "Unknown";

  // Privileged Methods
  // Can be invoked from outside and can access private members
  // Can be replaced with public conterparts
  this.book = function() {
    if (!isAvailable) {
      this.available = false;
    } else {
      console.log("Player is unavailable");
    }
  };

  this.getSport = function() {
    return playerSport;
  };

  // Public properties, modifiable from anywhere
  this.batPreference = "Lefty";
  this.hasCelebGirlfriend = false;
  this.endorses = "Super Brand";


}

// Public methods - can be read or written by anyone
// Can only access public and prototype properties

Player.prototype.dateCeleb = function() {
  this.hasCelebGirlfriend = true;
};

Player.prototype.fixEyes = function() {
  this.wearGlasses = false;
};

// Prototype Properties - can be read or written by anyone (or overridden)
Player.noOfPlayers = 0;


;(function PlayerTest() {
  //New instance of the Player object created
  var cricketer = new Player("Vivian", "Cricket", 23, "England");
  var golfer = new Player("Pete", "Golf", 32, "USA");
  var soccer = new Player("Jhon", "Soccer", 25, "Germany");
  console.log("So far there are " + Player.noOfPlayers + " in the guild");
  //Both these functions share the common 'Player.prototype.wearGlasses' variable
  cricketer.fixEyes();
  golfer.fixEyes();

  cricketer.endorses = "Other Brand"; //Public variable can be updated

  //Both Player's public method is now changed via their prototype
  Player.prototype.fixEyes = function() {
    this.wearGlasses = true;
  };

  //Only Cricketer's function is changed
  cricketer.switchHands = function() {
    this.batPreference = "undecided";
  };

  soccer.number = function() {
    this.idNumber = 10;
  };

  console.log(cricketer);
  console.log(golfer);
  console.log(soccer);
})();

function Person(){}

Person.prototype.cry = function () {
    console.log('Crying!');
};

function Child(){}

Child.prototype = new Person();
var aChild = new Child();

console.log(aChild instanceof Child);
console.log(aChild instanceof Person);
console.log(aChild instanceof Object);


function Employee() {
    this.name = '';
    this.dept = 'None';
    this.salary = 0.00;
}

function Manager() {
    Employee.call(this);
    this.reports = [];
}

Manager.prototype = Object.create(Employee.prototype);

function IndividualContributor() {
    Employee.call(this);
    this.active_projects = [];
}

IndividualContributor.prototype = Object.create(Employee.prototype);

function TeamLead() {
    Manager.call(this);
    this.dept = "Software";
    this.salary = "100000";
}

TeamLead.prototype  = Object.create(Manager.prototype);

function Engineer() {
    TeamLead.call(this);
    this.dept = "JavaScript";
    this.desktop = "b4323";
    this.salary = 80000;
}

Engineer.prototype = Object.create(TeamLead.prototype);

var genericEmployee = new Employee();

console.log(genericEmployee);

var karen = new Manager();
karen.name = "Karen";
karen.reports = [1, 2, 3];

console.log(karen);

var jason = new TeamLead();
jason.name = "Jason";
console.log(jason);

// NOTE: Getters & Setters
var person = {
    'firstName': "Albert",
    'lastName': "Einstein",
    'setFirstName': function(_firstname) {
        this.firstName = _firstname;
    },
    'setLastName': function(_lastname) {
        this.lastName = _lastname;
    },

    'getFullName': function() {
        return this.firstName + ' ' + this.lastName;
    }
};

person.setFirstName('Nicola');
person.setLastName('Tesla');
console.log(person.getFullName());


//MARK: OOP using underscore.js
var _ = require('underscore');

var testob = {
    'name': 'Albert',
    'age': 90,
    'profession': 'Physicist'
};

console.log(_.keys(testob));

function Scientist() {
    this.name = 'Albert';
    this.age = 90;
}

Scientist.prototype.married = true;

aScientist = new Scientist();

console.log(_.keys(aScientist));
console.log(_.allKeys(aScientist));
console.log(_.values(aScientist));

var lst = _.mapObject(aScientist, function(value, key) {
    if (key === "age") {
        return value + 10;
    } else {
        return value;
    }
});

console.log(lst);

console.log(_.pick(testob, 'name', 'age'));
console.log(_.pick(testob, function(val, key, object){
    return _.isNumber(val);
}));
