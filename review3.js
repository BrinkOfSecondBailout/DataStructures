// var hasPathSum = function(root, targetSum) {
//     let queue = [{node: root, currentVal: root.val}];

//     while (stack.length > 0) {
//         let {node, currentVal} = queue.shift();

//         if (node.left) queue.push({node: node, currentVal: node.left.val + node.val});
//         if (node.right) queue.push({node: node, currentVal: node.right.val + node.val});
        
//         if (!node.left && !node.right && currentVal === targetSum) return true;
//     }

//     return false;
// };





// var maxDepth = function(root) {
//     if (!root) return 0;
//     let count = 0;
//     let queue = [root];

//     while (queue.length > 0) {
//         count++;
//         for (let i = 0; i < queue.length; i++) {
//             let node = queue.shift();
//             if (node.left) queue.push(node.left);
//             if (node.right) queue.push(node.right);
//         }
//     }
//     return count;
// };



// var maxDepth = function(root) {
//     if (!root) return 0;
    
//     return Math.max(maxDepth(root.left), maxDepth(root.right) + 1);
// }




// var isSameTree = function(p, q) {
//     let left = [p];
//     let right = [q];

//     while (left.length > 0 && right.length > 0) {
//         let leftNode = p.shift();
//         let rightNode = q.shift();

//         if (!leftNode && !rightNode) continue;
//         if (!leftNode || !rightNode) return false;
//         if (leftNode.val !== rightNode.val) return false;

//         left.push(left.left);
//         right.push(right.left);

//         left.push(left.right);
//         right.push(right.right);
//     }

//     return left.length === right.length;
// };



// var isSameTree = function(p, q) {
//     if (!p && !q) return true;
//     if (!p || !q) return false;
//     if (p.val !== q.val) return false;

//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };





// var invertTree = function(root) {
//     if (!root) return null;

//     let temp = root.left;
//     root.left = root.right;
//     root.right = temp;

//     invertTree(root.left);
//     invertTree(root.right);
//     return root;
// }


// var invertTree = function(root) {
//     if (!root) return null;

//     let queue = [root];

//     while (queue.length > 0) {
//         let node = queue.shift();
//         let temp = node.left;
//         node.left = node.right;
//         node.right = temp;

//         if (node.left) queue.push(node.left);
//         if (node.right) queue.push(node.right);
//     }

//     return root;
// }




// var isSymmetric = function(root) {
//     if (!root) return null;

//     const isMirror = (left, right) => {
//         if (!left && !right) return true;
//         if (!left || !right) return false;
//         if (left.val !== right.val) return false;
//     }

//     let queue = [root.left, root.right];

//     while (queue.length > 0) {
//         let left = queue.shift();
//         let right = queue.shift();
//         isMirror(left, right);

//         queue.push(left.left, right.right);
//         queue.push(left.right, right.left);
//     }
//     return true;
// };


// var isSymmetric = function(root) {
//     if (!root) return null;

//     const isMirror = (left, right) => {
//         if (!left && !right) return true;
//         if (!left || !right) return false;
//         if (left.val !== right.val) return false;

//         return isMirror(left.left, right.right) && isMirror(left.right, right.left);
//     }

//     return isMirror(root.left, root.right);

// }





// var connect = function(root) {
//     if (!root) return null;

//     let queue = [root];
//     let prev = null;

//     while (queue.length > 0) {
//         for (let i = 0; i < queue.length; i++) {
//             let node = queue.shift();

//             if (prev) {
//                 prev.next = node;
//             }
//             prev = node;

//             if (node.left) queue.push(node.left);
//             if (node.right) queue.push(node.right);
//         }
//         prev.next = null;
//     }
// };


// var connect = function(root) {
//     if (!root) return;

//     const connectNodes = (node) => {
//         if (!node) return;
//         if (node.left) {
//             node.left.next = node.right;
//         }
//         if (node.right && node.next) {
//             node.right.next = node.next.left;
//         }

//         connectNodes(node.right);
//         connectNodes(node.left);
//     }

//     connectNodes(root);
//     return root;
// }





// var flatten = function(root) {
//     if (!root) return null;

//     let stack = [root];
//     let prev = null;
//     while (stack.length > 0) {
//         let node = stack.pop();
//         if (prev) {
//             prev.left = null;
//             prev.right = node;
//         }
//         prev = node;

//         if (node.right) stack.push(node.right);
//         if (node.left) stack.push(node.left);
//     }
// };



// var flatten = function(root) {
//     if (!root) return;

//     flatten(root.left);
//     flatten(root.right);

//     let rightSubtree = root.right;
//     root.right = root.left;
//     root.left = null;

//     let current = root;
//     while (current.right) {
//         current = current.right;
//     }

//     current.right = rightSubtree;
// }





// var sumNumbers = function(root) {
//     if (!root) return null;

//     let stack = [{node: root, val: 0}];

//     let sum = 0;

//     while (stack.length > 0) {
//         let {node, val} = stack.pop();

//         let currentVal = val * 10 + node.val;

//         if (!node.left && !node.right) sum += currentVal;

//         if (node.left) stack.push({node: node.left, val: currentVal});
//         if (node.right) stack.push({node: node.right, val: currentVal});
//     }

//     return sum;

// };



// var sumNumbers = function(root) {
//     if (!root) return null;

//     const dfs = (node, currentVal) => {
//         if (!node) return 0;

//         currentVal = currentVal * 10 + node.val;

//         if (!node.left && !node.right) {
//             return currentVal;
//         }

//         return dfs(root.left, currentVal) + dfs(root.right, currentVal);
//     }

//     return dfs(root, 0);

// };





// var BSTIterator = function(root) {
//     this.stack = [];
//     this._leftinorder(root);
// };

// BSTIterator.prototype._leftinorder = function(node) {
//     while (node) {
//         this.stack.push(node);
//         node = node.left;
//     }
// };

// BSTIterator.prototype.next = function() {
//     let topMostNode = this.stack.pop();
//     if (topMostNode.right) {
//         this._leftinorder(topMostNode.right);
//     }
//     return topMostNode.val;
// };

// BSTIterator.prototype.hasNext = function() {
//     return this.stack.length > 0;
// };





// var kthSmallest = function(root, k) {
//     if (!root) return null;
//     let count = 0;
//     let result = null;

//     const inorder = (node) => {
//         if (!node || result !== null) return;

//         inorder(node.left);

//         count++;
//         if (count === k) {
//             result = node.val;
//             return;
//         } 

//         inorder(node.right);
//     }

//     inorder(root);

//     return result;
// };





