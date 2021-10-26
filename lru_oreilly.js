function DLLNode(key, data) {
          this.key = key;
          this.data = data;
          this.next = null;
           this.prev = null;
       }
//    The LRU cache can be initialized by passing the capacity parameter. capacity defines how many nodes are allowed to be in the cache.
       function LRUCache(capacity) {
           this.keys = {};
           this.capacity = capacity;
           this.head = new DLLNode("", null)
           this.tail = new DLLNode("", null)
           this.head.next = this.tail;
           this.tail.prev = this.head;
       }
//    Since the LRU cache uses a doubly linked list, two functions for removing a node and adding a node to the tail will be defined here:
      LRUCache.prototype.removeNode = function(node) {
           var prev = node.prev,
              next = node.next;
          prev.next = next;
           next.prev = prev;
       }
    
       LRUCache.prototype.addNode = function(node) {
          var realTail = this.tail.prev;
         realTail.next = node;
   
          this.tail.prev = node;
          node.prev = realTail;
          node.next = this.tail;
      }
//    Two more functions need to be defined: get and set. Whenever get is called, the LRU caching scheme brings that node to the head of the doubly linked list since it was the most recently used node. This is the same as deleting and adding the node. For setting nodes via set, the keys property on the LRU cache is used to store the node to keep retrieval in O(1) time in get. However, if the cache is at full capacity, it evicts the farthest node from the tail.
      LRUCache.prototype.get = function(key) {
           var node = this.keys[key];
           if (node == undefined) {
               return null;
          } else {
              this.removeNode(node);
               this.addNode(node);
              return node.data;
           }
      }
   
      LRUCache.prototype.set = function(key, value) {
         var node = this.keys[key];
         if (node) {
              this.removeNode(node);
          }
   
          var newNode = new DLLNode(key, value);
   
          this.addNode(newNode);
         this.keys[key] = newNode;
   
          // evict a node
          if (Object.keys(this.keys).length > this.capacity) {
              var realHead = this.head.next;
              this.removeNode(realHead);
             delete this.keys[realHead.key];
          }
      }
//    Finally, the following is an example of an LRU cache of size 5:
       var myLRU = new LRUCache(5);
    
       myLRU.set(1, 1); // 1
       myLRU.set(2, 2); // 1 <-> 2
       myLRU.set(3, 3); // 1 <-> 2 <-> 3
       myLRU.set(4, 4); // 1 <-> 2 <-> 3 <-> 4
       myLRU.set(5, 5); // 1 <-> 2 <-> 3 <-> 4 <-> 5
    
    
      myLRU.get(1);   // 2 <-> 3 <-> 4 <-> 5 <-> 1
      myLRU.get(2);   // 3 <-> 4 <-> 5 <-> 1 <-> 2
   
      myLRU.set(6, 6);// 4 <-> 5 <-> 1 <-> 2 <-> 6
      myLRU.set(7, 7);// 5 <-> 1 <-> 2 <-> 6 <-> 7
      myLRU.set(8, 8);// 1 <-> 2 <-> 6 <-> 7 <-> 8