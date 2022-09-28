class Binary {
  #list;
  constructor() {
    this.#list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.step = 0;
  }

  search(value) {
    let index = this.#searchHelper(value, start, last);

    return index;
  }

  #searchHelper(value, start = 0, last = this.#list.length - 1) {
    if (start > last) return -1;

    let middle = Math.floor((start + last) / 2);
    this.step++;

    if (this.#list[middle] === value) return middle;
    else if (value < this.#list[middle])
      return this.#binaryHelper(value, start, middle - 1);
    else return this.#binaryHelper(value, middle + 1, last);
  }

  // non recursive
  #search(value) {
    let start = 0;
    let last = this.#list.length - 1;

    while (start <= last) {
      let middle = Math.floor((start + last) / 2);

      this.step++;

      if (this.#list[middle] === value) return middle;
      else if (value < this.#list[middle]) last = middle - 1;
      else start = middle + 1;
    }

    return -1;
  }
}
