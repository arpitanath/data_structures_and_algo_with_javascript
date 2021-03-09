//capitalize first

function capitalize(arr){

    if(arr.length==0) return arr;
    else{
        return [arr[0][0].toUpperCase()+arr[0].slice(1)].concat(capitalize(arr.slice(1)));
    }
}

console.log(capitalize(["arpita","test"]));

function nestedEvenSum(obj,acc=0){
    for(let a in obj){           
        if(typeof(obj[a])=="object"){
            acc=nestedEvenSum(obj[a],acc);
        }
        else if(typeof(obj[a])=="number" && (obj[a])%2===0){
           // console.log(a,obj[a]);
            acc+=obj[a];
//              console.log("Accumultor",acc);
        }
    }
    return acc;
}