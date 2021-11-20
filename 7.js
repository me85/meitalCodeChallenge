let array = ["d", "e", "r", "m", "a", "t", "o", "l", "o", "g"];

array.forEach((element) => {
  console.log(element.toUpperCase());
});

const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);

let numbers = [1, 4, 9];
let roots = numbers.map(function (num) {
  return Math.sqrt(num);
});

console.log(roots);
