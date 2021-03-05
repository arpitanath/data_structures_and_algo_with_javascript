const dict = {
  hi: true,
  hello: true,
  world: true
};

//    const str = spaceSeparator('helloworld'); // "hello world"
//    const str2 = spaceSeparator('helloworldhi'); // "hello world hi"
//    const str2 = spaceSeparator('helloworldh'); // "" , as h is not present in dict we throw "" as output

function spaceSeparator(input) {
  let result = "";
  for (let key in Object.keys(dict)) {
    let word = Object.keys(dict)[key];
    if (input.indexOf(word)) {
      console.log(input.indexOf(word));
      result = result + " " + word;
    } else {
      result = "";
    }
  }
  return result;
}
