var isValid = function(s) {
  let stack = [];

  let map = new Map([
    ["]", "["],
    [")", "("],
    ["}", "{"]
  ]);

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stack.push(s[i]);
    } else {
      if (stack.pop() !== map.get(s[i])) {
        console.log(s[i]);
        return false;
      }
    }
  }
console.log(stack);
  return !stack.length;
};

console.log(isValid("AB ] CD [ EF ] GH [ IJ"));
