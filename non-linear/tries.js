class Node {
  constructor(char) {
    this.char = char;
    this.isWord = false;
    this.children = new Array(26); // english lowercase letters
  }
}

class Trie {
  #root;
  #array;
  constructor() {
    this.#root = new Node("\0");
    this.#array = [];
  }

  // O(n)
  insert(word) {
    let current = this.#root;

    for (let i = 0; i < word.length; i++) {
      let char = word.charAt(i);
      let index = char.charCodeAt(0) - "a".charCodeAt(0);

      if (current.children[index] == null)
        current.children[index] = new Node(char);

      current = current.children[index];
    }

    current.isWord = true;
    this.#array.push(word);
  }

  // O(n)
  search(word) {
    let current = this.#getNode(word);

    return current != null && current.isWord;
  }

  // O(n)
  startsWith(prefix) {
    return this.#getNode(prefix) != null;
  }

  print() {
    return this.#array;
  }

  #getNode(word) {
    let current = this.#root;

    for (let i = 0; i < word.length; i++) {
      let char = word.charAt(i);
      let index = char.charCodeAt(0) - "a".charCodeAt(0);

      if (current.children[index] == null) return null;

      current = current.children[index];
    }

    return current;
  }
}

const tries = new Trie();

tries.insert("mehdi");
tries.insert("mehran");
tries.insert("pouria");
tries.insert("ali");
tries.insert("hamed");

console.log(tries.print());
