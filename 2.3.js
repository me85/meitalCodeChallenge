function findNextSquare(preNum) {
  let nextNum = preNum + 1;

  nextNum = Math.sqrt(nextNum);

  if (Number.isInteger(nextNum)) {
    return "its perfect number";
  } else {
    return -1;
  }
}

console.log(findNextSquare(114));
