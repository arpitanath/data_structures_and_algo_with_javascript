/**
 * @param {number[]} nums
 * @return {number}
 */

// The maximum subarray problem is the task of finding the largest possible sum of a contiguous subarray,
//  within a given one-dimensional array A[1…n] of numbers.

const maxSubArray = arr => {

    const allPositives = arr => arr.every(n=> n>0);
    const allNegatives = arr => arr.every(n => n<0);

    if(arr.length ==0 ) return 0;
    
    Array.prototype.max = function() {
     return Math.max.apply(null, this);
    };
    
    if(allNegatives(arr)) return arr.max()

    const temp ={start:0 , sum:0};
    let result={start:0 , end: 0, sum:0};

    for(let i=0; i<arr.length ; i++){
        temp.sum+=arr[i];

        if(temp.sum > result.sum){
            result={start:temp.start , end:i, sum:temp.sum}
        }
        if(temp.sum <0){
            temp.sum =0;
            temp.start=i+1;
        }
    }

    return result.sum;
}