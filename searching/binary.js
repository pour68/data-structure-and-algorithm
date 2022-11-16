class Binary {
  #list;
  constructor() {
    this.#list = [10, 100, 1000, 5000, 10000, 50000, 100000];
    this.step = 0;
  }

  search(value) {
    let index = this.#searchHelper(value);

    return index;
  }

  #searchHelper(value, start = 0, last = this.#list.length - 1) {
    if (start > last) return -1;

    let middle = Math.floor((start + last) / 2);
    this.step++;

    if (this.#list[middle] === value) return middle;
    else if (value < this.#list[middle])
      return this.#searchHelper(value, start, middle - 1);
    else return this.#searchHelper(value, middle + 1, last);
  }

  // non recursive
  #search(value) {
    let startIndex = 0;
    let lastIndex = this.#list.length - 1;

    while (startIndex <= lastIndex) {
      let middleIndex = Math.floor((startIndex + lastIndex) / 2);

      this.step++;

      if (this.#list[middleIndex] === value) return middleIndex;
      else if (value < this.#list[middleIndex]) lastIndex = middleIndex - 1;
      else startIndex = middleIndex + 1;
    }

    return -1;
  }
}
