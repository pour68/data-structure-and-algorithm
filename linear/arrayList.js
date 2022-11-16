class ArrayList {
  #list;
  constructor() {
    this.#list = [];
    this.length = 0;
  }

  add(value) {
    this.#list.push(value);

    this.length++;
  }

  insertAt(index, value) {
    this.#checkIndexValidation(index);

    for (let i = this.length - 1; i >= index; i--)
      this.#list[i + 1] = this.#list[i];

    this.#list[index] = value;

    this.length++;
  }

  remove(value) {
    if (this.contains(value)) {
      let index = this.indexOf(value);

      this.removeAt(index);
    }

    throw new Error(`The ${value} not exist.`);
  }

  indexOf(value) {
    let index = -1;
    for (let i = 0; i < this.length; i++)
      if (this.#list[i] === value) index = i;

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

  contains(value) {
    let isFind = false;

    for (let i = 0; i < this.#list.length; i++)
      if (this.#list[i] === value) isFind = true;

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
