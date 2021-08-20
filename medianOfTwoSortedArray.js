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






const findMedianSortedArrays = (A, B) => {
	const length = A.length + B.length;

	if (!length) return null;
	if (length === 1) return !A.length ? B[0] : A[0];

	let i = 0;
	let j = 0;

	while (i + j < Math.ceil((length + 1) / 2)) {
		if (A[i] < B[j] || B[j] === undefined) i++;
		else j++;
	}

	// subtract by 1, because loop increases it by 1 more
	(i -= 1), (j -= 1);

	if (length % 2 !== 0) {
		// handle empty
		if (A[i] === undefined) return B[j];
		if (B[j] === undefined) return A[i];

		if (A[i] > B[j]) return A[i];
		else return B[j];
	} else {
		const num1 = isNaN(A[i]) ? Number.NEGATIVE_INFINITY : A[i];
		const num2 = isNaN(A[i - 1]) ? Number.NEGATIVE_INFINITY : A[i - 1];
		const num3 = isNaN(B[j]) ? Number.NEGATIVE_INFINITY : B[j];
		const num4 = isNaN(B[j - 1]) ? Number.NEGATIVE_INFINITY : B[j - 1];

		// handle empty
		if (A[i] === undefined) return (B[j] + B[j - 1]) / 2;
		if (B[j] === undefined) return (A[i] + A[i - 1]) / 2;

		// find max and add with 2nd max
		if (A[i] > B[j]) return (A[i] + Math.max(num2, num3, num4)) / 2;
		if (B[j] > A[i]) return (B[j] + Math.max(num1, num2, num4)) / 2;

		// handle 2 median same number
		if (A[i] === B[j]) return A[i];
	}
};