//string reverse

function reverse(str){

    if(str.length===0) return "";
    else{
        return str.slice(str.length-1) + reverse(str.slice(0,str.length-1));
    }

}

//console.log(reverse("Arpita"));

//string palindrome

function isPalindrome1(str){

    if(str=== reverse(str)) return true;
    else return false;
}



function isPalindrome2(str){

    if(str.length<=1) return true;
    else{
        return str[0]===str[str.length-1] && isPalindrome2(str.slice(1,str.length-1));
    }
}

// console.log(isPalindrome2("amanaplanacanalpanama"));

function someRecursive(arr,callback){

    return arr.length===0 ? false : callback(arr[0]) || someRecursive(arr.slice(1),callback);
}

const isOdd = val => val % 2 !== 0;

// console.log(someRecursive([1,2,3,4], isOdd)) // true
someRecursive([4,6,8,9], isOdd) // true
someRecursive([4,6,8], isOdd) // false
someRecursive([4,6,8], val => val > 10); 


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
// console.log(flatten([1, 2, 3, [4, 5] ]));

function flatten2([first,...last]){
    if(first===undefined){
        return [];
    }else if(!Array.isArray(first)){
        return [first,...flatten(last)];
    }else{
        return [...flatten2(first),...flatten2(last)];
    }
}

console.log(flatten2([[1, 2], 3, [4, 5] ]));