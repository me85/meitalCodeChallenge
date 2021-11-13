function toCamelCase(str) {
  const regex = /\-/g;
  //   console.log(str.replace(regex, ));

  return str.replace(regex, "");
}

console.log(toCamelCase("the-stealth-warrior"));

// not working
