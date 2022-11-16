const { Touchscreen } = require("puppeteer");

class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }

  insert(data, node) {
    if (node == null) return new Node(data);

    if (data < node.data) node.left = this.insert(data, node.left);
    else if (data > node.data) node.right = this.insert(data, node.right);

    this.length++;

    return this.#rotate(node);
  }

  delete(data, node) {
    if (data < node.data && node.left) node.left = this.delete(data, node.left);
    else if (data > node.data && node.right)
      node.right = this.delete(data, node.right);
    else {
      if (data == node.data) {
        if (node.right && node.left) {
          let min = this.findMin(node.right);
          node.data = min;
          node.right = this.delete(min, node.right);
        } else if (node.left) return node.left;
        else if (node.right) return node.right;
        else return null;
      }
    }

    return this.#rotate(node);
  }

  inOrder(current) {
    if (current) {
      this.inOrder(current.left);
      console.log(current.data);
      this.inOrder(current.right);
    }
  }

  findMin(root) {
    let current = root;

    if (root.left) current = this.findMin(current.left);

    return current.data;
  }

  // findMin(root) {
  //   let current = root;

  //   while (current.left != null) current = current.left;

  //   return current.data;
  // }

  #rotate(node) {
    node.height =
      Math.max(this.#getHeight(node.left), this.#getHeight(node.right)) + 1;

    if (this.#getBalance(node) == 2 && this.#getBalance(node.left) >= 0)
      return this.#rightRotate(node);
    else if (this.#getBalance(node) == 2 && this.#getBalance(node.left) < 0) {
      node.left = this.#leftRotate(node.left);
      return this.#rightRotate(node);
    } else if (
      this.#getBalance(node) == -2 &&
      this.#getBalance(node.right) <= 0
    ) {
      return this.#leftRotate(node);
    } else if (
      this.#getBalance(node) == -2 &&
      this.#getBalance(node.right) > 0
    ) {
      node.right = this.#rightRotate(node.right);
      return this.#leftRotate(node);
    }

    return node;
  }

  #leftRotate(x) {
    const y = x.right;
    const yLeftChild = y.left;

    y.left = x;
    x.right = yLeftChild;

    x.height = Math.max(height(x.left), height(x.right)) + 1;
    y.height = Math.max(height(y.left), height(y.right)) + 1;

    return y;
  }

  #rightRotate(x) {
    const y = x.left;
    const yRightChild = y.right;

    y.right = x;
    x.left = yRightChild;

    x.height = Math.max(height(x.left), height(x.right)) + 1;
    y.height = Math.max(height(y.left), height(y.right)) + 1;

    return y;
  }

  #getHeight(node) {
    return node == null ? -1 : node.height;
  }

  #getBalance(node) {
    return this.#getHeight(node.left) - this.#getHeight(node.right);
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    if (this.root) this.root = this.root.insert(data, this.root);
    else this.root = new Node(data);
  }

  delete(data) {
    if (this.root) this.root = this.root.delete(data, this.root);
    else throw new Error("AVL Tree is empty.");
  }

  inOrder() {
    if (this.root) this.root.inOrder(this.root);
  }
}

let avl = new AVLTree();

avl.insert(13);
avl.insert(10);
avl.insert(15);
avl.insert(5);
avl.insert(11);
avl.insert(16);
avl.insert(4);
avl.insert(8);
avl.insert(3);

avl.delete(3);
avl.delete(4);
avl.delete(5);
avl.delete(8);
avl.delete(10);
avl.delete(11);
avl.delete(13);
avl.delete(15);
avl.delete(16);

avl.inOrder();
