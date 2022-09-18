class HashTable {
  #list;
  constructor(length) {
    this.#list = new Array(length);
    this.size = 0;
  }

  set(key, value) {
    const index = this.#hash(key);

    this.#list[index] = [key, value];

    this.size++;
  }

  get(key) {
    const index = this.#hash(key);

    return this.#list[index];
  }

  remove(key) {
    const index = this.#hash(key);

    if (this.#list[index] && this.#list[index].length) {
      this.#list[index] = [];

      this.size--;
    } else throw new Error(`No element detected with the key "${key}"`);
  }

  print() {
    return this.#list;
  }

  #hash(key) {
    this.#checkStringValidation(key);

    let hash = 0;
    for (let i = 0; i < key.length; i++) hash += key.charCodeAt(i);

    return hash % this.#list.length;
  }

  #checkStringValidation(key) {
    if (typeof key !== "string") throw new Error("key should be string");

    if (key.length === 0) throw new Error("enter valid key.");
  }
}
