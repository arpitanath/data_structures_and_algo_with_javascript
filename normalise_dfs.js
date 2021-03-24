const arr = [
    {
    id: 0, children: []
    }, 
    {
       id: 1, 
       children: [
        {
            id: 2, children: []
        }, 
         {
            id: 3, 
             children: [
            {
             id: 4, children: []
            }
            ]
         }
        ]
    }
];


const assignDepth = (arr, depth = 0, index = 0) => {
    if(index < arr.length){
       arr[index].depth = depth;
       if(arr[index].children.length){
          return assignDepth(arr[index].children, depth+1, 0);
       };
       return assignDepth(arr, depth, index+1);
    };
    return;
 };
 assignDepth(arr);

function normalize_recursive_depth(data) {
    var ret = {};
    function calc(data){
        for (var ele of data) {
            ret[ele.id] = ele;
            if (Array.isArray(ele.children) && ele.children.length!==0) {
                calc(ele.children);
            }     
          }
    }
  calc(data);
  return ret;
}

normalize_recursive_depth(assignDepth(arr));


