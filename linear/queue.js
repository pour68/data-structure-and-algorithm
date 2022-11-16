class Queue {
  #list;
  constructor() {
    this.#list = [];
    this.length = 0;
  }

  enqueue(value) {
    this.#list.push(value);

    this.length++;
  }

  dequeue() {
    if (this.#isEmpty()) return null;

    this.#list.shift();

    this.length--;
  }

  contains(value) {
    let isFind = false;

    for (let i = 0; i < this.#list.length; i++)
      if (this.#list[i] === value) isFind = true;

    return isFind;
  }

  print() {
    let container = "";

    for (let i = 0; i < this.length; i++) {
      container += `${this.#list[i]} -> `;
    }

    return container;
  }

  #isEmpty() {
    return this.#list.length === 0;
  }
}
