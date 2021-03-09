function reverse(head){

    if(head===null || head.next==null) return head;
    
    let list = newList(head.next);
     head.next.next=head;
    head.next=null;
    return list;
    
}