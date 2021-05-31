function reverse(head){

    if(head===null || head.next==null) return head;
    
    let list = reverse(head.next);
    head.next.next=head;
    head.next=null;
    return list;
    
}