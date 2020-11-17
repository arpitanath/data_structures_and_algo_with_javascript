let input = [
  ["Bob", "87"],
  ["Mike", "35"],
  ["Bob", "52"],
  ["Jason", "35"],
  ["Mike", "55"],
  ["Jessica", "99"]
];
let obj = {},avg,maxAvg=0,name;
input.map(item => {
  if (obj.hasOwnProperty(item[0])) {
    obj[item[0]].push(parseInt(item[1]));
  } else {
    obj[item[0]] = [parseInt(item[1])];
  }
});
for (key in obj) {
  avg = obj[key].reduce((a, b) => a + b, 0) / obj[key].length;
  if (avg > maxAvg) {
    maxAvg = avg;
    name = key;
  }
}
console.log(maxAvg,name);
