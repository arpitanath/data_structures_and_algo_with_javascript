function PromisePolyFill(executor) {
  let onResolve, onReject;
// fulfilled : Boolean indicating if the executor has been resolved or not
// called: boolean indicating if the then callback has been called or not .
  let fulfilled = false,
    rejected = false,
    called = false,
    value;

//2 step
//resolve triggers the callback passed to then
  function resolve(v) {
    fulfilled = true;
    value = v;

    //this is incase synchronous job
    if (typeof onResolve === "function") {
      onResolve(value);
      called = true;
    }
  }

  function reject(reason) {
    rejected = true;
    value = reason;

// We are likely to encounter this scenario if we directly resolve a variable without any async tasks like fetch , setTimeout etc
// When we invoke our PromisePolyFill as above we get an error :

// TypeError: onResolve is not a function

// This happens because our executor invocation is completed even before we assign the value of then callback to our onResolve variable.

    if (typeof onReject === "function") {
      onReject(value);
      called = true;
    }
  }

  //3 step
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

  //// 1 Step
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

if (!Promise.allSettled) {
  const rejectHandler = reason => ({ status: 'rejected', reason });

  const resolveHandler = value => ({ status: 'fulfilled', value });

  Promise.allSettled = function (promises) {
    const convertedPromises = promises.map(p => Promise.resolve(p).then(resolveHandler, rejectHandler));
    return Promise.all(convertedPromises);
  };
}

/*

Promise.all
Promise.all takes an array of promises (it technically can be any iterable, 
but is usually an array) and returns a new promise.

The new promise resolves when all listed promises are settled, 
and the array of their results becomes its result.



Promise.allSettled just waits for all promises to settle, regardless of the result. The resulting array has:
{status:"fulfilled", value:result} for successful responses,
{status:"rejected", reason:error} for errors.


Promise.race
Similar to Promise.all, but waits only for the first settled promise and gets its result (or error).

Promise.any
Similar to Promise.race, but waits only for the first fulfilled promise and gets its result. 
If all of the given promises are rejected, then the returned promise is rejected with AggregateError – a special error object that stores all promise errors in its errors property.


Promise.resolve
Promise.resolve(value) creates a resolved promise with the result value.
*/