class Stack {
  #list;
  constructor() {
    this.#list = [];
    this.length = 0;
  }

  push(element) {
    this.#list.push(element);

    this.length++;
  }

  pop() {
    if (this.#isEmpty()) throw new Error("stack is empty.");

    this.#list.pop();

    this.length--;
  }

  contains(element) {
    let isFind = false;

    for (let i = 0; i < this.#list.length; i++)
      if (this.#list[i] === element) isFind = true;

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

module.exports = Stack;
