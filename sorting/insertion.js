class Insertion {
  #list;
  constructor() {
    this.#list = [15, 2, 3, 8, 18, 5];
    this.step = 0;
  }

  // O(n^2)
  sort() {
    for (let i = 1; i < this.#list.length; i++) {
      let current = this.#list[i];
      let j = i - 1;

      while (j >= 0 && this.#list[j] > current) {
        this.#list[j + 1] = this.#list[j];

        this.step++;

        j--;
      }

      this.step++;

      this.#list[j + 1] = current;
    }
  }
}
