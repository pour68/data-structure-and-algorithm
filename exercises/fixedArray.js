class FixedArray {
  #list;
  constructor(count) {
    this.#list = [];
    this.count = count;
  }

  add(item) {
    if (this.#list.length === this.count) throw new Error("Array is full.");

    this.#list.push(item);
  }

  remove() {
    this.#checkIfArrayIsEmpty();

    this.#list.pop();
  }

  getLatestItem() {
    this.#checkIfArrayIsEmpty();

    return this.#list[this.#list.length - 1];
  }

  atIndex(index) {
    return this.#list[index];
  }

  getAll() {
    return this.#list;
  }

  #checkIfArrayIsEmpty() {
    if (this.#list.length === 0) throw new Error("array is empty.");
  }
}