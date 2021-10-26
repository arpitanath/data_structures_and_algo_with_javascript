var reverseList = function(head) {
  
    if(head==null || head.next==null){
        return head;
    }
    
    let temp = reverseList(head.next);
    
    head.next.next=head;
    head.next=null;
    
    return temp;
    
};