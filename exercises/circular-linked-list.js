class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Cll {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(value) {
    let node = new LinkedListNode(value, this.head);
    this.head = node;
    this.length++;

    this.#findLatestNodeAndUpdateNextProp();
  }

  insertAt(index, value) {
    this.length++;
    this.#checkIndexValidation(index);

    if (index === 0) return this.insertHead(value);

    let prev = this.indexAt(index - 1);
    if (prev === null) return null;

    prev.next = new LinkedListNode(value, prev.next);
  }

  removeAtHead() {
    if (this.length === 0) throw new Error("LinkedList is empty.");

    let current = this.head;

    this.head = current.next;
    this.length--;

    this.#findLatestNodeAndUpdateNextProp();
  }

  removeAt(index) {
    this.#checkIndexValidation(index);

    if (index === 0) return this.removeHead();

    let prev = this.indexAt(index - 1);
    if (prev === null) return null;

    prev.next = prev.next.next;

    this.length--;

    this.#findLatestNodeAndUpdateNextProp();
  }

  indexAt(index) {
    this.#checkIndexValidation(index);

    let current = this.head;

    for (let i = 0; i < index; i++) current = current.next;

    return current;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  print() {
    let array = [];
    let container = "";
    let current = this.head;

    if (this.#isEmpty()) return;

    for (let index = 0; index <= this.length; index++) {
      array.push(current.value);

      current = current.next;
    }

    container = array.join(" <-> ");

    return `${container}`;
  }

  #findLatestNodeAndUpdateNextProp() {
    let latestIndex = this.length - 1;
    if (latestIndex < 1) this.head.next = this.head;
    else {
      let latestNode = this.indexAt(latestIndex);
      latestNode.next = this.head;
    }
  }

  #checkIndexValidation(index) {
    if (index < 0 || index > this.length) throw new Error("enter valid index");

    if (!Number.isInteger(index)) throw new Error("enter valid integer index");
  }

  #isEmpty() {
    return this.length === 0;
  }
}

let cll = new Cll();

cll.insertAtHead(10);
cll.insertAtHead(100);
cll.insertAtHead(1000);
cll.insertAtHead(10000);

console.log(cll.print());
