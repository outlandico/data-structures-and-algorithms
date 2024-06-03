const assert = require('assert');

function insert(sortedArr, value) {
  let i = 0;
  while (i < sortedArr.length && value > sortedArr[i]) {
    i++;
  }
  sortedArr.splice(i, 0, value);
}

function insertionSort(inputArr) {
  const sortedArr = [inputArr[0]];
  for (let i = 1; i < inputArr.length; i++) {
    insert(sortedArr, inputArr[i]);
  }
  return sortedArr;
}

// Test cases
function testInsertionSort() {
  assert.deepStrictEqual(insertionSort([8, 4, 23, 42, 16, 15]), [4, 8, 15, 16, 23, 42]);
  assert.deepStrictEqual(insertionSort([20, 18, 12, 8, 5, -2]), [-2, 5, 8, 12, 18, 20]);
  assert.deepStrictEqual(insertionSort([5, 12, 7, 5, 5, 7]), [5, 5, 5, 7, 7, 12]);
  assert.deepStrictEqual(insertionSort([2, 3, 5, 7, 13, 11]), [2, 3, 5, 7, 11, 13]);
  console.log("All tests passed!");
}

testInsertionSort();
