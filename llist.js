// function Node(data){
//     this.data=data;
//     this.next=null;
// }

// function List(){
//     this._head=null;

//     this.add=function(node){
//         if(this._head==null)   this._head=node;
//         else{
//             let temp=this._head;
//             while(temp.next!=null)   temp=temp.next;
//             temp.next=node;
//         }
//     }

//     this.print=function(){
//         let temp=this._head;
//         while(temp!=null){
//             console.log(temp.data);
//             temp=temp.next;
//         }
//     }
// }
    
// let l=new List();
// l.add(new Node(4));
// l.add(new Node(5));
// l.add(new Node(7));

// l.print();

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class list{

    constructor(){
        this.head=null;
    }

    add(node){

            if(this.head===null) this.head=node;
            else{
                let temp=this.head;
                while(temp.next!==null) temp=temp.next;
                temp.next=node;
            }
    }

    print(){
        let temp=this.head;

        while(temp.next!=null){
            console.log(temp.data);
            temp=temp.next;
        }
        console.log(temp.data);
    }
}

let n = new Node(2);
let n2 = new Node(3);
let n3 = new Node(4);
let l = new list();

l.add(n);
l.add(n2);
l.add(n3);
l.print();