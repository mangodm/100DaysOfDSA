// Creates a Node class
class Node {
  constructor(value) {
    this.value = value; 
    this.next = null;
  }
}

const newNode = new Node(4); // calls the Node class
console.log(newNode);

// Creates a LinkedList class
class LinkedList {
  constructor(value) {
    const newNode = new Node(4);
    this.head = newNode 
    this.tail = this.head
    this.length = 1
  };
  // push: adds the last at the end of the LL
  push(value) {
    const newNode = new Node(value);
    // handles edge cases
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode; 
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length ++;
    return this
  }
  // pop
  // unshift
  // shift
  // get
  // set
  // insert
  // remove
  // reverse
}

let myLinkedList = new LinkedList(4); // calls the LinkedList class
myLinkedList.push(7);
console.log(myLinkedList);
