// sorting-merge.test.js
const { mergeSort } = require('../sorting-merge');

describe('mergeSort', () => {
  test('sorts an unsorted array', () => {
    expect(mergeSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42]);
  });

  test('handles an empty array', () => {
    expect(mergeSort([])).toEqual([]);
  });

  test('handles a single element array', () => {
    expect(mergeSort([5])).toEqual([5]);
  });

  test('handles an already sorted array', () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('handles a reverse ordered array', () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test('handles an array with duplicates', () => {
    expect(mergeSort([3, 1, 2, 3, 1])).toEqual([1, 1, 2, 3, 3]);
  });

  test('handles an array with all identical elements', () => {
    expect(mergeSort([7, 7, 7, 7])).toEqual([7, 7, 7, 7]);
  });
});
