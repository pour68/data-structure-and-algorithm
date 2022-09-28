// left child: 2*i+1
// right child: 2*i+2
// parent: Math.floor((i-1)/2)

class MinHeap {
  #heap;
  constructor() {
    this.#heap = [];
    this.length = 0;
  }

  insert(number) {
    this.#heap[this.length] = number;

    this.length++;

    this.#heapifyTop(this.length - 1);
  }

  remove() {
    if (this.#isEmpty()) throw new Error("heap is empty");

    let number = this.#heap[0];
    this.#heap[0] = this.#heap[this.length - 1];

    this.length--;

    this.#heapifyDown(0);

    return number;
  }

  print() {
    this.#heap.length = this.length;

    return { count: this.length, list: this.#heap };
  }

  #heapifyTop(index) {
    if (this.#hasParent(index) && this.#getParent(index) > this.#heap[index]) {
      let parentIndex = this.#getParentIndex(index);

      this.#swap(parentIndex, index);

      this.#heapifyTop(parentIndex);
    }
  }

  #heapifyToTop() {
    let index = this.length - 1;

    while (
      this.#hasParent(index) &&
      this.#getParent(index) > this.#heap[index]
    ) {
      let parentIndex = this.#getParentIndex(index);

      this.#swap(parentIndex, index);

      index = parentIndex;
    }
  }

  #heapifyDown(index) {
    let smallestIndex = index;

    if (
      this.#hasLeftChild(index) &&
      this.#heap[smallestIndex] > this.#getLeftChild(index)
    )
      smallestIndex = this.#getLeftChildIndex(index);

    if (
      this.#hasRightChild(index) &&
      this.#heap[smallestIndex] > this.#getRightChild(index)
    )
      smallestIndex = this.#getRightChildIndex(index);

    if (smallestIndex !== index) {
      this.#swap(index, smallestIndex);

      this.#heapifyDown(smallestIndex);
    }
  }

  #heapifyToDown() {
    let index = 0;

    while (this.#hasLeftChild(index)) {
      let smallerChildIndex = this.#getLeftChildIndex(index);

      if (
        this.#hasRightChild(index) &&
        this.#getRightChild(index) < this.#getLeftChild(index)
      )
        smallerChildIndex = this.#getRightChildIndex(index);

      if (this.#heap[index] < this.#heap[smallerChildIndex]) break;
      else this.#swap(index, smallerChildIndex);

      index = smallerChildIndex;
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
    return this.#heap[this.#getParentIndex(index)];
  }

  #getLeftChild(index) {
    return this.#heap[this.#getLeftChildIndex(index)];
  }

  #getRightChild(index) {
    return this.#heap[this.#getRightChildIndex(index)];
  }

  #swap(i1, i2) {
    [this.#heap[i1], this.#heap[i2]] = [this.#heap[i2], this.#heap[i1]];
  }

  #isEmpty() {
    return this.length === 0;
  }
}

const mh = new MinHeap();

mh.insert(76);
mh.insert(6);
mh.insert(11);
mh.insert(43);
mh.insert(64);
mh.insert(24);

mh.remove();
mh.remove();

console.log(mh.print());
