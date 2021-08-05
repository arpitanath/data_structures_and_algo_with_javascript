// Hoisting is a JavaScript mechanism where variables and function declarations 
// are moved to the top of their scope before code execution.

// 1. Variable assignment takes precedence over function declaration
// 2. Function declarations take precedence over variable declarations
function a(){
    console.log(b) // output: ƒ b(){ console.log("hi") } function declaration has higher precedence over var declaration
    var b = 10;
    return
    function b(){ console.log("hi") }
  }
  a()

  var a = 10;
  function b(){
    a = 1;
    return;
    function a(){};
  }
  b();
  console.log(a) // output: 10 here function is getting hoisted and assigned 1

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
  console.log(x) // output: 10 - new initialisatiion has happened


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
    console.log("gg")  // gg
  }
  
  console.log(b()) //  b is not a function
  var b = function(){
    console.log("gg")
  }
  
  console.log(c(), d()) // is not a function
  var c = function d(){
    console.log("gg")
  }

var a=10;
b(40);

function b(x) {
  a(20);
  a=40;
  function a() { console.log(x);} 
}

console.log(a); //40


var a = 10;
b(40);

function b(x) {
  a(20);
  a=40;
  a(20);
  function a() { console.log(x);} 
}

console.log(a); //40 a is not a function