//Use a combination of Array.prototype.filter and Array.prototype.includes:

const filteredArray = array1.filter(value => array2.includes(value));


//For older browsers, with Array.prototype.indexOf and without an arrow function:

var filteredArray = array1.filter(function(n) {
    return array2.indexOf(n) !== -1;
});