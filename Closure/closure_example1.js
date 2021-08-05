//A closure is a function plus the connection to the scope in which the function was created.
//A closure is an example of an environment surviving after execution has left its scope. 

function startIncrement(startValue){

    return function(step){
        startValue+=step
        console.log(startValue) ;
    }
}

let addto5 =startIncrement(5);

addto5(1);
addto5(4);
addto5(14);

//MDN : A closure is the combination of a function bundled together (enclosed) with references 
// to its surrounding state (the lexical environment). In other words, 
// a closure gives you access to an outer function’s scope from an inner function. 

// function makeFunc() {
//     var name = 'Mozilla';
//     function displayName() {
//       alert(name);
//     }
//     return displayName;
//   }
  
//   var myFunc = makeFunc();
//   myFunc();

//A closure is the combination of a function and the lexical environment within which that function was declared.


//The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. For this reason, when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to alert.

//Uses : 
/* 
1. practical closure - event handling
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

2.Emulating private methods with closures

*/

var counter =(function(){
    let privateVariable = 0;

    function changeBy(x){
        privateVariable+=x;
    }

    return {

        increment: function(){
            return changeBy(1);
        },
        decrement: function(){
            return changeBy(-1);
        },
        value: function(){
            return privateVariable;
        }
    }
})();
let ini = counter.value;
console.log(ini());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());