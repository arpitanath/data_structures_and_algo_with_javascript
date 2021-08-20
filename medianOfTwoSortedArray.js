var findMedianSortedArrays = function(nums1, nums2) {
    
    const merged = [];
    
    for (let i = 0, j = 0; i < nums1.length || j < nums2.length;) {
        const n1 = nums1[i];
        const n2 = nums2[j];
        
        if (n1 === undefined || n1 > n2) {
            merged.push(n2);
            j++;
            continue;
        } 
        
        merged.push(n1);
        i++;
    }
    
    const medIndex = (merged.length - 1) / 2;
    
    if (medIndex % 2 === 0) return merged[medIndex]     // if array has one median
    
    const medCeil = Math.ceil(medIndex);
    const medFloor = Math.floor(medIndex);
    
    return (merged[medCeil] + merged[medFloor]) /2   // if array has two medians that need to be averaged
    
};





var findMedianSortedArrays = function(nums1, nums2) {
  
    const totalLen = nums1.length + nums2.length;
    const medianIndices = [];
    if(totalLen % 2 === 0) {
        medianIndices.push(Math.floor(totalLen/2) - 1);
        medianIndices.push(Math.floor(totalLen/2));
    } else {
        medianIndices.push(Math.floor(totalLen/2));
    }
  
    let mergedArr = [];
    let i = 0;

	// going through only the half of the list
    while (nums1.length >= 0 && nums2.length >= 0 && i < Math.ceil(totalLen/2) + 1) {
      
      if(nums2.length <= 0 || nums1[0] <= nums2[0]) {
         mergedArr.push(nums1.shift());
      } else if (nums1.length <= 0 || nums1[0] > nums2[0]) {
        mergedArr.push(nums2.shift());
      }
      
      i++;
    }
    
    if(medianIndices.length === 1){
      return (mergedArr[medianIndices[0]]);
    } else {
      const fisrtMed = medianIndices[0];
      const secondMed = medianIndices[1];
      
      return ((mergedArr[fisrtMed] + mergedArr[secondMed])/2);
    }
  
};