//fibonacci using memoization

function fibonacci(x){

    let memo={};

    let helper = function(n){
        
        if(memo[n]) return memo[n];
        if(n===1 || n===0) return n;
        return memo[n] = helper(n-1)+helper(n-2);
    }
   
return helper(x);
}

console.log(fibonacci(13));