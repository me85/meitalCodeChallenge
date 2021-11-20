function countDuplicate(str) {
  let string = str.toLowerCase();
  string = str.split("");

  //   console.log(string);

  let x = string.filter((e, i, a) => a.indexOf(e) !== i);
  console.log(x);

  let y = x.filter((e, i, a) => a.indexOf(e) === i);
  console.log(y);
  y = y.length;

  return y;
}

console.log(countDuplicate("lndivisibbbbbilty"));
