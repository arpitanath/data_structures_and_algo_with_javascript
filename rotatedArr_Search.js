//input -> 5, 6, 7, 8, 9, 10, 1, 2, 3
//search key
//using binary search


// But in any case one half(sub-array) must be sorted.


let arr=[5, 6, 7, 8, 9, 10, 1, 2, 3];
let low=0;
let high=arr.length;
let key=1;
function search(arr,key,low,high){
  
  let length = arr.length;
  let mid = Math.ceil((low+high)/2);
  

  //found key
  if(arr[mid]==key){
    return mid;
  }
  if(low>high){
    return -1;
  }
  
  //if left half is sorted
  if(arr[low]<=arr[mid]){
     if(arr[low]<=key && arr[mid]>=key){
       return search(arr,key,low,mid-1);
     }
    else{
      return search(arr,key,mid+1,high)
    }
  }
  
  //if right half is sorted
  else{
    if(arr[mid]<=key && arr[high]>=key){
      return search(arr,key,mid+1,high)
    }else{
      return search(arr,key,low,mid-1);
    }
  }
}

let result =search(arr,key,low,high);

console.log(result);