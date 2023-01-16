
class BinaryTreeNode {
    constructor(data, left, right) {
      this.data = data
      this.left = left
      this.right = right
    }
  }
  
  class BinaryTree {
    preorder (root) {
      if(root) {
      console.log(root.data)
      this.preorder(root.left)
      this.preorder(root.right)
    }
    return null
    }
  
  }
  
  const tree = new BinaryTree()
  //getting the tree ready
  const root  = new BinaryTreeNode(1) 
  root.left = new BinaryTreeNode(2)
  root.right = new BinaryTreeNode(3)
  root.left.left = new BinaryTreeNode(4)
  root.left.right = new BinaryTreeNode(5)
  root.right.left = new BinaryTreeNode(6)
  root.right.right = new BinaryTreeNode(6)
  
  tree.preorder(root)