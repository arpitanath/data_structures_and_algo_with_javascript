var isNumber = function(s) {
    return /^\s*[+-]?(\.[0-9]+|[0-9]+(\.[0-9]*)?)(e[+-]?[0-9]+)?\s*$/.test(s);
};


var isNumber = function(s) {
    
    /**
     * Returns true for any string that contains digits, may contain leading sign and (for isInt === false) one dot
     * @param {string} str
     * @param {boolean} isInt Stricts validation rules to integers only
     * @return {boolean}
     */
    function isSimpleNumber(str, isInt) {
        
        let dotCount = 0
        let digitCount = 0
        let startIndex = (str[0] === '-' || str[0] === '+') ? 1 : 0
        
        for (let i = startIndex; i < str.length; ++i) {
            if (str[i] === '.') dotCount++
            if (str[i] >= '0' && str[i] <= '9') digitCount++
            if ((str[i] < '0' || str[i] > '9') && str[i] !== '.') return false
        }
        
        return digitCount > 0 && ((isInt && dotCount === 0) || (!isInt && dotCount <= 1))
    }
    
    s = s.trim()
    
    let e = s.includes('e');
    
    let E = s.includes('E');
    
    if (e||E) {
     
        const parts = e ? s.split('e') : s.split('E')
        if (parts.length !== 2 || parts[0] === '' || parts[1] === '') return false
     
        return isSimpleNumber(parts[0]) && isSimpleNumber(parts[1], true)
        
    } else {
     
        return isSimpleNumber(s)
    }
};