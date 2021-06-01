//1

let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);


//2

//To remove the duplicates, you use the filter() method to include only elements whose indexes
// match their indexOf values:

let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});


//To find the duplicate values, you just need to reverse the condition:

let chars = ['A', 'B', 'A', 'C', 'B'];

let dupChars = chars.filter((c, index) => {
    return chars.indexOf(c) !== index;
});

console.log(dupChars);



//3
let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = [];
chars.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
});

console.log(uniqueChars);