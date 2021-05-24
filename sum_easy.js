function sum(x) {
  let acc = x;

  return function collector(y) {
    if (!y) {
      return acc;
    } else {
      acc += y;
      return collector;
    }
  };
}


console.log(sum(1)(2)(3)(4)());

The question about brackets, I was unable to answer it.

To find to heaviest ball, I said I should split the balls in 3 groups. Group A having 3 balls, Group B having 3 balls and Group C having one ball. Put in the balance Group A and B. If one of these groups goes down, the heaviest ball is there. So, I split this group in other 3 groups following the same proceed before. In this case I was able to find the ball in only 3 steps