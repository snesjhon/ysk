# Singly Linked Lists

This is being implemented in a Typescript

```typescript
class Nodes {
  val: string;
  next: null | Nodes;
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyList {
  head: Nodes | null;
  tail: Nodes | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

const item = new SinglyList();
```

## Push

```typescript
  push(val) {
    const newNode = new Nodes(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // We add whatever newNode is coming to the current TAIL
      this.tail.next = newNode;

      // And then we reassign that to a newNode. Which has a new `next` value
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
```

* Using `push` you would be able to assign a continuous list. 
* We add `!this.head` because if there isn't a head initially, then we have to assign the current newNode to the head
* `this.tail.next` assures that we include the CURRENT `this.tail` which is a `Nodes` structure. But its `next` value is null. Which is good because that's what it defaults to. But when we add a new value, we have to "push" our NEW node to `next` and then REASSIGN `this.next` to the NEW value

## Pop

```javascript
pop(){
    // Let's start from the beginning of the list
    let current = this.head; 

    // We also need to keep a reference of the penultimate node
    // this is because we'll use this as a reference when we replace
    let nextTail = current;

    while(current.next){
        nextTail = current;
        current = current.next;    
    }
    // We replace the tail with the penultimate node
    this.tail = nextTail;
    // Also need to make sure that the `next` prop is null to sever the connection
    this.tail.next = null;

    // Decrement since we're poping from the back of the list
    this.length--;

    // Edge case: We need to assure that if we reach the end of the list
    // that we'd assign everything to null since we have no other connections.
    if(this.length === 0){
        this.head = null;
        this.tail = null;
    }
    return this;
}
```

