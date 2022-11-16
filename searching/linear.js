class Linear {
  #list;
  constructor() {
    this.#list = [];
    this.step = 0;
  }

  insert(value) {
    this.#list.push(value);
  }

  search(value) {
    for (let i = 0; i < this.#list.length; i++)
      if (this.#list[i] === value) return i;

    return -1;
  }
}
