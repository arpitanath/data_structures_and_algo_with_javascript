//polyfill for bind,call , apply

Function.prototype.myCall = function(context) {
  return Object.create(context, {
    fn: {
      val: this
    }
  }).fn(...Array.prototype.slice.call(arguments, 1));
};

Function.prototype.myApply = function(context) {
  return Object.create(context, {
    fn: {
      value: this
    }
  }).fn(...args);
};

Function.prototype.myBind = function(context) {
  let argumentSentDuringBind = Array.prototype.slice.call(arguments, 1);
  let self = this;
  return function(argsInBoundFunction) {
    self.apply(context, argumentSentDuringBind.concat(argsInBoundFunction));
  };
};
