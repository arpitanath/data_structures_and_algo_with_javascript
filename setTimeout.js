//It can be used to create a new scope for each setTimeout callback without disturbing 
//the global scope or parent scope.
// for (var i = 0; i < 5; i++) {
//   (function(i) {
//     setTimeout(() => console.log(i), 1000);
//   })(i);
// }

for (var i=1; i<=5; i++) {
  (function(i){
    setTimeout( function timer(){
      console.log( i );
    }, i * 1000 );
  })(i);
}

for(let i=1;i<=5;i++){

  setTimeout(()=>{console.log(i)},i*1000);
}