let list = [
  { id: 1, title: "hello", parent: 0 },
  { id: 2, title: "hello", parent: 0 },
  { id: 3, title: "hello", parent: 1 },
  { id: 4, title: "hello", parent: 3 },
  { id: 5, title: "hello", parent: 4 },
  { id: 6, title: "hello", parent: 4 },
  { id: 7, title: "hello", parent: 3 },
  { id: 8, title: "hello", parent: 2 }
];
// [
//     {id: 1, title: 'hello', parent: 0, children: [
//         {id: 3, title: 'hello', parent: 1, children: [
//             {id: 4, title: 'hello', parent: 3, children: [
//                 {id: 5, title: 'hello', parent: 4},
//                 {id: 6, title: 'hello', parent: 4}
//             ]},
//             {id: 7, title: 'hello', parent: 3}
//         ]}
//     ]},
//     {id: 2, title: 'hello', parent: 0, children: [
//         {id: 8, title: 'hello', parent: 2}
//     ]}
// ]

function arrayToTree(list) {
  let map = {};
  let ele = [];
  for (let i = 0; i < list.length; i++) {
    map[list[i].id] = i;
    list[i].children = [];
  }
  for (let i = 0; i < list.length; i++) {
    let node = list[i];
    if (node.parent !== 0) {
      list[map[node.parent]].children.push(node);
    } else {
      ele.push(node);
    }
  }
  console.log(ele);
}

arrayToTree(list);
