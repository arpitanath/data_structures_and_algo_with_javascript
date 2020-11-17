//curry

function curry(fn) {
  let ini = 0;
  return function collector(...args) {
    if (args.length === ini) {
      return fn.apply(null, arguments);
    }

    ini = args.length;
    return collector.bind(null, ...args);
  };
}

function sumArg(...args) {
  let acc = 0;

  for (let arg of args) {
    acc = acc + arg;
  }
  return acc;
}

//test using curry(sumArg)(1)(2)();
