function sum(x){

    let acc=x;
    
    return function collector(y){
    
    if(!y){
    
    
    
    return acc;
    
    }else{
        acc+=y;
        return collector;
    
    }
    
    }
    }