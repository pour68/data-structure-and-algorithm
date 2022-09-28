class ArrayList {
  #list;
  constructor() {
    this.#list = [];
    this.length = 0;
  }

  add(element) {
    this.#list.push(element);

    this.length++;
  }

  insertAt(index, element) {
    this.#checkIndexValidation(index);

    for (let i = this.length - 1; i >= index; i--)
      this.#list[i + 1] = this.#list[i];

    this.#list[index] = element;

    this.length++;
  }

  remove(element) {
    if (this.contains(element)) {
      let index = this.indexOf(element);

      this.removeAt(index);
    }

    throw new Error(`The ${element} not exist.`);
  }

  indexOf(element) {
    let index = -1;
    for (let i = 0; i < this.length; i++)
      if (this.#list[i] === element) index = i;

    return index;
  }

  removeAt(index) {
    if (this.#isEmpty()) throw new Error("arraylist is empty.");

    this.#checkIndexValidation(index);

    for (let i = index; i < this.length; i++) this.#list[i] = this.#list[i + 1];

    this.length--;
  }

  indexAt(index) {
    this.#checkIndexValidation(index);

    return this.#list[index];
  }

  contains(element) {
    let isFind = false;

    for (let i = 0; i < this.#list.length; i++)
      if (this.#list[i] === element) isFind = true;

    return isFind;
  }

  clear() {
    this.#list = [];
    this.length = 0;
  }

  print() {
    let container = "";

    for (let i = 0; i < this.length; i++) {
      container += `${this.#list[i]} -> `;
    }

    return container;
  }

  #checkIndexValidation(index) {
    if (typeof index === "number")
      if (Math.round(index) !== index)
        throw new Error("enter valid integer index.");

    if (index < 0 || index >= this.length)
      throw new Error("enter valid index.");
  }

  #isEmpty() {
    return this.#list.length === 0;
  }
}

module.exports = ArrayList;
