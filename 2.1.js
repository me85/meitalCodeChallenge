// Ex2.1 - Sum of lowest numbers
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive i ntegers.
//  No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
let arr1 = [5, 6, 2, 3, 7];

function sunOfLowest(array) {
  let first;
  let second;
  for (let index = 0; index < array.length; index++) {
    if (array[index] < first) {
      second = first;
      first = array[index];
    } else if (array[index] < second && array[index] != first) {
      second = array[index];
    }
  }
}

console.log(sunOfLowest([6, 7, 3, 2]));
