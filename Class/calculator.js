class calculator{
    
    constructor(){
        this.acc=0;
    }

    add(x){
        this.acc+=x;
        return this;
    }

    subtract(x){
        this.acc-=x;
        return this;
    }

    get result() {
        return this.acc;
      }
   
}

let c = new calculator();
console.log(c.add(3).subtract(2).result);