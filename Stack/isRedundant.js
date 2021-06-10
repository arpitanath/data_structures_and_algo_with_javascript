let z = "(a+b*(c-d))";

let y = "(a+(b)/c)";

let x = "((a+b))";

String.prototype.isRedundant = function () {
  let stack = [];
  let operators = ["+", "-", "/", "*"];
  let poppedElements = [];
  for (ele of this) {
    if (ele == ")") {
      while (true) {
        let a = stack.pop();
        if (a == "(") break;
        poppedElements.push(a);
      }

      if (stack.pop() == "(") {
        return true;
      }
      if (!poppedElements.some((ele) => operators.includes(ele))) {
        return true;
      }
    } else {
      stack.push(ele);
    }
  }

  return false;
};

console.log(z.isRedundant());
console.log(x.isRedundant());
console.log(y.isRedundant());
