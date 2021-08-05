function hoist() {
    a = 20;
    var b = 100;
  }
  
  hoist();
  
  console.log(a);
  
  console.log(b);

//   The difference in this case is how it initialises them.
// Variables declared with let and const remain uninitialised at the beginning of execution whilst variables declared with var are initialised with a value of undefined.