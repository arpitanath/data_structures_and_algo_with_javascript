//curry

// function curry(fn) {
//   let ini = 0;
//   return function collector(...args) {
//     if (args.length === ini) {
//       return fn.apply(null, arguments);
//     }

//     ini = args.length;
//     return collector.bind(null, ...args);
//   };
// }

function sumArg(...args) {
  let acc = 0;
  for (let arg of args) {
    acc = acc + arg;
  }
  return acc;
}

//test using curry(sumArg)(1)(2)();

// function magician(targetfn) {
//   var numOfArgs = targetfn.length;
//   if (arguments.length - 1 < numOfArgs) {
//     return magician.bind(null, ...arguments);
//   } else {
//     return targetfn.apply(null, Array.prototype.slice.call(arguments, 1));
//   }
// }

//console.log(curry(sumArg)(1)(2)());

// Currying is when you break down a function that takes multiple arguments into a series of 
// functions that each take only one argument. Here's an example in JavaScript:

console.log(curry2(sumArg)(1)(2, 3)());

function curry2(fn) {
  let ini = 0;
  return function collector(...args) {
    if (ini === args.length) {
      /// here arguments.length = total number of arguments passed
      return fn.apply(null, args);
    }
    ini = args.length;
    return collector.bind(null, ...args); // here we passing previous arguments to collector function
  };
}
