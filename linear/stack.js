class Stack {
  #list;
  constructor() {
    this.#list = [];
    this.length = 0;
  }

  push(value) {
    this.#list.push(value);

    this.length++;
  }

  pop() {
    if (this.#isEmpty()) throw new Error("stack is empty.");

    this.#list.pop();

    this.length--;
  }

  peek() {
    if (this.#isEmpty()) throw new Error("stack is empty.");

    return this.#list[this.length - 1];
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
