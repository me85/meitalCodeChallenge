function nameIntoInitial(words) {
  words = words.split(" ");
  let first = words[0].slice(0, 1);

  let sec = words[1].slice(0, 1);

  words = `${first}.${sec}`;
  return words;
}

// Sam Harris => S.H

console.log(nameIntoInitial("Meital Drukman"));
