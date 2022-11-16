class HashTable {
  #table;

  constructor(size) {
    this.#table = new Array(size);
    this.size = size;
  }

  set(key, value) {
    let hash = this.#hash(key);
    this.#table[hash] = value;
  }

  get(key) {
    let hash = this.#hash(key);

    return this.#table[hash];
  }

  remove(key) {
    let hash = this.#hash(key);
    this.#table[hash] = undefined;
  }

  print() {
    let container = "";

    for (let i = 0; i < this.#table.length; i++) {
      if (this.#table[i]) container += `${i} ${this.#table[i]}\n`;
    }

    return container;
  }

  #hash(key) {
    this.#checkKeyValidation(key);

    let hash = 0;
    for (let i = 0; i < key.length; i++) hash += key.charCodeAt(i);

    return hash % this.size;
  }

  #checkKeyValidation(key) {
    if (typeof key !== "string")
      throw new Error("key should be of type string");

    if (key.length <= 0) throw new Error("key is not valid.");
  }
}
