class HashTable {
  #table;
  constructor(length) {
    this.#table = new Array(length);
    this.length = 0;
  }

  set(key, value) {
    const index = this.#hash(key);

    let row = this.#table[index];
    if (row) {
      let colsLength = this.#table[index].length;

      for (let i = 0; i < colsLength; i++)
        if (row[i][0] === key)
          throw new Error(`${key} is repititive, key should be unique.`);
    } else this.#table[index] = [];

    this.#table[index].push([key, value]);

    this.length++;
  }

  get(key) {
    const index = this.#hash(key);
    let row = this.#table[index];

    if (row) {
      let colsLength = row.length;

      for (let i = 0; i < colsLength; i++)
        if (row[i][0] === key) return row[i][1];
    }

    throw new Error(`Element with key = ${key} not found`);
  }

  remove(key) {
    const index = this.#hash(key);

    let row = this.#table[index];
    if (row && row.length) {
      let colsLength = this.#table.length;

      for (let i = 0; i < colsLength; i++) {
        if (this.#table[index][i][0] === key) {
          this.#table[index].splice(i, 1);
          this.length--;

          return true;
        }
      }
    } else return false;
  }

  print() {
    this.#table.forEach((rows, index) => {
      const cols = rows.map(([key, value]) => `[${key}, ${value}]`);

      console.table(`${index}:${cols}`);
    });
  }

  #hash(key) {
    this.#checkStringValidation(key);

    let hash = 0;
    for (let i = 0; i < key.length; i++) hash += key.charCodeAt(i);

    return hash % this.#table.length;
  }

  #checkStringValidation(key) {
    if (typeof key !== "string") throw new Error("key should be string");

    if (key.length === 0) throw new Error("enter valid key.");
  }
}
