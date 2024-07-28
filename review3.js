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





var connect = function(root) {
    if (!root) return null;

    let queue = [root];

    while (queue.length > 0) {
        for (let i = 0; i < queue.length; i++) {
            let node = queue.shift();

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
};