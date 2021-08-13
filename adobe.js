const arr1 =[1,2,2,3,4];
const arr2=[2,2,3,4]

function intersection(arr1,arr2){
  
  const map ={};
  let result=[];
  
  for(let i =0;i<arr1.length;i++){
    
      if(!map.hasOwnProperty(arr1[i])){
        map[arr1[i]]=1;
      }else{
        map[arr1[i]]++;
      }
    
  }
  
  for(let i=0;i<arr2.length;i++){
    
    if(map[arr2[i]]){
      result.push(arr2[i]);
    }
  }
  
  return result;
  //return arr1.filter(val => arr2.includes(val));
}

console.log(intersection(arr1,arr2))





Array.prototype.myReduce = function (callback , initialValue){
  
  let accumulator = initialValue;
  
  for(let i=0;i<this.length;i++){
    
    if(accumulator!==undefined){
      
      accumulator = callback.call(null, accumulator, this[i], i , this);
    }else{
      
      accumulator = this[i];
    }
    
  }
  
  return accumulator;
}

const callback = (x, y)=>x+y

console.log(arr1.myReduce(callback,0))

let timerId;

function eventHandler(){
  
  console.log("debounce");
}
const debounce = function (eventFunction , delay){
  
  //everytime time we have to clear timerId

  clearTimeout(timerId);
  timerId = setTimeout(eventFunction, delay);
}

window.addEventListener("resize",function(){
  
  debounce(eventHandler , 200);
})


new Promise((resolve,reject)=>{
  resolve("a")
}).then(val=>console.log(val))
console.log("123");