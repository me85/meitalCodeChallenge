// let array = [0, 1, 0, 1];

// function binary(binariArr) {
//     let result = 0;

//     for (let index = 0; index < binariArr.length; index++) {
//       result += binariArr[index] * Math.pow(2, index);
//       console.log(result);

// }

const arr = [0, 1, 1, 0];
const parseArray = (arr) => {
  const binaryString = arr.join("");
  return parseInt(binaryString, 2);
};
console.log(parseArray(arr));
