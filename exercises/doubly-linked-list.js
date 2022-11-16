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

  insertAtHead(value) {
    if (this.head === null && this.tail === null)
      return this.#AddFirstElement(value);

    let node = new DllNode(null, value, null);

    this.head.prev = node;
    node.next = this.head;
    this.head = node;

    this.length++;
  }

  insertAtTail(value) {
    let node = new DllNode(null, value, null);

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;

    this.length++;
  }

  insertAt(index, value) {
    this.#checkIndexValidation(index);

    if (index === 0) return this.insertAtHead(value);

    if (index === this.length) return this.insertAtTail(value);

    let node = new DllNode(this.head, value, this.tail);
    let prev = this.indexAt(index - 1);

    let next = prev.next;
    if (prev === null) return null;

    prev.next = node;
    next.prev = node;
    node.prev = prev;
    node.next = next;

    this.length++;
  }

  indexAt(index) {
    if (this.length === 0) throw new Error("LinkedList is empty.");

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

  removeAtTail() {
    this.tail = this.tail.prev;
    this.tail.next = null;

    this.length--;
  }

  removeAt(index) {
    this.#checkIndexValidation(index);

    if (index === 0) return this.removeAtHead();

    if (index === this.length - 1) return this.removeAtTail();

    // let prev = this.indexAt(index - 1);
    // if (prev === null) return null;

    // let current = prev.next;
    // let next = current.next;

    // prev.next = next;
    // next.prev = prev;

    let current = this.indexAt(index);

    let prev = current.prev;
    let next = current.next;

    prev.next = next;
    next.prev = prev;

    this.length--;
  }

  #AddFirstElement(value) {
    let node = new DllNode(null, value, null);

    this.head = node;
    this.tail = this.head;

    this.length++;
  }

  printRTL() {
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

  printLTR() {
    let array = [];
    let container = "";
    let current = this.tail;

    while (current) {
      array.push(current.value);

      current = current.prev;
    }

    container = array.join(" <-> ");

    return container;
  }

  #checkIndexValidation(index) {
    if (index < 0 || index > this.length) throw new Error("enter valid index");

    if (!Number.isInteger(index)) throw new Error("enter valid integer index");
  }
}
