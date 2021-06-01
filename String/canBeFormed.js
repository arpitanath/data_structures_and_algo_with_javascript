// The next problem is a String Backtracking approach, an extension of the previous one,
// where I have to check if I can form a word in the dictionary by removing one or more
// repeated letters.

// const dictionary = {
//     'hellolo': true
// };
// const input = “hellooooloo”;
// const op = canBeFormed(input);
// console.log(op)  -----> true,
// because by deleting the repeated characters of `o` we can form `hellolo` which is present
// in the dictionary

let dictionary = {
  hellolo: true
};

function canBeFormed(str) {
  let objDictionary = {},
    objStr = {};
  let result = true;
  for (let i = 0; i < str.length; i++) {
    if (objStr.hasOwnProperty(str[i])) {
      objStr[str[i]] += 1;
    } else {
      objStr[str[i]] = 1;
    }
  }
  Object.keys(dictionary).map(item => {
    for (let i = 0; i < item.length; i++) {
      if (objDictionary.hasOwnProperty(item[i])) {
        objDictionary[item[i]] += 1;
      } else {
        objDictionary[item[i]] = 1;
      }
    }

    for (let i = 0; i < Object.keys(objDictionary).length; i++) {
      if (
        objStr[Object.keys(objDictionary)[i]] >=
        objDictionary[Object.keys(objDictionary)[i]]
      ) {
        result = result && true;
      } else {
        result = result && false;
      }
    }
  });

  return result;
  //console.log(objDictionary, objStr);
}
