class Bubble {
  #list;
  constructor() {
    this.#list = [15, 2, 3, 8, 18, 5];
    this.step = 0;
  }

  // O(n^2)
  sort() {
    let isSorted;

    for (let i = 0; i < this.#list.length; i++) {
      isSorted = true;

      for (let j = 1; j < this.#list.length - i; j++) {
        if (this.#list[j] < this.#list[j - 1]) {
          this.#swap(j, j - 1);

          isSorted = false;

          this.step++;
        } else this.step++;
      }

      if (isSorted) return;
    }
  }

  print() {
    return { list: this.#list, steps: this.step };
  }

  #swap(i1, i2) {
    [this.#list[i1], this.#list[i2]] = [this.#list[i2], this.#list[i1]];
  }
}
