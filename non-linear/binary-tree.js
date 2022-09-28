class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }

  insert(data) {
    let current = this.data;

    if (current == data)
      throw new Error(`Data = ${data} already exist in the tree.`);
    else if (data < current) {
      if (this.left) this.left.insert(data);
      else this.left = new Node(data);
    } else {
      if (this.right) this.right.insert(data);
      else this.right = new Node(data);
    }
  }

  delete(data) {
    let current = this.data;

    if (data < current && this.left) this.left = this.left.delete(data);
    else if (data > current && this.right) this.right = this.right.delete(data);
    else {
      if (data == current) {
        if (this.left && this.right) {
          let min = this.right.findMin();
          this.data = min;
          this.right = this.right.delete(min);
        } else if (this.left) return this.left;
        else if (this.right) return this.right;
        else return null;
      }
    }

    return this;
  }

  findMin() {
    if (this.left) return this.left.findMin();
    else return this.data;
  }

  find(data) {
    let current = this.data;

    if (current == data) return true;
    else if (data < current && this.left != null) return this.left.find(data);
    else if (data > current && this.right != null) return this.right.find(data);

    return false;
  }

  findHeight(current) {
    if (current == null) return -1;
    let leftHeight = this.findHeight(current.left);
    let rightHeight = this.findHeight(current.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  inOrder(current) {
    if (current) {
      this.inOrder(current.left);
      console.log(current.data);
      this.inOrder(current.right);
    }
  }

  preOrder(current) {
    if (current) {
      console.log(current.data);
      this.preOrder(current.left);
      this.preOrder(current.right);
    }
  }

  postOrder(current) {
    if (current) {
      this.postOrder(current.left);
      this.postOrder(current.right);
      console.log(current.data);
    }
  }

  //   findMin() {
  //     let current = this;

  //     while (current.left) current = current.left;

  //     return current.data;
  //   }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    this.root ? this.root.insert(data) : (this.root = new Node(data));
  }

  delete(data) {
    if (this.root) this.root.delete(data);
  }

  find(data) {
    const result = this.root ? this.root.find(data) : false;

    return result;
  }

  findHeight() {
    if (this.root) return this.root.findHeight(this.root);

    return -1;
  }

  // leftSubTree print rightSubTree
  inOrder() {
    if (this.root) this.root.inOrder(this.root);
  }

  // print leftSubTree rightSubTree
  preOrder() {
    if (this.root) this.root.preOrder(this.root);
  }

  // leftSubTree rightSubTree print
  postOrder() {
    if (this.root) this.root.postOrder(this.root);
  }
}
