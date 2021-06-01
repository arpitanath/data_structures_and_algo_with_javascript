function showText(text, time) {
    return new Promise((res, reject) => {
      setTimeout(res(text), time);
    });
  }
  // showText("test", 1000).then(console.log);
  
  // promise.all()?
  // promise.all(promises)
  
  const promises = [
    showText("test", 1000),
    showText("test1", 2000),
    showText("test2", 100)
  ];
  
  function promiseAll(promises) {
    let fulfilledPromises = [],
      result = [];
  
   return new Promise((resolve, reject) =>{
      promises.forEach((promise, index) => {
        promise
          .then((val) => {
            fulfilledPromises.push(true);
            result[index] = val;
  
            if (fulfilledPromises.length === promises.length) {
              return resolve(result);
            }
          })
          .catch((err) => {
            return reject(err);
          });
      });
    })
  }
  
  promiseAll(promises).then(console.log);