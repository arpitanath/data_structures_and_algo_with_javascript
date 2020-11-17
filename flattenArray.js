const flatten = ([first, ...rest]) => {
    if (first === undefined) {
      return [];
    }
    else if (!Array.isArray(first)) {
      return [first, ...flatten(rest)];
    }
    else {
      return [...flatten(first), ...flatten(rest)];
    }
  }

  //flatten([[1,2,3],4,5,[7,8]])