// Given an object oldObj, write a function flattenObject that returns a flattened version of it.
// If a certain key is empty, it should be excluded from the output.
// When you concatenate keys, make sure to add the dot character between them. For instance when flattening KeyB, c and d the result key would be KeyB.c and KeyB.d.
// Example:
const oldObject = {
  KeyA: 1,
  KeyB: {
    c: 2,
    d: 3,
    e: {
      f: 7,
      "": 2
    }
  }
};
// Output:
// {
//     "KeyA": 1,
//     "KeyB.c": 2,
//     "KeyB.d": 3,
//     "KeyB.e.f": 7,
//     "KeyB.e": 2
// }

function flattenObject(oldObj) {
  let newObj = {};

  flattenHelper(oldObj, "");

  function flattenHelper(currentObj, prevKey) {
    for (let key in currentObj) {
      let value = currentObj[key];
      if (value.constructor !== Object) {
        if (prevKey == null || prevKey == "") {
          newObj[key] = value; //"KeyA": 1
        } else {
          if (key == null || key == "") {
            newObj[prevKey] = value; //"KeyB.e": 2
          } else {
            newObj[prevKey + "." + key] = value;  //"KeyB.e.f": 7,
          }
        }
      } else {
        if (prevKey == null || prevKey == "") {
          flattenHelper(value, key); //if keyB was first
        } else {
          flattenHelper(value, prevKey + "." + key); //keyB
        }
      }
    }
  }

  return newObj;
}

console.log(flattenObject(oldObject));
