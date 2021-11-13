function peopleOnBus(array) {
  let remainPeople;
  let sumIn = 0;
  let sumOut = 0;

  for (let index = 0; index < array.length; index++) {
    sumIn += array[index][0];
    sumOut += array[index][1];
  }

  return (remainPeople = sumIn - sumOut);
}

let arr = [
  [0, 0],
  [5, 0],
  [4, 3],
  [7, 5],
  [1, 1],
];

console.log(peopleOnBus(arr));
