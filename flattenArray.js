const flatten = ([first, ...rest]) => {
    if (first === undefined) {
      return [];
    }
    else if (!Array.isArray(first)) {
      return [first, ...flatten(rest)];
    }
    else {
      return [...flatten(first), ...flatten(rest)];
    }
  }

  //flatten([[1,2,3],4,5,[7,8]])

  
  //second way
  function flatten(arr){

    let newArr=[];

    for(let a of arr){

        if(Array.isArray(a)){
            newArr=  newArr.concat(flatten(a))
        }else{
            newArr.push(a);
        }
    }
    return newArr;
}