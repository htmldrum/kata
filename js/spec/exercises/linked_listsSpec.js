describe('Linked Lists', function(){

    var ll;
    var Node;
    var LinkedList;

    beforeEach(function(){

        var i;

        Node = function(value,next,prev){
            this.value = value;
            this.next = next || null;
            this.prev = prev || null;
        }
        
        Node.prototype.valueOf = function(){
            return this.value;
        }

        Node.prototype.insert = function(node){

            if(this.next){
                return 1 + this.next.insert(node);
            } else {
                this.next = node;
                return 1;
            }

        };

        Node.prototype.delete = function(){

            if(this.next && this.next.next){
                return 1 + this.next.delete();
            } else {
                this.next = null
                return 1;
            }

        };

        LinkedList = function(head){

            if(typeof head !== 'undefined' && head instanceof Node){
                this.head = head;
            }else{
                this.head = null;
            }

        };

        LinkedList.prototype.insert = function(node){
            if(this.head){
                return this.head.insert(node);
            }else{
                this.head = node;
                return 1;
            }
        }

        LinkedList.prototype.delete = function(node){
            if(this.head){
                return 1 + this.head.delete(node);
            } else {
                return 0;
            }
        }

        LinkedList.prototype.remove_at = function(node_ndx){

            var i = 0;
            var next = this.head, prev;

            while(next && i<node_ndx){
                prev = next;
                next = next.next;
                i++;
                if(i==node_ndx){
                    if(next.next){
                        prev.next = next.next;
                        return next.valueOf();
                    }
                }
            }

            return false;

        }
        
        LinkedList.prototype.length = function(){
            var next = this.head;
            var len = 0;

            while(next != null){
                len+=1;
                next = next.next;
            }

            return len;
        }

        LinkedList.prototype.find = function(node_ndx){

            var i = 0;
            var next = this.head;

            while(next && i<node_ndx){
                next = next.next;
                i++;
                if(i==node_ndx){
                    return next;
                }
            }

            return false;
        }

        ll = new LinkedList();

        for(i=0;i<5;i++){
          ll.insert(new Node(i));
        }

        cll = new LinkedList();
        for(i=0;i<5;i++){
          cll.insert(new Node(i));
        }
        cll.find(4).next = cll.find(2);

    });

    it('Implement a linked list (with insert and delete functions)', function(){

        var new_node;

        // Insert
        expect(ll.length()).toEqual(5);
        new_node = new Node(6);
        ll.insert(new_node);
        expect(ll.length()).toEqual(6);

        // Delete
        ll.delete();
        expect(ll.length()).toEqual(5);

    });

    it('Find the Nth element in a linked list', function(){

        expect(ll.length()).toEqual(5);
        expect(ll.find(4).valueOf()).toEqual(4); // Indexed from 0

   });
            

    it('Removes the Nth element of a linked list', function(){

        expect(ll.length()).toEqual(5);
        expect(ll.remove_at(3)).toEqual(3);
        expect(ll.length()).toEqual(4);

    });

    xit('Check if a linked list has cycles', function(){
        
        expect(cll.find(4).next.valueOf()).toEqual(cll.find(2).valueOf()); // Create a cycle
        expect(cll.has_cycle()).toEqual(true);
    });

    // Given a circular linked list, find the node at the beginning of the loop. Example: A-->B-->C --> D-->E -->C, C is the node that begins the loop
    // Check whether a link list is a palindrome
    // Reverse a linked list iteratively and recursively

});
