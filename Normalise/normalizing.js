// Input

var data = [
  {
    id: 1,
    name: "XYZ",
    description: "FE"
  },
  {
    id: 2,
    name: "ABC",
    description: "BE"
  }
];

/* 
  Output:
  
  {
    1: {name: "XYZ", description: "FE"},
    2: {name: "ABC", description: "BE"}
  },
*/

// Array of Objects to Objects

//Easy
let normalizedUsers = {};

for (let i = 0; i < data.length; i++) {
  normalizedUsers[data[i].id] = data[i];
}

let normalizedUsers2 = data.reduce((acc, user) => {
  acc[user.id] = user;

  return acc;
}, {});

let users = [
  [
    { id: 1, name: "JohnDoe", age: 32, company: { id: 1, name: "mPharma" } },
    { id: 2, name: "JaneDoe", age: 32, company: { id: 2, name: "Novartis" } },
    { id: 3, name: "James", age: 70, company: { id: 2, name: "Novartis" } },
    { id: 4, name: "Nick", age: 29, company: { id: 1, name: "mPharma" } },
    { id: 5, name: "Alf", age: 29, company: { id: 1, name: "mPharma" } }
  ],
  [
    { id: 1, name: "JohnDoe", age: 32, company: { id: 1, name: "mPharma" } },
    { id: 2, name: "JaneDoe", age: 32, company: { id: 2, name: "Novartis" } }
  ],
  [
    { id: 1, name: "JohnDoe", age: 32, company: { id: 1, name: "mPharma" } },
    { id: 2, name: "JaneDoe", age: 32, company: { id: 2, name: "Novartis" } }
  ]
];

//without recursion
function normalize(data) {
  "use strict";
  var ret = {};
  data.forEach(function(item, idx) {
    if (item.id) {
      ret[item.id] = pluck(item, "id");
    }
  });
  return ret;
}

function pluck(obj, propX) {
  "use strict";
  var ret = {};
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (prop === propX) {
        continue;
      }
      ret[prop] = obj[prop];
    }
  }
  return ret;
}

function normalize_recursive(data) {
  "use strict";
  var ret = {};
  if (!data) {
    return ret;
  }
  for (var item in data) {
    if (Array.isArray(data)) {
      if (data[item].id) {
        ret[data[item].id] = normalize_recursive(data[item]);
      }
    } else if (data.hasOwnProperty(item)) {
      if (item === "id") {
        continue;
      }
      ret[item] = data[item];
    } else if (Array.isArray(item)) {
      normalize_recursive(item);
    }
  }
  return ret;
}

let data = [
  [
    [{ id: 1, name: "JohnDoe" }],
    [
        { id: 2, name: "JohnDoe" }, 
        [
                { id: 3, name: "JohnDoe" },
                [
                 { id: 8, name: "JaneDoe" }
                ]
        ]
]
  ],
  [
    { id: 4, name: "JohnDoe" },
    { id: 5, name: "JaneDoe" }
  ],
  [
    { id: 6, name: "JohnDoe" },
    { id: 7, name: "JaneDoe" }
  ]
];


function normalize_recursive_depth(data) {
    var ret = {};
    let counter =0;
    function calc(){
        for (var ele of data) {
            if (Array.isArray(ele.children)) {
              normalize_recursive(ele.children);
            } else if (typeof ele === "object") {
              ret[ele.id] = ele;
            }
          }
    }
  
  calc();
  return ret;
}

console.log(JSON.stringify(arr, undefined, 4));
