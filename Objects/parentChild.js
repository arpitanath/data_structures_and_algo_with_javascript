var PARENT_CHILD = {
    'Newton': ['Plato', 'Aristotle'],
    'Aristotle': ['Einstein'],
    'Plato': ['Tesla', 'Edison'],
    'Einstein': ['Hawking']
};




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
    let parents = {};
    for (let par of Object.keys(graph)) {
        for (let child of graph[par]) {
            parents[child] = { "parent": par };
        }
    }
    for (let par of Object.keys(graph)) {
        if (!parents.hasOwnProperty(par))
            parents[par] = {};
    }
    for (let key of Object.keys(parents)) {
        if (graph.hasOwnProperty(key)) {
            parents[key]["child"] = graph[key].join(",");
        }
    }

    return parents;
}

console.log(getParentTree(PARENT_CHILD));
