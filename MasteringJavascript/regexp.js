// NOTE: Data Structures and Manipulation

// MARK Regular Expresions

var pattern = /[abc]/;

console.log(pattern.test('a'));
console.log(pattern.test('d'));

pattern = /[^abc]/;
console.log(pattern.test('a'));
console.log(pattern.test('d'));

pattern = /[0-5]/;

console.log(pattern.test(3));
console.log(pattern.test(12345));
console.log(pattern.test(9));
console.log(pattern.test(6789));
console.log(/[0123456789]/.test("This is year 2015"));

var strToMatch = 'A Toyota! Race fast, safe car! A Toyota!';
var regeExAt = /Toy/;
var arrMatches = regeExAt.exec(strToMatch);
console.log(arrMatches);

regeExAt = /Toy/g;
arrMatches = strToMatch.match(regeExAt);
console.log(arrMatches);

strToMatch = 'Blue is your favorite color?';
regeExAt = /Blue/;
console.log(strToMatch.replace(regeExAt, "Red"));

console.log(strToMatch.replace(regeExAt, function(matchingText){
  return 'Red';
}));

var sColor = 'sun,moon,stars';
var reComma = /\,/;
console.log(sColor.split(reComma));

strToMatch = 'wooden bat, smelly Cat, a fat cat';
var re = /[bcf]at/gi;
arrMatches = strToMatch.match(re);
console.log(arrMatches);

strToMatch = 'i1,i2,i3,i4,i5,i6,i7,i8,i9';
re = /i[0-5]/gi;
arrMatches = strToMatch.match(re);
console.log(arrMatches);

//Negation
re = /i[^0-5]/gi;
var arrMatches = strToMatch.match(re);
console.log(arrMatches);

var strToMatch = '123-456-7890';
var re = /[0-9][0-9][0-9]-[0-9][0-9][0-9]/;
var arrMatches = strToMatch.match(re);
console.log(arrMatches);

var re = /\d\d\d-\d\d\d/;
arrMatches = strToMatch.match(re);
console.log(arrMatches);

var str = /behaviou?r/;
console.log(str.test("behaviour"));
console.log(str.test("behavior"));

console.log(/'\d+'/.test("'123'"));

var heartyLaugh = /Ha+(Ha+)+/i;
console.log(heartyLaugh.test("HaHaHaHaHaHaHaaaaaaaaaaa"));

console.log(/\bcat/.test('a black catalina'));
console.log(/\bcat/.test('tomcat'));

var match = /\d+/.exec("There are 100 ways to do this");
console.log(match);

//NOTE: Alternatives can be expresed using the pipe (|) character

console.log(/^test/.test('test of the string'));
console.log(/test$/.test('the string to test'));
console.log(/^test$/.test('test'));
console.log(/^test$/.test('the test string'));


var orig = "1234 5678";
var re = /(\d{4}) (\d{4})/;
var modifierStr = orig.replace(re, "$2 $1");
console.log(modifierStr);

//Greedy and lazy quantifiers

console.log(/\d+/.exec('123'));
console.log(/h.+l/.exec('hello'));
console.log(/h.?l/.exec('hello'));
console.log(/\w*?X/.exec('abcXXX'));

function trim(str) {
  return (str || "").replace(/^\s+|\s+$/g, "");
}

console.log("---"+trim("  test    ")+"----");

re=/\s+/g;
console.log('There are         a lot       of spaces'.replace(re, ' '));
