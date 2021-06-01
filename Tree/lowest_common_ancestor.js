function lowestCommonAncestor(root, p, q) {
    if ([null, p, q].includes(root))
        return root;
    const left = lowestCommonAncestor(root.left, p, q),
          right = lowestCommonAncestor(root.right, p, q);
    return left && right
        ? root
        : left ?? right;
}