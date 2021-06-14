[{ 3: [1, 2, 3] }];

//3 has commentIDs , 8 doent have commentIDs, 10 doesn't exist

async function getCommentIds(postIDArr) {
  let posts;
  let result = [];
  let comments;

  await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((result) => (posts = result));

  await fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => (comments = data));

  for (let i = 0; i < postIDArr.length; i++) {
    let post = posts.find((ele) => ele.id == postIDArr[i]);

    if (post) {
      let filteredComments = comments.filter(
        (ele) => ele.postId === postIDArr[i]
      );
      if (filteredComments.length < 0) {
        result.push({ [postIDArr[i]]: [] });
      } else result.push({ [postIDArr[i]]: filteredComments });
    }
  }

  return result;
}

getCommentIds([1, 2, 32227727297979]).then((result) => {
  console.log(result);
});
