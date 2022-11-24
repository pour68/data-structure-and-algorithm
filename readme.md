# Data structure and algorithm

## History

---

## Definition

In computer science, a data structure is a data organization, management, and storage format that is usually chosen for efficient access to data, more precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.

---

## Algorithm

- set of steps/instructions for completing a task.
- clearly defined problem statement, input and output.
- correctness and efficiency

---

## Bio O notation (Time/Space complexity)

- constant
- logarithmic
- linear
- quadratic
- exponential

---

## Linear data structers

### Array

Definition: An array is a number of elements in a specific order, typically all of the same type (depending on the language, individual elements may either all be forced to be the same type, or may be of almost any type). Elements are accessed using an integer index to specify which element is required. Typical implementations allocate contiguous memory words for the elements of arrays (but this is not always a necessity). Arrays may be fixed-length or resizable.

---

### FixedArray

step 1: create FixedArray class with list and count properties
step 2: default value of list is [] and count feed from constructor

add(item) {
    1. if list length and count is equal then array is full
    2. add item at the end of array
}

remove() {
    1. check if array is empty
    2. remove from end of array
}

getLatestItem() {
    1. check if array is empty
    2. find the latest item and return
}

atIndex(index) {
    1. check index validation
    2. find and return by index
}

getAll() {
    1. return array
}

isEmpty() {
    1. if array is empty generate and error
}

Note: isEmpty is helper method.

---

### ArrayList

step 1: create ArrayList class with list and length properties
step 2: default value of list is [] and length is 0

add(element) {
    1. add element at the end of the list
    2. increase arraylist length by one
}

remove(element) {
    1. check if element contains in the list
    2. if exist find the index and remove by index
    3. otherwise return error element not exist
}

removeAt(index) {
    1. check if list is empty
    2. check index validation
    3. move each element from right to left from specific index
    4. decrease arraylist length by one
}

insertedAt(index, element) {
    1. check index validation
    2. move each element from left to right from last till specific index
    3. put an element in the right position in list
    4. increase arraylist length by one
}

indexOf(element) {
    1. specify a variable with default value -1
    2. iterate through each item
    3. if any item is equal with element, set variable with the found index
    4. return index
}

indexAt(index) {
    1. validate the index
    2. return found element by index
}

contains(element) {
    1. specify a variable with default value false
    2. iterate through each item in the array
    3. if any item is equal with input element, specified variable to true
    4. return specified variable
}

clear() {
    1. set list to default value
    2. set length to 0
}

---

### Stack

A stack works based on the LIFO principle i.e., Last In, First out, meaning that the most recently added element is the first one to remove.

step 1: create Stack class with list and length properties
step 2: list and length default values are [] and  0 respectively

push(value) {
    1. add value at the end of array
    2. increase stack length by one
}

pop() {
    1. check if list is empty
    2. remove at the end
    3. decrease stack length by one
}

peek() {
    1. find the prior element and return
}

contains(element) {
    1. create a variable with default value false
    2. iterate through each item in the array
    3. if any item is equal with element set created variable to true
    4. return the created variable
}

---

### Queue

A queue is an ordered list of elements where an element is inserted at the end of the queue and is removed from the front of the queue.

step 1: create Queue class with list and length properties
step 2: list and length default values are [] and  0 respectively

enqueue(value) {
    1. add value at the end of list
    2. increase queue length by 1
}

dequeue() {
    1. is queue is empty return null
    2. remove value at first
    3. decrease queue length by 1
}

peek() {
    1. find the prior element and return
}

contains(element) {
    1. specify a variable with default value false
    2. iterate through each item in the list
    3. if any item is equal with element set created variable to true
    4. return the created variable 3. if any item is equal with element set true
}

---

### Linked list

Definition: A linked list is a linear collection of data elements of any type, called nodes, where each node has itself a value, and points to the next node in the linked list. The principal advantage of a linked list over an array is that values can always be efficiently inserted and removed without relocating the rest of the list. Certain other operations, such as random access to a certain element, are however slower on lists than on arrays.

- Linked list
- Circular linked list
- Doubly linked list

