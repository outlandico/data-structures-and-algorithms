const { ListNode, zipLists } = require('./yourFileName.js');

describe('zipLists', () => {
  test('should zip two linked lists correctly', () => {
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
    let index = 0;
    while (current !== null && expectedCurrent !== null) {
      expect(current.value).toBe(expectedCurrent.value, `Value at index ${index} does not match.`);
      current = current.next;
      expectedCurrent = expectedCurrent.next;
      index++;
    }
    // Ensure both lists reach the end
    expect(current).toBe(null, 'Actual list is longer than expected.');
    expect(expectedCurrent).toBe(null, 'Expected list is longer than actual.');
  });

  test('should handle empty lists', () => {
    // Test when one list is empty
    let list1 = new ListNode(1);
    let list2 = null;
    let zippedList = zipLists(list1, list2);
    expect(zippedList).toBe(list1, 'Expected output to be the non-empty list.');

    // Test when the other list is empty
    list1 = null;
    list2 = new ListNode(1);
    zippedList = zipLists(list1, list2);
    expect(zippedList).toBe(list2, 'Expected output to be the non-empty list.');

    // Test when both lists are empty
    list1 = null;
    list2 = null;
    zippedList = zipLists(list1, list2);
    expect(zippedList).toBe(null, 'Expected output to be null for empty lists.');
  });
});
