var isPowerOfThree = function(n) {
    if(n==1) return true
    while(n>3){
    n=n/3;
  }
  if(n<3) return false
  if(n==3){
    return true
  }
};