#### Normal Linked list

step 1: create LinkedListNode class with value and next properties
step 2: create LinkedList class with head with default value null and length 0

insertHead(value) {
    1. create new node with input value and the head for the next
    2. specify the this.head with created node
    3. increase linkedlist length by one
}

removeHead() {
    1. check if linkedlist is empty
    2. create a variable with current name and this.head value
    3. change the value of this.head to current.next
    4. decrease linkedlist length by one
}

indexAt(index) {
    1. check if linkedlist is empty
    2. check index validation

    3. create a variable with this.head as value
    4. iterate to through linkedlist till specified index
    5. update current with current.next

    6. return found node
}

insertAt(index, element) {
    1. increase linkedlist length by one
    2. check index validation
    3. if index is 0 insertHead and return
    4. find the prev element by index
    5. if prev is null return null
    6. update prev.next with new node with input value and prev.next as next
}

removeAt(index) {
    1. check index validation
    2. if index is 0 return removeHead method
    3. find the prev element by index
    4. if prev is null return null
    5. update prev.next = prev.next.next
    6. decrease linkedlist length by one
}

clear() {
    1. set the head to null
    2. set length to 0
}

search(value) {
    1. create a variable with current name and this.head value
    2. create a variable with index name and 0 value

    3. iterate through each node
    4. if input value is equal to node specific value return the index
    5. increase index
    6. move to next

    7. otherwise return -1
}

checkIndexValidation(index) {
    1. check if value is number
    2. check if number is not integer
    3. check if value is less than zero or is greater than linkedlist length
}

Note: checkIndexValidation is a helper method.

#### Circular linked list

step 1: create LinkedListNode class with value and next properties
step 2: create Cll class with head with default value null and length 0

insertHead(value) {
    1. create new node with input value and the head for the next
    2. specify the this.head with created node
    3. increase linkedlist length by one
    4. find latest index
    5. if latest index is less than 1 then this.head.next is equal this.head
    6. otherwise find the latest node by index and update latestNode.next value to this.head
}

removeHead() {
    1. check if linkedlist is empty
    2. create a variable with current name and this.head value
    3. change the value of this.head to current.next
    4. decrease linkedlist length by one
    5. if latest index is less than 1 then this.head.next is equal this.head
    6. otherwise find the latest node by index and update latestNode.next value to this.head
}

indexAt(index) {
    1. check if linkedlist is empty
    2. check index validation

    3. create a variable with this.head as value
    4. iterate to through linkedlist till specified index
    5. update current with current.next

    6. return found node
}

insertAt(index, element) {
    1. increase linkedlist length by one
    2. check index validation
    3. if index is 0 insertHead and return
    4. find the prev element by index
    5. if prev is null return null
    6. update prev.next with new node with input value and prev.next as next
}

removeAt(index) {
    1. check if linkedlist is empty
    2. check index validation
    3. if index is 0 return removeHead method
    4. find the prev element by index
    5. if prev is null return null
    6. update prev.next value to prev.next.next
    7. decrease linkedlist length by one
    8. find the latest index
    9. if latest index is equal with input index
    10. if latest index is less than 1 then this.head.next is equal this.head
    11. otherwise find the latest node by index and update latestNode.next value to this.head
}

clear() {
    1. set the head to null
    2. set length to 0
}

search(value) {
    1. create a variable with current name and this.head value
    2. create a variable with index name and 0 value

    3. iterate through each node
    4. if input value is equal to node specific value return the index
    5. increase index
    6. move to next

    7. otherwise return -1
}

checkIndexValidation(index) {
    1. check if value is number
    2. check if number is not integer
    3. check if value is less than zero or is greater than linkedlist length
}

isEmpty() {
    1. is this.length is equal to 0
}

Note: checkIndexValidation and isEmpty are a helper methods.

#### Doubly linked list

step 1: create LinkedListNode class with prev, value and next properties
step 2: create DoublyLinkedList class with head and tail by default value null and length 0

