function PromisePolyFill(executor) {
  let onResolve, onReject;
  let fulfilled = false,
    rejected = false,
    called = false,
    value;

//resolve triggers the callback passed to then
  function resolve(v) {
    fulfilled = true;
    value = v;

    //this is for subsequent trigger of then
    if (typeof onResolve === "function") {
      onResolve(value);
      called = true;
    }
  }

  function reject(reason) {
    rejected = true;
    value = reason;

    if (typeof onReject === "function") {
      onReject(value);
      called = true;
    }
  }

  this.then = function(callback) {
    onResolve = callback;

    if (fulfilled && !called) {
      called = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function(callback) {
    onReject = callback;

    if (rejected && !called) {
      called = true;
      onReject(value);
    }
    return this;
  };

// If executor resolved we must invoke the then callback . 
//If executor rejects , we must invoke catch callback.
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

PromisePolyFill.resolve = val =>
  new PromisePolyFill(function executor(resolve, _reject) {
    resolve(val);
  });

PromisePolyFill.reject = reason =>
  new PromisePolyFill(function executor(resolve, reject) {
    reject(reason);
  });

PromisePolyFill.all = promises => {
  let fulfilledPromises = [],
    result = [];

  function executor(resolve, reject) {
    promises.forEach((promise, index) =>
      promise
        .then(val => {
          fulfilledPromises.push(true);
          result[index] = val;

          if (fulfilledPromises.length === promises.length) {
            return resolve(result);
          }
        })
        .catch(error => {
          return reject(error);
        })
    );
  }
  return new PromisePolyFill(executor);
};



