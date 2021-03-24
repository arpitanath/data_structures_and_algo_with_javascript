var romanToInt = function(s) {
    let number = 0;
    let i = 0;
    const getSymbolValue = new Map([['I', 1],['V', 5],['X', 10],['L', 50],['C', 100],['D', 500],['M', 1000]])
    while(i < s.length){
        let val1 = getSymbolValue.get(s[i]);
        let val2 = getSymbolValue.get(s[i+1]);
        if(val2 && val2>val1){
            number = number + (val2 - val1);
            i = i + 2
            continue;
        }
        number = number + val1
        i += 1;
    }
    return number;
}