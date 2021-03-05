function getCheesePercentage(){

    let arr = arguments[0].split(" ");

    let R = arr[0];

    let C = arr[1];

    // area of circle is pi*r*r and area having cheese is pi*(r-c)^2

    let _area = 3.14 * Math.pow(R,2);

    let _cheeseArea = 3.14 * Math.pow(R-C,2);

    let percentage = (_cheeseArea/_area) * 100;

    console.log(percentage);


}