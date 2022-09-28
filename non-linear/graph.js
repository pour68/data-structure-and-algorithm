class Graph {
  #nodes;
  constructor() {
    this.#nodes = new Map();
    this.length = 0;
    this.steps = 0;
  }

  addNode(source) {
    this.#nodes.set(source, []);

    this.length++;
  }

  addEdge(source, destination) {
    this.#nodes.get(source).push(destination);
    this.#nodes.get(destination).push(source);
  }

  removeNode(source) {
    if (this.#nodes.has(source)) {
      this.#nodes.delete(source);

      this.length--;
    }
  }

  removeEdge(source, destination) {
    let sources = this.#nodes.get(source);
    sources.forEach((item, index) => {
      if (item === destination) sources.splice(index, 1);
    });

    let destinations = this.#nodes.get(destination);
    destinations.forEach((item, index) => {
      if (item === source) destinations.splice(index, 1);
    });
  }

  contains(key) {
    let isFind = false;

    for (const keyValue of this.#nodes.keys()) {
      if (keyValue == key) isFind = true;
    }

    return isFind;
  }

  bfs(source, destination) {
    const queue = [source];
    const visited = {};

    while (queue.length > 0) {
      let current = queue.shift();

      if (visited[current]) continue;
      if (current === destination) return { isFind: true, steps: this.steps };

      this.steps++;

      visited[current] = true;

      let neighbours = this.#nodes.get(current);
      for (let i = 0; i < neighbours.length; i++) queue.push(neighbours[i]);
    }

    return { isFind: false };
  }

  dfs(source, destination, visited = {}) {
    if (visited[source]) return false;

    if (source === destination) return { isFind: true, steps: this.steps };

    this.steps++;

    visited[source] = true;

    let neighbours = this.#nodes.get(source);
    for (let i = 0; i < neighbours.length; i++) {
      if (this.dfs(neighbours[i], destination, visited)) {
        return { isFind: true, steps: this.steps };
      }
    }

    return false;
  }

  print() {
    return this.#nodes;
  }
}

const g = new Graph();

g.addNode("S");
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");
g.addNode("F");
g.addNode("G");

g.addEdge("S", "A");
g.addEdge("S", "B");
g.addEdge("S", "C");
g.addEdge("A", "D");
g.addEdge("B", "E");
g.addEdge("C", "F");
g.addEdge("D", "G");
g.addEdge("E", "G");
g.addEdge("F", "G");

g.removeEdge("S", "A");
g.removeEdge("A", "D");
g.removeNode("A");

console.log(g.print());
