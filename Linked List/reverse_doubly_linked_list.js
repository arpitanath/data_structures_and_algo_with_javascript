


let reverseDLL = (head) => {
    let temp = null;
    let current = head;
    
    while(current){
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
    
    if (temp != null) { 
      head = temp.prev; 
    }
  }


  function reverseLL(head){

    if(head.next===null || head===null){
        return head;
    }

    let temp = reverseLL(head.next);

    head.next.next=head;
    head.next=null;

    return temp;
  }



