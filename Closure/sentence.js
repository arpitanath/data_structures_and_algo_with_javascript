function sentence(str) {
    let acc = str;
    return function collector(y) {
      if (y.includes(".")) {
        return acc+" "+y;
      } else {
        acc += y.split(" ").reduce((a, b) => a + b, " ");
        return collector;
      }
    };
  }
  
  
  console.log(sentence("I")("am")("going")("out."));
  console.log(sentence("I am")("going")("out."));
  console.log(sentence("I am going")("out."));
  console.log(sentence("I")("am going out."));
