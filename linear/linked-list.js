class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.first = null;
    this.length = 0;
  }

  // O(1)
  insertAtFirst(value) {
    let node = new Node(value, this.first);
    this.first = node;
    this.length++;
  }

  // O(n)
  atIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.first;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  // O(n)
  insertAt(index, value) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) this.insertAtFirst(value);

    const prev = this.atIndex(index - 1);
    if (prev === null) return null;

    prev.next = new Node(value, prev.next);
    this.length++;
  }

  // O(1)
  removeHead() {
    if (this.length <= 0) return null;

    this.first = this.first.next;
    this.length--;
  }

  // O(n)
  removeAt(index) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) return this.removeHead();

    const prev = this.atIndex(index - 1);
    if (prev === null) return null;

    prev.next = prev.next.next;
    this.length--;
  }

  // O(n)
  print() {
    let current = this.first;
    let output = "";

    while (current) {
      output += `${current.value} -> `;
      current = current.next;
    }

    console.log(output + "null");
  }
}

const ll = new LinkedList();

ll.insertAtFirst(10);
ll.insertAtFirst(100);
ll.insertAtFirst(1000);
ll.insertAtFirst(10000);
ll.removeAt(1);

console.log(ll.print());
