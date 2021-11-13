// Ex1.1 - Yes or No
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

let trueOrFalse = (bool) => {
  if (bool === true) {
    return "YES";
  } else if (bool === false) {
    return "NO";
  }
};

console.log(trueOrFalse(true));
