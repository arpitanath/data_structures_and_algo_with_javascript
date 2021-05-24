// Why do we need to convert callbacks to promises?
//***********************************************************
//*** With callbacks, if you want to do something sequentially you will have to specify an err argument in each callback, which is redundant. In promises or async-await, you can just add a .catch method or block which will catch any errors that occurred in the promise chain
//*** With callbacks, you have no control over when it's called, under what context, or how many times it's being called, which can lead to memory leaks.
//*** Using promises, we control these factors (especially error handling) so the code is more readable and maintainable.



//callback
const getAsyncSum = (n1, n2, callback) => {
  if (!n1 || !n2) {
    return callback(new Error("Error"), null);
  } else {
    callback(null, n1 + n2); //result is passed to a callback function
  }
};

getAsyncSum(1, 1, (error, result) => {
  if (error) {
    doSomethingWithError(error);
  } else {
    console.log(result);
  }
});

//suppose we have promisify

const getSumPromise = promisify(getAsyncSum);

getSumPromise(1, 1)
  .then(result => console.log(result))
  .catch(error => doSomethingWithError(error));


//promisify function

function promisify(f) {
  return function(args) {
    return new Promise((resolve, reject) => {
      function customCallBack(error, result) {
          if(error){
              reject(error)
          }else{
              resolve(result)
          }
      }
      args.push(customCallBack);
      f.call(this,...args);
    });
  };
}

//suppose more than two arguments are present in customcallback

function promisify(f){
    return function(args){
        return new Promise((resolve,reject)=>{
            function customCallBack(err,...results){
                if(error){
                    reject(error)
                }else{
                     resolve(results.length===1 ?results[0] : results)
                }
            }
            args.push(customCallBack);
            f.call(this,...args);
        })
    }
}

//the word async befofe a function means it will always return a promise

//await makes javascript wait for the promise to be resolved until that promise settles and returns its result.

//await literalay suspends function execution at that point of time
