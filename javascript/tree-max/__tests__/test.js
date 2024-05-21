const { BinaryTree, TreeNode } = require('../index'); // Import your BinaryTree and TreeNode classes

describe('BinaryTree', () => {
  describe('find_maximum_value', () => {
    test('should return the maximum value in a binary tree', () => {
      // Create the tree
      const root = new TreeNode(5);
      root.left = new TreeNode(3);
      root.right = new TreeNode(7);
      root.left.left = new TreeNode(1);
      root.left.right = new TreeNode(4);
      root.right.left = new TreeNode(6);
      root.right.right = new TreeNode(11);

      // Instantiate the binary tree
      const tree = new BinaryTree(root);

      // Test the find_maximum_value method
      expect(tree.find_maximum_value()).toBe(11);
    });
  });
});
