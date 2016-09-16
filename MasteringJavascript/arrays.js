//MARK: Arrays
var arr = new Array(1,2,3);
var arr = Array(1,2,3);
var arr = [1,2,3]; // <-- Preferred way

var colors = ['red', 'green', 'blue'];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(function(color) {
  console.log(color);
});

var myArray = ["33", "44", "55"];

myArray = myArray.concat("3", "2", "1");
console.log(myArray);

var list = myArray.join(" ~ ");
console.log(list);

var last = myArray.pop();
console.log(last);

myArray.push("3");
console.log(myArray);

var first = myArray.shift();
console.log(first, myArray);

console.log(myArray.unshift("4", "5"));

console.log(myArray.reverse());

console.log(myArray.sort(function(a,b) {
  return a - b;
}));
