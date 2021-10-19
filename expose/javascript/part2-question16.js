
let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2,
};
  //console.log(statistics);
for (const pro in statistics) {
     //console.log(statistics.blackCars);
  if (pro.charAt(0) == 'r' || (statistics[pro]%2) == 1) {
     console.log(statistics[pro]);
}
}
