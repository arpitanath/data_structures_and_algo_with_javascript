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