insertHead(value) {
    1. if head and tail is null
    2. create new node with input value and null for head and tail
    3. update head with new node
    4. update tail with head
    5. increase linkedlist length by one
    6. return

    7. update this.head.prev to new node
    8. node.next to head
    9. this.head to node

    10. increase linkedlist length by one
}

removeHead() {
    1. update this.head with this.head.next
    2. update this.head.prev to null

    3. decrease linkedlist length by one
}

insertTail(value) {
    1. create new node with input value and null for head and tail

    2. update this.tail.next to node
    3. update node.prev  to this.tail
    4. update this.tail to node

    5. increase linkedlist length by one
}

removeTail() {
    1. update this.tail with this.tail.prev
    2. update this.tail.next to null

    3. decrease linkedlist length by one
}

indexAt(index) {
    1. check if linkedlist is empty
    2. check index validation

    3. create a variable with this.head as value
    4. iterate to through linkedlist till specified index
    5. update current with current.next

    6. return found node
}

insertAt(index, value) {
    1. check index validation

    2. if index is 0 insertHead
    3. if index is this.length insertTail

    4. create new node with input value and this.head and this.tail as values for head and tail
    5. find prev node by index
    6. hold next node in variable with same name and value of prev.next
    7. if prev is null return null
    8. update prev.next to node
    9. update next.prev to node
    10. update node.prev to prev
    11. update node.next to next
    
    12. decrease linkedlist length by one
}

removeAt(index) {
    1. check index validation

    2. if index is 0 then removeHead
    3. if index is this.length - 1 then removeTail

    4. find current node by index
    5. hold current.prev to prev variable
    6. hold current.next to next variable
    7. update prev.next to next
    8. update next.prev to prev

    9. decrease linkedlist length by one
}

---

### Hashtable

step 1: create HashTable with table and length properties
step 2: table and length default values are new Array(length) and 0 respectively

set(key, value) {
    1. create a variable with name index and assign this.#hash(key) to it
    2. create a variable with name row and assign this.#table[index] to it

    3. if row is truthy 
    4. create a variable with name colsLength and assign this.#table[index].length to it
    5. iterate through each columns
    6. if row[i][0] === key then key is repititive
    7. otherwise this.#table[index] = [];

    8. add [key, value] to end of table[index]

    9. increase hashtable length by one
}

get(key) {
    1. create a variable with name index and assign this.#hash(key) to it
    2. create a variable with name row and assign this.#table[index] to it

    3. if row is truthy 
    4. create a variable with name colsLength and assign this.#table[index].length to it
    5. if row[i][0] === key then return row[i][1]

    6. element not found
}

remove(key) {
    1. create a variable with name index and assign this.#hash(key) to it
    2. create a variable with name row and assign this.#table[index] to it

    3. if row and row.length is valid
    4. create a variable with name colsLength and assign this.#table.length to it
    5. iterate through cols till colsLength
    6. if this.#table[index][i][0] === key
    7. remove it
    8. decrease hashtable length by 1
    9. return true
      
    10. otherwise return false
}

hash(key) {
    1. check key validation
    2. create a variable with name hash and assign 0 to it
    3. iterate through each character of key till key.length
    4. add ascii code of each characters of key to hash variable
    5. return hash modules to table.length
}

checkStringValidation(key) {
    1. if key is not string throw error
    2. if key.length is 0 throw error
}

Note: hash(key) and checkStringValidation(key) are helper methods.

---

### Heaps

- every parent node, at most can have only 2 children
- must be a complete tree, it most be filled from left to right and every level must be full, with the exception of last level not needing to be full

#### MinHeap

- every parent's key must be smaller than its children nodes

step 1: create MinHeap class with heap and length properties
step 2: heap and length default values are [] and 0 respectively

insert(number) {
    1. add input number at the end of heap (index should be this.length)
    2. increase the heap length by 1
    3. call heapifyTop helper method with this.length - 1 as an input
}

remove() {
    1. check if heap is empty

    2. create a variable with name number and store this.#heap[0] on it
    3. replace first element of heap by latest element
    4. decrease the heap length by 1
    5. call heapifyDown helper method with 0 as an input
    6. return removed element
}

