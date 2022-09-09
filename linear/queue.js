class Queue {
  #list;
  constructor() {
    this.#list = [];
  }

  enqueue(value) {
    return this.#list.push(value);
  }

  dequeue() {
    this.checkIfQueueIsEmpty();

    return this.#list.shift();
  }

  getFirstElementInQueue() {
    this.checkIfQueueIsEmpty();

    return this.#list[this.#list.length - 1];
  }

  getByIndex(index) {
    this.checkIfQueueIsEmpty();

    if (this.#list.length <= index) throw new Error("Please enter valid index");

    return this.#list[index];
  }

  getAll() {
    return this.#list;
  }

  checkIfQueueIsEmpty() {
    if (this.#list.length === 0) throw new Error("List is empty.");
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(100);
queue.enqueue(1000);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
