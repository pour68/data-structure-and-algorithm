class NewArray {
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
    checkIfArrayIsEmpty();

    this.#list.pop(item);
  }

  getLatestItem() {
    checkIfArrayIsEmpty();

    return this.#list[this.#list.length - 1];
  }

  getAll() {
    return this.#list;
  }

  checkIfArrayIsEmpty() {
    if (this.#list.length === 0) throw new Error("array is empty.");
  }
}

let array = new NewArray(3);

array.add(10);
array.add(100);
array.add(1000);

console.log(array.getAll());
