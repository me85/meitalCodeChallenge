function toWeirdCase(text) {
  text = text.toLowerCase().split(" ");

  for (let index = 0; index < text.length; index++) {
    text[index] = text[index].split("");

    for (let j = 0; j < text[index].length; j++) {
      if (j % 2 === 0) {
        text[index][j] = text[index][j].toUpperCase();
      }
    }
    text[index] = text[index].join("");
  }
  return text.join(" ");
}

console.log(toWeirdCase("String you"));
