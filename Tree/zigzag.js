var zigzagLevelOrder = function(root) {
  if (root == null) return [];

  const hash = {};
  const queue = [];

  queue.push([root, 0]);

  while (queue.length != 0) {
    const curr = queue.shift();
    const level = curr[1];
    const node = curr[0];

    if (hash[level]) {
      hash[level] =
        level % 2 == 0
          ? [...hash[level], node.val]
          : [node.val, ...hash[level]];
    } else {
      hash[level] = [node.val];
    }

    if (node.left) {
      queue.push([node.left, level + 1]);
    }

    if (node.right) {
      queue.push([node.right, level + 1]);
    }
  }

  return Object.values(hash);
};
