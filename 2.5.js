function summation(num) {
  let sum = 0;

  for (let index = 1; index <= num; index++) {
    sum += index;
  }
  return sum;
}

console.log(summation(6));
