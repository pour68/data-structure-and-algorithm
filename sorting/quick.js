class Quick {
  constructor() {
    this.step = 0;
  }

  sort(list) {
    if (list.length <= 1) return list;

    let latestIndex = list.length - 1;
    const pivot = list[latestIndex];
    const left = [],
      right = [];

    for (let i = 0; i < latestIndex; i++) {
      let current = list[i];

      current < pivot ? left.push(current) : right.push(current);
    }

    if (left.length > 0 && right.length > 0)
      return [...this.quick(left), pivot, ...this.quick(right)];
    else if (left.length > 0) return [...this.quick(left), pivot];
    else return [pivot, ...this.quick(right)];
  }
}
