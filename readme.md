# Data structure and algorithm

## History

---

## Definition

In computer science, a data structure is a data organization, management, and storage format that is usually chosen for efficient access to data, more precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.

---

## Algorithm

set of steps/instructions for completing a task.

clearly defined problem statement, input and output.

correctness and efficiency

---

## Bio O notation (Time/Space complexity)

- constant
- logarithmic
- linear
- quadratic
- exonential

---

## Stack

A stack works based on the LIFO principle i.e., Last In, First out, meaning that the most recently added element is the first one to remove.

push(element) {
    1. check if array is empty
    2. if array is empty add element as first element
    3. otherwise add element at the end of array
    4. increase the array length
}

pop() {
    1. check if array is empty
    2. if is array is empty throw an exception
    3. otherwise remove element at the end of array
    4. decrease the array length
}

contains(element) {
    1. create a variable with default value false
    2. loop through each item in the array
    3. if any item is equeal with element set true
    4. return variable
}

---

## Queue

A queue is an ordered list of elements where an element is inserted at the end of the queue and is removed from the front of the queue.

enqueue(element) {
    1. check if array is empty
    2. if array is empty add element as first element
    3. otherwise add element at the end
    4. increase the array length
}

dequeue() {
    1. check if array is empty
    2. if is array is empty throw an exception
    3. otherwise remove element at the first
    4. move every element to left to fill the gap
    4. decrease the array length
}

contains(element) {
    1. specify a variable with default value false
    2. loop through each item in the array
    3. if any item is equal with element set true
    4. return variable
}

---

## Array

Definition: An array is a number of elements in a specific order, typically all of the same type (depending on the language, individual elements may either all be forced to be the same type, or may be of almost any type). Elements are accessed using an integer index to specify which element is required. Typical implementations allocate contiguous memory words for the elements of arrays (but this is not always a necessity). Arrays may be fixed-length or resizable.

---

## ArrayList

add(element) {
    1. add element at the end of array
}

remove(element) {
    1. check if element contains in the array
    2. if exist find the index and remove by index
    3. otherwise return element not exist or -1
}

removeAt(index) {
    1. check if array is empty
    2. check index validation
    3. move each element to right from index
    4. decrease the array length
}

insertedAt(index, element) {
    1. check index validation
    2. move each element to right at the end of array
    3. fill the gap
    4. increase the array length
}

indexOf(element) {
    1. specify a variable with default value -1
    2. loop through each item
    3. if any item is equal with element set variable with index
    4. return index
}

indexAt(index) {
    1. validate the index
    2. find by index and return
}

contains(element) {
    1. specify a variable with default value false
    2. loop through each item in the array
    3. if any item is equal with element set true
    4. return variable
}

clear() {
    1. set array to default value
    2. set length to 0
}

---

## FixedArray

---

## Linked list

Definition: A linked list (also just called list) is a linear collection of data elements of any type, called nodes, where each node has itself a value, and points to the next node in the linked list. The principal advantage of a linked list over an array is that values can always be efficiently inserted and removed without relocating the rest of the list. Certain other operations, such as random access to a certain element, are however slower on lists than on arrays.

- Linked list
- Circular linked list
- Doubly linked list

step 1: create LinkedListNode class with value and next properties
step 2: create LinkedList class with head with default value null and length 0

insertHead(element) {
    1. create new node with element value and the head as next
    2. specify the head with new node
    3. increase linkedlist length
}

removeHead() {
    1. check if linkedlist is empty
    2. change the head.next to head.next.next
    3. decrease the array length
}

indexAt(index) {
    1. check index validation
    2. start from head and move forward
    3. return the found element
}

insertAt(index, element) {
    1. increase the array length
    2. check index validation
    3. if index is 0 insertHead and return
    4. find the prev element by index
    5. if prev is null return null
    6. update prev.next with new node  
}

removeAt(index) {
    1. check index validation
    2. if index is 0 removeHead and return
    3. find the prev element by index
    4. if prev is null return null
    5. update prev.next = prev.next.next
    6. decrease the array length
}

clear() {
    1. set the head to null
    2. set length to null
}

---

## Hashtable

---

## Heaps

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
