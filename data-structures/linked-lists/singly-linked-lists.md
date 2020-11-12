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

