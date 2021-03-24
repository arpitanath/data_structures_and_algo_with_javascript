// power

function power(base,exponent){

    if(exponent===1){
        return base;
    }
    else return base*power(base,exponent-1);
}
//factorial

function factorial(n){

    if(n===1 || n===0){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}

//productOfArray([1,2,3]) // 6

function productOfArray(arr){

    if(arr.length===1){
        return arr[0];
    }else{
        return arr.pop()*productOfArray(arr);
    }
}

//productofarra without modifying original array

function productOfArray(arr){

    let result=1;
    if(arr.length===0) return 1;
    else{
        result=result*arr[0]*productOfArray(arr.slice(1));
    }
    return result;
}

//recursive range

function recursiveRange(n){

    if(n==0)return 0;
    else{
        return n+recursiveRange(n-1);
    }
}
console.log(recursiveRange(10));
























