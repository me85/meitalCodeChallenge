function nb_year(population, percent, aug, p) {
  let year = 0;
  while (population <= p) {
    population = population + population * (percent / 100) + aug;
    year++;
  }
  return year;
}

console.log(nb_year(1500, 5, 100, 5000));
