// left child: 2*i+1
// right child: 2*i+2
// parent: Math.floor((i-1)/2)

class MinHeap {
  #list;
  constructor() {
    this.#list = [];
    this.length = 0;
  }

  insert(number) {
    this.#list[this.length] = number;

    this.length++;

    this.#heapifyTop(this.length - 1);
  }

  remove() {
    if (this.#isEmpty()) throw new Error("heap is empty");

    let number = this.#list[0];
    this.#list[0] = this.#list[this.length - 1];

    this.length--;

    this.#heapifyDown(0);

    return number;
  }

  print() {
    this.#list.length = this.length;

    return this.#list;
  }

  #heapifyTop(index) {
    if (this.#hasParent(index) && this.#getParent(index) > this.#list[index]) {
      let parentIndex = this.#getParentIndex(index);

      this.#swap(parentIndex, index);

      this.#heapifyTop(parentIndex);
    }
  }

  #heapifyDown(index) {
    let smallestIndex = index;

    if (
      this.#hasLeftChild(index) &&
      this.#list[smallestIndex] > this.#getLeftChild(index)
    )
      smallestIndex = this.#getLeftChildIndex(index);

    if (
      this.#hasRightChild(index) &&
      this.#list[smallestIndex] > this.#getRightChild(index)
    )
      smallestIndex = this.#getRightChildIndex(index);

    if (smallestIndex !== index) {
      this.#swap(index, smallestIndex);

      this.#heapifyDown(smallestIndex);
    }
  }

  #getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  #getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  #getRightChildIndex(index) {
    return 2 * index + 2;
  }

  #hasParent(index) {
    return this.#getParentIndex(index) >= 0;
  }

  #hasLeftChild(index) {
    return this.#getLeftChildIndex(index) < this.length;
  }

  #hasRightChild(index) {
    return this.#getRightChildIndex(index) < this.length;
  }

  #getParent(index) {
    return this.#list[this.#getParentIndex(index)];
  }

  #getLeftChild(index) {
    return this.#list[this.#getLeftChildIndex(index)];
  }

  #getRightChild(index) {
    return this.#list[this.#getRightChildIndex(index)];
  }

  #swap(index1, index2) {
    [this.#list[index1], this.#list[index2]] = [
      this.#list[index2],
      this.#list[index1],
    ];
  }

  #isEmpty() {
    return this.length === 0;
  }
}
