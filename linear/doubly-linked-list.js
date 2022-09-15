const { Node, LinkedList } = require("./linked-list");

class DoubleNode extends Node {
  constructor(prev, value, next) {
    super(value, next);
    this.prev = prev;
  }
}

class DoublyLinkedList extends LinkedList {
  constructor() {
    super();
    this.tail = null;
  }

  insert(value) {
    let node = new DoubleNode(null, value, null);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.atIndex(this.length - 1);
      current.next = node;
      node.prev = current;
    }

    this.tail = node;
    this.length++;

    return node;
  }

  insertAt(index, value) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) this.insertAtFirst(value);

    const prev = this.atIndex(index - 1);
    const next = this.atIndex(index + 1);
    if (prev === null) return null;
    if (next === null) return null;

    prev.next = new DoubleNode(next.prev, value, prev.next);
    this.length++;
  }

  removeAt(index) {}

  reverse() {}

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  print() {
    let current = this.head;
    let output = "";

    for (let i = 0; i < this.length; i++) {
      output += `${current.value} <-> `;
      current = current.next;
    }

    return `null <-> ${output}null`;
  }
}

let dll = new DoublyLinkedList();

dll.insert(10);
dll.insert(100);
dll.insert(1000);

console.log(dll.print());