heapifyTop(index)
    1. find current node by index
    2. if this.#hasParent(index) and this.#getParent(index) > current
    3. create a variable with parentIndex and put this.#getParentIndex(index) on it
    4. swape parent and current node
    5. call heapifyTop with parentIndex as an input
}

heapifyDown(index) {
    1. create a variable with name smallestIndex and put index on it

    2. if this.#hasLeftChild(index) and this.#heap[smallestIndex] > this.#getLeftChild(index)
    3. replace smallestIndex variable with left child index

    4. if this.#hasRightChild(index) and this.#heap[smallestIndex] > this.#getRightChild(index)
    5. replace smallestIndex variable with right child index

    6. if smallestIndex and index was not equal
    7. swape node of index and smallestIndex
    8. call heapifyDown with smallestIndex as an input
}

getParentIndex(index) {
    1. find and return parent index of current element by Math.floor((index - 1) / 2) formula
}

getLeftChildIndex(index) {
    1. find and return left child index of current element by 2 * index + 1 formula
}

getRightChildIndex(index) {
    1. find and return right child index of current element by 2 * index + 2 formula
}

hasParent(index) {}

hasLeftChild(index) {}

hasRightChild(index) {}

getParent(index) {}

getLeftChild(index) {}

getRightChild(index) {}

swap(i1, i2) {}

isEmpty() {}

Note:

getParentIndex(index), getLeftChildIndex(index), getRightChildIndex(index), hasParent(index), hasLeftChild(index), hasRightChild(index), getParent(index), getLeftChild(index), getRightChild(index), swap(i1, i2), isEmpty() are helper methods

#### MaxHeap

- every parent's key must be greater than its children nodes

step 1: create MinHeap class with heap and length properties
step 2: heap and length default values are [] and 0 respectively

insert(number) {
    1. add input number at the end of heap (index should be this.length)
    2. increase the heap length by 1
    3. call heapifyTop helper method with this.length - 1 as an input
}

remove() {
    1. check if heap is empty

    2. create a variable with name number and store this.#heap[0] on it
    3. replace first element of heap by latest element
    4. decrease the heap length by 1
    5. call heapifyDown helper method with 0 as an input
    6. return removed element
}

heapifyTop(index)
    1. find current node by index
    2. if this.#hasParent(index) and this.#getParent(index) < current
    3. create a variable with parentIndex and put this.#getParentIndex(index) on it
    4. swape parent and current node
    5. call heapifyTop with parentIndex as an input
}

heapifyDown(index) {
    1. create a variable with name greatestIndex and put index on it

    2. if this.#hasLeftChild(index) and this.#heap[greatestIndex] < this.#getLeftChild(index)
    3. replace greatestIndex variable with left child index

    4. if this.#hasRightChild(index) and this.#heap[greatestIndex] < this.#getRightChild(index)
    5. replace greatestIndex variable with right child index

    6. if greatestIndex and index was not equal
    7. swape node of index and greatestIndex
    8. call heapifyDown with greatestIndex as an input
}

getParentIndex(index) {
    1. find and return parent index of current element by Math.floor((index - 1) / 2) formula
}

getLeftChildIndex(index) {
    1. find and return left child index of current element by 2 * index + 1 formula
}

getRightChildIndex(index) {
    1. find and return right child index of current element by 2 * index + 2 formula
}

hasParent(index) {}

hasLeftChild(index) {}

hasRightChild(index) {}

getParent(index) {}

getLeftChild(index) {}

getRightChild(index) {}

swap(i1, i2) {}

isEmpty() {}

Note:

getParentIndex(index), getLeftChildIndex(index), getRightChildIndex(index), hasParent(index), hasLeftChild(index), hasRightChild(index), getParent(index), getLeftChild(index), getRightChild(index), swap(i1, i2), isEmpty() are helper methods

---

## Graphs

---

## Bineary tree

---

## AVL tree

---

## Tries

---

## Sorting algorithm

---

## Searching algorithm

linear:

step 1: start at beginning
step 2: move sequentially
step 3: compare current value with target
step 4: reach end of the list
