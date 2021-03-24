//sorting objects based on object properties value

var maxSpeed = {
    car: 300, 
    bike: 60, 
    motorbike: 200, 
    airplane: 1000,
    helicopter: 400, 
    rocket: 8 * 60 * 60
};

let sortable =[];

for(vehicle in maxSpeed){

    sortable.push([vehicle,maxSpeed[vehicle]]);
}


sortable.sort((a,b)=>a[1]-b[1]);

//[["bike", 60], ["motorbike", 200], ["car", 300],
//["helicopter", 400], ["airplane", 1000], ["rocket", 28800]]

// second way

let sortedArr = Object.fromEntries(

    Object.entries(maxSpeed).sort((a,b)=>a[1]-b[1])
)

//Sorting array of objects

myArray.sort(function(a, b) {
    return a.distance - b.distance;
});