function centuryFromYear(year) {
  if (year > 1000) {
    return parseInt(year / 100 + 1);
  } else if (year > 100 && year < 1000) {
    return parseInt(year / 100 + 1);
  } else {
    return parseInt(year + 1);
  }
}

console.log(centuryFromYear(1640));
