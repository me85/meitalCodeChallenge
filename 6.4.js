function islesogram(str) {
  let string = str.toLowerCase();
  string = string.split("");

  let x = string.filter((e, i, a) => a.indexOf(e) !== i);

  let y = x.filter((e, i, a) => a.indexOf(e) === i);

  if (y.length > 0) {
    return false;
  } else {
    return true;
  }
}

console.log(islesogram("Dermatlog"));
