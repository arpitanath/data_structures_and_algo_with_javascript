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

Function.prototype.mybind = function (context, ...args1) {
  let fn = this;
  return function (...arg2) {
      fn.apply(context, [...args1, ...arg2])
  }
};


let basic = {
  'name': 'shyam',
  'age': 24
};

function callMe(city) {
  console.log('Hi! my name is ' + this.name + ' and my age is ' + this.age + ' and my city is ' + arguments[0] + ' and state is ' + arguments[1]);
}
let callBinded = callMe.bind(basic, 'jammu');
callBinded('j&k')
