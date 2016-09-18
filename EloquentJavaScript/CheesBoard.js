grid = 8;
cheesBoard = "";
for (var i = 1; i <= grid; i++) {
  if (i % 2 !== 0) {
    for (var j = 1; j <= grid; j++) {
      cheesBoard += j % 2 === 0 ? "#" : " ";
    }
  } else {
    for (var k = 1; k <= grid; k++) {
      cheesBoard += k % 2 !== 0 ? "#" : " ";
    }
  }
  cheesBoard += "\n";
}

console.log(cheesBoard);
