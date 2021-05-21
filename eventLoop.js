setTimeout(function(){ console.log("2000") }, 2000)
setTimeout(function(){ console.log("1000") }, 1000)
setTimeout(function(){ console.log("4000") }, 4000)

console.log("A")
setTimeout(function(){ console.log("B") }, 1000)
console.log("C")
// output:
// A
// C
// B (after atleast 1 sec)
console.log("A")
setTimeout(function(){ console.log("B") }, 0)
console.log( console.log("C") )
// output:
// A
// C
// B (immediately after C is printer)