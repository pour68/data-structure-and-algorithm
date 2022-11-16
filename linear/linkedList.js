class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertHead(value) {
    let node = new LinkedListNode(value, this.head);

    this.head = node;
    this.length++;
  }

  removeHead() {
    if (this.length === 0) throw new Error("LinkedList is empty.");

    let current = this.head;

    this.head = current.next;
    this.length--;
  }

  indexAt(index) {
    if (this.length === 0) throw new Error("LinkedList is empty.");

    this.#checkIndexValidation(index);

    let current = this.head;

    for (let i = 0; i < index; i++) current = current.next;

    return current;
  }

  insertAt(index, value) {
    this.length++;
    this.#checkIndexValidation(index);

    if (index === 0) return this.insertHead(value);

    let prev = this.indexAt(index - 1);
    if (prev === null) return null;

    prev.next = new LinkedListNode(value, prev.next);
  }

  removeAt(index) {
    this.#checkIndexValidation(index);

    if (index === 0) return this.removeHead();

    let prev = this.indexAt(index - 1);
    if (prev === null) return null;

    prev.next = prev.next.next;

    this.length--;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  search(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) return index;

      index++;
      current = current.next;
    }

    return -1;
  }

  print() {
    let container = "";
    let current = this.head;

    while (current) {
      container += `${current.value} -> `;

      current = current.next;
    }

    return `${container}${this.length > 0 ? "null" : ""}`;
  }

  #checkIndexValidation(index) {
    if (typeof index === "number")
      if (Math.round(index) !== index)
        throw new Error("enter valid integer index.");

    if (index < 0 || index >= this.length)
      throw new Error("enter valid index.");
  }
}
