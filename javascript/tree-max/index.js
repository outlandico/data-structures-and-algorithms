class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  find_maximum_value() {
    if (!this.root) {
      throw new Error('Tree is empty');
    }

    function dfs(node) {
      if (!node) {
        return Number.NEGATIVE_INFINITY;
      }
      const maxLeft = dfs(node.left);
      const maxRight = dfs(node.right);
      return Math.max(node.val, maxLeft, maxRight);
    }

    return dfs(this.root);
  }
}

module.exports = { BinaryTree, TreeNode };
