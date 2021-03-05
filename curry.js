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

function curry2(fn){

    let ini=0;
    return function collector(...args){

        if(ini===arguments.length){
         return fn.apply(null,arguments);
        }
        ini=args.length;
        return collector.bind(null,...args);
    }

}

console.log(curry2(sumArg)(1)(2,3)());