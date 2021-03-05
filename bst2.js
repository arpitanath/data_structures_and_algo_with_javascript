const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var lines = [];

rl.on("line", line => {
  lines.push(line);
}).on("close", () => {
  let count = 1;
  let ratio;
  let obj = {};
  for (let i = 1; i < lines.length; i++) {
    let num = lines[i].split(" ");
    if (!isNaN(num[0])) {
      ratio = num[2] / num[1];
      obj[i] = [parseInt(num[0]), ratio];
    }
  }
  let keys = Object.keys(obj);
  for (key of keys) {
    console.log(`Recipe # ${count}`);
    let n=parseInt(key)+1;
    var baker;
    var ingredient;
    for(let i =n ;i<n+obj[key][0];i++){
       ingredient = lines[i].split(" ");
       if(ingredient[2]==='100.0'){
            baker = (ingredient[1]*obj[key][1])/100;
       }
    } 
    for(let i =n ;i<n+obj[key][0];i++){
        let chijji = lines[i].split(" ");
        console.log(`${chijji[0]} ${(Math.round(chijji[2]*baker * 10)/10).toFixed(1)}`)
    } 
    count++;
    console.log("----------------------------------------");
  }

  process.exit(0);
});
