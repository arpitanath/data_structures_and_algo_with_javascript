function Node(data){
    this.data=data;
    this.left=null;
    this.right=null;
}

function bst(){
    let temp = this._root;

    this.add = function(node){
        if(this._root == null){
            this._root=node;
        }
        else{
           
            let temp =this._root;
            while(true){
                console.log(node,temp);
            if(node.data<=temp.data){
                if(temp.left==null){
                    temp.left=node;
                    break;
                }
                temp=temp.left;
            }
           else{
                if(temp.right==null){
                    temp.right=node;
                    break;
                }
                temp=temp.right;
            }
         }
        }
    };

    this.search= function(val){
        let temp=this._root;
        if(temp==null) return false;
        while(temp!=null){
            if(temp.data==val)return true;
            if(temp.data<val){
                temp=temp.left;
            }
            else
            temp=temp.right;
        }
        return false;
    }

    this.print=function(){
        let temp=this._root;
        (function _print(root){
            if(root==null)return;
            _print(root.left);
            console.log(root.data);
            _print(root.right);
        })(temp);
    }
}