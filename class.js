class calculator {
  
    constructor(val){
      this.value=val;
    }
    
    add(n){
      this.value+=n;
      return this;
      
    }
    
    substract(n){
      this.value-=n;
      return this;
      
    }
    
    equals(){
      return this.value;
    }
  }
