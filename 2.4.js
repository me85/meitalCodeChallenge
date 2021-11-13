let arr1 = [3, 1, 1, 1, 1, 1];

function findUniq(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[0];
    const elemnt3 = array[1];
    let element2 = array[index];

    if (element !== element2 && element !== elemnt3) {
      return element;
    } else if (element !== element2) {
      return element2;
    }
  }
}

console.log(findUniq(arr1));
