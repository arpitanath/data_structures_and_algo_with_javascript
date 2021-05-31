// Find the starting and ending indices of all repeated characters from a string.

// const input =“hellooooloo”;
// const op = getRepeated(input);
// console.log(op)  -----> [(2,3), (4,7), (9,10)]

function getRepeated(str) {
  let result = [],
    checkLetter = str[0];
  (tempIndex = 0), (count = 0);
  for (let i = 1; i < str.length; i++) {
    if (checkLetter === str[i]) {
      count++;
    } else {
      if (count !== 0) {
        result.push([tempIndex, tempIndex + count]);
      }
      count = 0;
      checkLetter = str[i];
      tempIndex = i;
    }
  }
  if (count !== 0) {
    result.push([tempIndex, tempIndex + count]);
  }
  return result;
}

const input ="hellooooloo";
const op = getRepeated(input);
console.log(op)