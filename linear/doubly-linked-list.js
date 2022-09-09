class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.first = new Node(value);
  }
}
