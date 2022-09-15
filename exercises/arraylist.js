class ArrayList {
  #array;
  constructor() {
    this.#array = [];
    this.count = 0;
  }

  // O(1)
  add(value) {
    this.#array.push(value);
    this.count++;
  }

  // O(n)
  insertAt(index, value) {
    this.#checkIndex(index);
    this.#checkType(index);

    for (let i = index; i <= this.count; i++)
      this.#array[i + 1] = this.#array[i];

    this.#array[index] = value;

    this.count++;
  }

  // O(n)
  removeAt(index) {
    this.#checkIndex(index);
    this.#checkType(index);

    for (let i = index; i < this.count; i++)
      this.#array[i] = this.#array[i + 1];

    this.count--;
  }

  // O(n)
  indexOf(value) {
    for (let index = 0; index < this.count; index++)
      if (this.#array[index] === value) return index;

    return -1;
  }

  // O(1)
  atIndex(index) {
    this.#checkIndex(index);
    this.#checkType(index);

    return this.#array[index];
  }

  // O(n)
  contains(value) {
    let contain = false;

    for (let i = 0; i < this.count; i++)
      if (this.#array[i] === value) contain = true;

    return contain;
  }

  clear() {
    this.#array = [];
    this.count = 0;
  }

  #checkIndex(index) {
    if (index < 0 || index > this.count) throw new Error("enter valid index");
  }

  #checkType(index) {
    if (typeof index !== "number") throw new Error("enter valid number");
    else {
      if (Math.round(index) !== index)
        throw new Error("enter valid integer number");
    }
  }

  // O(n)
  print() {
    let container = "";

    for (let i = 0; i < this.count; i++) {
      container += this.#array[i] + " -> ";
    }

    return container;
  }
}

module.exports = ArrayList;
