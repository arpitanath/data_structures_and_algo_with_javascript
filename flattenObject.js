// Given an object oldObj, write a function flattenObject that returns a flattened version of it.
// If a certain key is empty, it should be excluded from the output.
// When you concatenate keys, make sure to add the dot character between them. For instance when flattening KeyB, c and d the result key would be KeyB.c and KeyB.d.
// Example:
// const oldObject = {
//     "KeyA": 1,
//     "KeyB":{
//         "c": 2,
//         "d": 3,
//         "e":{
//             "f": 7,
//             "" : 2
//          }
//       }
// }
// Output:
// {
//     "KeyA": 1,
//     "KeyB.c": 2,
//     "KeyB.d": 3,
//     "KeyB.e.f": 7,
//     "KeyB.e": 2
// }

function flattenObject(oldObject) {
  let newObject = {};

  flattenHelper(oldObject,'');

  function flattenHelper(currentObject, previousKeyName) {
    for (let key in currentObject) {
      let value = currentObject[key];

      if (value.constructor !== Object) {
        //first entry
        if ((previousKeyName = "" || previousKeyName == null)) {
          newObject[key] = value;
          console.log(1,newObject,key);
        } else {
            if(key == null || key == '') {
                newObject[previousKeyName] = value;
                console.log(2,newObject,previousKeyName);
           }else{
               newObject[previousKeyName + '.' + key] = value;
               console.log(3,newObject,key,previousKeyName);
           }
        }
      } else {
        if (previousKeyName == null || previousKeyName == "") {
        console.log(4,key);
          flattenHelper(value,key);
        } else {
            console.log(5,previousKeyName + "." + key);
          flattenHelper(value, previousKeyName + "." + key);
        }
      }
    }
  }

  return newObject;
}
