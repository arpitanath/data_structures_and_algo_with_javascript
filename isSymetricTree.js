// #DFS

var isSymmetric = function(root) {

    var symmetric=function(lroot,rroot){
        if(!lroot && !rroot)
            return true;
        if(!lroot || !rroot)
            return false;
        if(lroot.val!==rroot.val)
            return false;
			
        var l=symmetric(lroot.left, rroot.right);
        var r=symmetric(lroot.right, rroot.left);
        return l && r;
    }
	    return symmetric(root.left,root.right);
    
};


// #BFS

var isSymmetric = function(root) {
    
    var roots=[root.left,root.right];
    var l,r;
    while(roots.length>0){
        l=roots.shift();
        r=roots.shift();
        if(!l && !r) continue;
        if(!l || !r) return false;
        if(l.val!==r.val) return false;
        roots.push(l.left,r.right);
        roots.push(l.right,r.left);
    }
    
    return true;
    
    
};
