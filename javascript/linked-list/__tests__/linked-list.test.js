class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function zipLists(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let current1 = list1;
  let current2 = list2;
  while (current1 && current2) {
    let next1 = current1.next;
    let next2 = current2.next;
    current1.next = current2;
    current2.next = next1;
    current1 = next1;
    current2 = next2;
  }
  return list1;
}

// Helper function to print linked list
function printList(head) {
  let current = head;
  while (current) {
    process.stdout.write(current.value + ' -> ');
    current = current.next;
  }
  console.log('null');
}

// Define the linked lists
let list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(2);

let list2 = new ListNode(5);
list2.next = new ListNode(9);
list2.next.next = new ListNode(4);

// Zip the lists and print the result
let zippedList = zipLists(list1, list2);
printList(zippedList);

// Tests
function testZipLists() {
  // Define the linked lists
  let list1 = new ListNode(1);
  list1.next = new ListNode(3);
  list1.next.next = new ListNode(2);

  let list2 = new ListNode(5);
  list2.next = new ListNode(9);
  list2.next.next = new ListNode(4);

  // Zip the lists
  let zippedList = zipLists(list1, list2);

  // Define the expected zipped list
  let expectedList = new ListNode(1);
  expectedList.next = new ListNode(5);
  expectedList.next.next = new ListNode(3);
  expectedList.next.next.next = new ListNode(9);
  expectedList.next.next.next.next = new ListNode(2);
  expectedList.next.next.next.next.next = new ListNode(4);

  // Traverse both lists and compare values
  let current = zippedList;
  let expectedCurrent = expectedList;
  while (current !== null && expectedCurrent !== null) {
    if (current.value !== expectedCurrent.value) {
      console.error(`Test failed: Value mismatch - Expected: ${expectedCurrent.value}, Actual: ${current.value}`);
      return;
    }
    current = current.next;
    expectedCurrent = expectedCurrent.next;
  }
  if (current !== null || expectedCurrent !== null) {
    console.error('Test failed: Length mismatch');
    return;
  }
  console.log('All tests passed successfully');
}

testZipLists();
=======
// Require the assertion library for testing
const { expect } = require('chai');

// Require your linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  // Test case for inserting elements into the linked list
  describe('insert', () => {
    it('should insert elements at the head of the list', () => {
      const list = new LinkedList();
      list.insert('c');
      list.insert('b');
      list.insert('a');
      // Check if the list is constructed correctly
      expect(list.toString()).to.equal('{ a } -> { b } -> { c } -> NULL');
    });
  });

  // Test case for checking if a value exists in the linked list
  describe('includes', () => {
    it('should return true if the value exists in the list', () => {
      const list = new LinkedList();
      list.insert('c');
      list.insert('b');
      list.insert('a');
      // Check if 'b' exists in the list
      expect(list.includes('b')).to.be.true;
    });

    it('should return false if the value does not exist in the list', () => {
      const list = new LinkedList();
      list.insert('c');
      list.insert('b');
      list.insert('a');
      // Check if 'd' exists in the list
      expect(list.includes('d')).to.be.false;
    });
  });
});
