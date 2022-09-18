class DllNode {
  constructor(prev, value, next) {
    this.prev = prev;
    this.value = value;
    this.next = next;
  }
}

class Dll {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertAtHead(element) {
    if (this.head === null && this.tail === null)
      return this.#AddFirstElement(element);

    let node = new DllNode(null, element, null);

    this.head.prev = node;
    node.next = this.head;
    this.head = node;

    this.length++;
  }

  insertAtTail(element) {
    let node = new DllNode(null, element, null);

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;

    this.length++;
  }

  insertAt(index, element) {
    this.#checkIndexValidation(index);

    if (index === 0) return this.insertAtHead(element);

    if (index === this.length) return this.insertAtTail();

    // Reach the node at that index
    let newNode = new Node(value);
    let previousNode = this.head;

    for (let k = 0; k < index - 1; k++) {
      previousNode = previousNode.next;
    }

    let nextNode = previousNode.next;

    newNode.next = nextNode;
    previousNode.next = newNode;
    newNode.previous = previousNode;
    nextNode.previous = newNode;

    this.length++;
  }

  insertAt(index, element) {
    this.#checkIndexValidation(index);

    if (index === 0) return this.insertAtHead(element);

    if (index === this.length) return this.insertAtTail(element);

    let node = new DllNode(this.head, element, this.tail);
    let prev = this.indexAt(index - 1);

    let next = prev.next;
    if (prev === null) return null;

    node.next = next;
    prev.next = node;
    node.prev = prev;
    next.prev = node;

    this.length++;
  }

  indexAt(index) {
    this.#checkIndexValidation(index);

    let current = this.head;

    for (let i = 0; i < index; i++) current = current.next;

    return current;
  }

  removeAtHead() {
    this.head = this.head.next;
    this.head.prev = null;

    this.length--;
  }

  removeAtLast() {
    this.tail = this.tail.prev;
    this.tail.next = null;

    this.length--;
  }

  removeAt(index) {
    this.#checkIndexValidation(index);

    if (index === 0) return this.removeAtHead();

    if (index === this.length) return this.removeAtLast();

    let prev = this.indexAt(index - 1);
    if (prev === null) return null;

    let removeNode = prev.next;
    let next = removeNode.next;

    prev.next = next;
    next.prev = prev;

    this.length--;
  }

  #AddFirstElement(element) {
    let node = new DllNode(null, element, null);

    this.head = node;
    this.tail = this.head;

    this.length++;
  }

  print() {
    let array = [];
    let container = "";
    let current = this.head;

    while (current) {
      array.push(current.value);

      current = current.next;
    }

    container = array.join(" <-> ");

    return container;
  }

  #checkIndexValidation(index) {
    if (index < 0 || index > this.length) throw new Error("enter valid index");

    if (!Number.isInteger(index)) throw new Error("enter valid integer index");
  }
}

let dll = new Dll();

dll.insertAtHead(10);
dll.insertAtHead(100);
dll.insertAtTail(1000);
dll.insertAtTail(10000);

console.log(dll.print());
