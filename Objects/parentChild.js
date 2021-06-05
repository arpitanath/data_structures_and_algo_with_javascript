
/* Excpected Output 
 
 {
  "Newton": {
    "child": "Plato, Aristotle"
  },
  "Plato": {
    "parent": "Newton",
    "child": "Tesla, Edison"
  },
  "Aristotle": {
    "parent": "Newton",
    "child": "Einstein"
  },
  "Einstein": {
    "parent": "Aristotle",
    "child": "Hawking"
  },
  "Tesla": {
    "parent": "Plato"
  },
  "Edison": {
    "parent": "Plato"
  },
  "Hawking": {
    "parent": "Einstein"
  }
 }
 
*/

var PARENT_CHILD = {
    'Newton': ['Plato', 'Aristotle'],
    'Aristotle': ['Einstein'],
    'Plato': ['Tesla', 'Edison'],
    'Einstein': ['Hawking']
};


function getParentTree(graph) {
    let result = {};
    for (parent of Object.keys(graph)) {
        for (child of graph[parent]) {
            result[child] = { "parent": parent };
        }
    }
    for (parent of Object.keys(graph)) {

        if (result.hasOwnProperty(parent))
            result[parent]["children"] = graph[parent].join(",");
        else {
            result[parent] = {};
            result[parent]["children"] = graph[parent].join(",");
        }

    }
    return result;
}

console.log(getParentTree(PARENT_CHILD));
