var person = {
    name: 'Albert Einstein',
    age: 66,
    greet: function() {
        console.log('Hello ', this.name);
    }
};

person.greet();

var Person = function(name) {
  this.name = name;
};

Person.prototype.greet = function() {
  return this.name;
};

var albert = new Person('Albert Einstein');

console.log(albert.greet());

var santa = {
  say : function() {
    return "ho ho ho";
  },

  fly : function() {
    return "en su trineo";
  }
};


console.log("Santa dice: ", santa.say());
console.log("Santa vuela: ", santa.fly());


/*
 MARK: Working with closures
 NOTE: Cuando JavaScript encuentra en el código un closure le indica al Garbage Collector que no destruya las variables (están quedan guardadas o encerradas) que la función "interna" necesita para su correcta ejecución. Por lo tanto, a pesar de que las variables que esta función utiliza se encuentran en otro ámbito en el momento de su ejecución, JavaScript guardó una referencia al valor de las mismas y por lo tanto siempre están accesibles para la función. Podríamos decir que este es el secreto o la magia de los closures.
*/


/*var outer = 'I am outer';
 *function outerFn() {
 *  console.log(outer);
 *}
 *
 *outerFn();
 */

outer = 'Outer';
var copy;

function outerFn() {

  var inner = 'Inner';

  function innerFn() {

    console.log(outer);

    console.log(inner);
  }

  copy = innerFn;
}

outerFn();
copy();

function personalizedGreet(name) {
  var greet = function() {
    return hello + name;
  };
  var hello = "Hello ";
  return greet;
}

var greeting = personalizedGreet("Oscar");
console.log(greeting());

function constIncrease(amount) {
  var ten = 10;
  var codeFun =  function() {
    console.log(ten);
  };
  ten += amount;
  return codeFun;
}

var execute = constIncrease(5);
execute();

function personalizedGreet2(name) {
  var hello = "Hello ";
  return function() {
    console.log(hello + name);
  };
}

// creamos 2 closures distintos
var greet1 = personalizedGreet2("Pedro");
var greet2 = personalizedGreet2("María");

greet1();
greet2();

var gExecute1 = null;
var gExecute2 = null;
var gExecute3 = null;

//function createClosure() {
//  var num = 10;
//  gExecute1 = function() {
//    console.log(num);
//  };
//
//  num++;
//  gExecute2 = function() {
//    console.log(num);
//  };
//
//  num = "Toma ya!!";
//  gExecute3 = function() {
//    console.log(num);
//  };
//}
//
//createClosure();
//gExecute1();
//gExecute2();
//gExecute3();
//
function createClosure() {
  var num = 10;
  gExecute1 = function() {
    console.log(num);
  };
  gExecute2 = function() {
    console.log(++num);
  };
  gExecute3 = function() {
    console.log(num = "Toma ya!!");
  };
}

createClosure();

gExecute1();
gExecute2();
gExecute3();

// NOTE: llamamos de nuevo a gExecute1()
gExecute1();

function testLoop(length) {
  var list = [];
  for (var i = 0, l = length; i <= l; i++) {
    list[i] = "item " + i;
  }

  return function() {
    console.log("i = " + i +
      "\n" + "list[" +
      i + "] = " + list[i]);
  };
}

var execute = testLoop(5);
execute();

// XXX: Closure Funciones retardadas

function additionNumber(a, b) {
  return function() {
    console.log(a + " + " + b + " = " + (a + b ));
  };
}

var execute = additionNumber(10, 40);
setTimeout(execute, 3000);

function Constructor(msjPrivado, msjPublico) {
  var propiedadPrivada = msjPrivado;
  this.propiedadPublica = msjPublico;

  var that = this;

  var metodoPrivado = function() {
    console.log(propiedadPrivada);
    console.log(that.propiedadPublica);
  };

  this.metodoPublico = function() {
    metodoPrivado();
  };
}

var obj = new Constructor("mensaje privado", "mensaje público");
obj.metodoPublico();

var outer = 'outer';
var copy;

function outerFn() {
  var inner = 'inner';
  function innerFn(param) {
    console.log(outer);
    console.log(inner);
    console.log(param);
    console.log(magic);
  }

  copy = innerFn;
}

console.log(magic);

var magic="Magic";
outerFn();
copy('copy');

function delay(message) {
  setTimeout(function timerFn() {
    console.log( message );
  },  1000);
}

delay( "Hello World");


// XXX: Private Variables Example

function privateTest() {
  var points = 0;
  this.getPoints = function() {
    return points;
  };
  this.score = function() {
    points++;
  };
}

var private = new privateTest();
private.score();
console.log(private.points); //undefined
console.log(private.getPoints());

// XXX: Loops and closures
// WRONG!
// for (var i = 0, l = 5; i <= l; i++) {
//   setTimeout( function delay() {
//     console.log( i );
//   }, i * 100);
// }
//
// // GOOD!
// for (var i = 0, l = 5; i <= l; i++) {
//   // Using a IIFE
//   (function(j) {
//     setTimeout( function delay() {
//       console.log( j );
//     }, j * 100);
//   })(i);
// }


// MARK: MODULES
var superModule = (function() {
  var secret = 'supersecretkey';
  var passcode = 'nuke';

  function getSecret() {
    console.log( secret );
  }

  function getPassCode() {
    console.log( passcode );
  }

  return {
    getSecret: getSecret,
    getPassCode: getPassCode
  };
})();

superModule.getSecret();
superModule.getPassCode();

// MARK: Regular Expressions

