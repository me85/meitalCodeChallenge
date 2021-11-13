function maskify(str) {
  let newstr;
  let sub = str.slice(-4);
  //   console.log(sub); //ippy
  let cover = str.slice(0, -4);
  newstr = cover.replace(/\S/g, "#");

  //   console.log(newstr);
  return `${newstr}${sub}`;
}

console.log(maskify("8"));

// let text = "Is this all there is?";
// let pattern = /\S/g;
