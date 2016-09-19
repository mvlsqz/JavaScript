//MARK some funcion basics
var square = function(x) {
  return x * x;
};

console.log(square(12));

var makeNoise = function() {
  console.log("Pling!");
};

makeNoise();

var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++) {
    result *= base;
  }

  return result;
};

console.log(power(2, 10));

//NOTE: Parameters and scopes
var x = "outside";

var f1 = function() {
  var x = "inside f1";
};

f1();
console.log(x);

var f2 = function() {
  x = "inside f2";
};

f2();
console.log(x);

//NOTE: Nested scope
var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++) {
      result += "-";
    }
  };

  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++) {
      result += "'";
    }
    result += "\\";
  };
  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape());

//NOTE: optional arguments
function power(base, exponent) {
  if (exponent === undefined) {
    exponent = 2;
  }
  var result = 1;
  for (var count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
console.log(power(4,3));

//NOTE: Closure
function wrapValue(n) {
  var localVariable = n;
  return function() {
    return localVariable;
  };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);

console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5));

//NOTE: Recursion
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent -1);
  }
}

console.log(power(2,3));

function findSolution(target) {
  function find(start, history) {
    if (start == target) {
      return history;
    } else if (start > target){
      return null;
    } else {
      return find(start + 5, "(" + history + " + 5)") || find(start * 3, "(" + history + " * 3)");
    }
  }
  return find(1, "1");
}

console.log(findSolution(28));
