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

    if (index === this.length) return this.insertAtTail(element);

    let node = new DllNode(this.head, element, this.tail);
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

  #AddFirstElement(element) {
    let node = new DllNode(null, element, null);

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

let dll = new Dll();

dll.insertAtHead(10);
dll.insertAtHead(100);

dll.insertAtTail(1000);
dll.insertAtTail(10000);

dll.insertAt(2, 11);
dll.insertAt(4, 111);

dll.removeAt(5);
dll.removeAt(0);
dll.removeAt(1);

console.log(dll.printRTL());
// console.log(dll.printLTR());
