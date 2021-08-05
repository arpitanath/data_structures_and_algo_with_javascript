function sum(...args) {
    let acc = args.reduce((a, b) => a + b, 0);
  
    return function collector(...y) {
      if (!y.length) {
        return acc;
      } else {
        acc += y.reduce((a, b) => a + b, 0);
        return collector;
      }
    };
  }
  
  
  console.log(sum(1,3)(2,6,9)(3,2)(4)());
  console.log(sum(1)(2)(3)(4)());
  
  
  
