//Array map polyfill

Array.prototype.myMap = function (callback){

    let newArray=[];

    for(let item of this){

        newArray.push(callback(item))
    }

    return newArray;
}

//Array reduce polyfill

Array.prototype.myReduce = function(callback,initialValue){

    let accumulator = initialValue;

    for(let i=0;i<this.length;i++){

        if(accumulator!==undefined){

            callback.call(null,accumulator,this[i],i,this);

        } else{
            accumulator=this[i]
        }
    }
   
    return accumulator;
}

//Array filter polyfill ---> it also returns a new array

Array.prototype.myFilter= function(callback){

    let newArray =[];

    for(let ele of this){

            if(callback.call(this,ele,i,this)){
                
                newArray.push(ele)
            }
    }

    return newArray;
}

//Array some - > The some() method tests whether at least one element 
// in the array passes the test implemented by the provided function. 
// It returns true if, in the array, it finds an element for which the provided function 
// returns TRUE; otherwise it returns FALSE. It doesn't modify the array.

//The find() method returns the value of the first element in the provided array 
//that satisfies the provided testing function. If no values satisfy the testing function, 
//undefined is returned.

// The every() method tests whether all elements in the array pass the test implemented by the 
//provided function. It returns a Boolean value.