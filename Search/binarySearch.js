function binarySearch(arr,elem){

    let pointer1=0;
    let pointer2=arr.length-1;
    let mid= Math.floor((pointer1+pointer2)/2);
    

    while(arr[mid] !== elem && pointer1<=pointer2){
         if(arr[mid]>elem){
                pointer2=mid-1;
            } else{
                pointer1=mid+1;
            }
            mid=Math.floor((pointer1+pointer2)/2);
              
    }
  if(arr[mid]===elem){
    return mid;
  }
   else{
     return -1;
   }
}

console.log(binarySearch([1,2,3,4,5,6,7,8],7));

