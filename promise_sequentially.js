const tasks = [
    function () {
      return new Promise((resolve) => {
        console.log("Chopping started");
        setTimeout(() => {
          console.log("Chopping done");
          resolve("Chopping");
        }, 1000);
      });
    },
    function () {
      return new Promise((resolve) => {
        console.log("Baking started");
        setTimeout(() => {
          console.log("Baking done");
          resolve("Baking");
        }, 1000);
      });
    },
    function () {
      return "Serving";
    },
    function () {
      return new Promise((resolve) => {
        console.log("Eating started");
        setTimeout(() => {
          console.log("Eating done");
          resolve("Eating");
        }, 1000);
      });
    }
  ];
  
  function executeSync(arr) {
    return arr.reduce((accumulator, presentTask) => {
      return accumulator.then((results) =>
        presentTask().then((currentResult) => [...results, currentResult])
      );
    }, Promise.resolve([]));
  }
  
  executeSync(tasks)
    .then((res) => {
      console.log(res); // ['Chopping', 'Baking', 'Serving', 'Eating']
    })
    .catch((err) => {
      console.log(err);
    });


//2 ********************************** //
const tasks = [task1, task2, task3, ...taskN];

const callTasks = () => {
  for (const task of tasks) {
    await task();
  }
};

callTasks();


//3 recursilvely ******************************
const getPromise = async promise => {
    return Promise
      .resolve()
      .then(() => promise);
  };
  
  const callTasks = async promises => {
      try {
        const promise = await getPromise(promises.shift());
        
        if(!promises.length) {
          return promise;
        }
  
        return callTasks(promises);
      } catch(err) {
        console.error(err.message);
  
        return promise;
      }
  };
  
  callTasks([task1, task2, task3]);

  // 4 Generators *****************************

  async function* callTasks(promises) {
    for(const promise of promises) {
      yield await promise;
    }
  };
  
  const promises = [task1, task2, task3];
  
  callTasks(promises); // resolve task1
  callTasks(promises); // resolve task2
  callTasks(promises); // resolve task3

  // Using reduce - 1

  function executeSync(arr) {
    return arr.reduce((accumulator, presentTask) => {
      return accumulator.then((results) =>
        presentTask().then((currentResult) => [...results, currentResult])
      );
    }, Promise.resolve([]));
  }

  //Using reduce -2

const tasks = [task1, task2, task3, ...taskN];

const callTasks = () => {
  return tasks.reduce((prev, task) => {
    return prev
      .then(task)
      .catch(err => {
        console.warn('err', err.message);
      });
  }, Promise.resolve());
};

callTasks();