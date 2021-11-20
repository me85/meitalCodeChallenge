function accum(str) {
  //   debugger;
  let newArr1 = [];
  let newArr = str.split("");

  for (let index = 0; index < newArr.length; index++) {
    let element = newArr[index];
    if (element == element.toUpperCase()) {
      newArr1.push(element);
      let el = element.toLowerCase();
      el = el.repeat(index);
      newArr1.push(el);
    } else {
      let y = element.toUpperCase();
      newArr1.push(y);
      let x = element.repeat(index);
      newArr1.push(x);
    }
  }
  newArr = newArr1.join("");
  return newArr;
}
console.log(accum("CwAt"));

//   console.log(str.replace(regex, ));

// return str.replace(regex, "");

// const regex = /\-/g;

//   console.log(str.replace(regex, ));
