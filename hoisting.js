function a(){
    console.log(b) // output: ƒ b(){ console.log("hi") }
    var b = 10;
    return
    function b(){ console.log("hi") }
  }
  a()

  var a = 10;
  function b() {
    a = 1;
    return;
    function a(){};
  }
  b();
  console.log(a) // output: 10

  function sayHi() {
      console.log(name); // output: undefined
      console.log(age); // reference error
      var name = 'sunil';
      let age = 21;
  }
  sayHi()


  console.log(a) // output: undefined
  var a = "test"
  sayHello() // error
  a()
  var a = function sayHello(){ console.log("hi") }
  
  var x = 10
  function y(){
    x = 100
    return 
  }
  y()
  console.log(x) // output: 100

  var x = 10
  function y(){
    x = 100
    return 
    var x = function(){ console.log("hi") }
  }
  y()
  console.log(x) // output: 10


  var x = 10
  function y(){
    x = 100
    return 
    x = function(){ console.log("hi") }
  }
  y()
console.log(x) // output: 100


  console.log(a())
  function a(){
    console.log("gg")
  }
  
  console.log(b())
  var b = function(){
    console.log("gg")
  }
  
  console.log(c(), d())
  var c = function d(){
    console.log("gg")
  }