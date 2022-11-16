class Merge {
  constructor() {
    this.step = 0;
  }

  // O(nlog(n))
  sort(array) {
    if (array.length === 1) return array;

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    this.step++;

    return this.#mergeTopDown(this.sort(left), this.sort(right));
  }

  #mergeTopDown(left, right) {
    const array = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) array.push(left.shift());
      else array.push(right.shift());
    }

    return array.concat(left.slice()).concat(right.slice());
  }
}

let merge = new Merge();

console.log(merge.sort([100, 10, 15, 17, 11]));
