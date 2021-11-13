function basicOp(str, num1, num2) {
  let result = eval(num1 + str + num2);
  return result;
}

console.log(basicOp("*", 3, 8));
