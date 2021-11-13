function longestWord(words) {
  words = words.split(" ");
  wordsNum = [];

  for (let index = 0; index < words.length; index++) {
    const element = words[index].length;
    wordsNum.push(element);
  }
  let x = Math.max(...wordsNum);
  return x;
}

words1 = "hi love drukman drukmandrukman";

console.log(longestWord(words1));
