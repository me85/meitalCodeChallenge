function longest(s1, s2) {
  let string = s1 + s2;
  string = string.split("");

  console.log(string);

  let y = string.filter((e, i, a) => a.indexOf(e) === i);
  console.log(y);
}

longest("abcdkj", "abcdswtr");
