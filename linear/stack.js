class Stack {
  #list;
  constructor() {
    this.#list = [];
  }

  push(value) {
    return this.#list.push(value);
  }

  pop() {
    this.checkIfStackIsEmpty();

    return this.#list.pop();
  }

  getByIndex(index) {
    this.checkIfStackIsEmpty();

    if (this.#list.length <= index) throw new Error("Please enter valid index");

    return this.#list[index];
  }

  getLatestValue() {
    this.checkIfStackIsEmpty();

    return this.#list[this.#list.length - 1];
  }

  getAll() {
    return this.#list;
  }

  checkIfStackIsEmpty() {
    if (this.#list.length === 0) throw new Error("List is empty.");
  }
}

const stack = new Stack();
stack.push(10);
stack.push(100);

console.log(stack.pop());
