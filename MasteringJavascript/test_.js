var _ = require('underscore');
var $ = require('jquery');
function print(n) {
  console.log(n);
}

_.each([1, 2, 3, 4], print);

console.log(_.range(10));
console.log(_.range(1, 11));
console.log(_.range(5, 30, 5));
console.log(_.range(0, -10, -1));
console.log(_.range(0));

console.log(_.range(3).map(function() {
  return 'a';
}));

console.log(_.map([1, 2, 3], function(num) {
  return num * 3;
}));

var sum = _.reduce([1, 2, 3], function(memo, num) {
  console.log(memo, num);
  return memo + num;
}, 0);

console.log(sum);

document.getElementById('ayuda').innerHTML = "Hola k ase"
