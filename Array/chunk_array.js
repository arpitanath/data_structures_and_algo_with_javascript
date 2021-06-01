
function getChunks(arr,size){

    let chc=0;
    let chunkArr=[];
    let result=[];

    for(let i=0;i<arr.length;i++){

        if(chc===size){
            chc=0;
            result.push(chunkArr);
            chunkArr=[];
        }
            chc++;
            chunkArr.push(arr[i]);
       
    }
if(chunkArr.length){
    result.push(chunkArr);
}
return result;
}

getChunks([1,2,3,4,5,6,7],3);


//Using slice

function getChunks(arr,size){

    let result=[];

    for(let i=0;i<arr.length;i+=size){

            result.push(arr.slice(i,i+3))
    }

    return result;
}