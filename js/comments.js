const commentsInner = document.querySelector(".comments__inner");

const comments = new URLSearchParams(location.search).get("posts");
console.log(comments);

function getData(url, callback) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let resJson = xhr.response;
      let res = JSON.parse(resJson);
      callback?.(res);
    } else if (xhr.readyState === 4) {
      console.log(xhr.statusText);
    }
  };

  xhr.open("get", url);

  xhr.send();
}

getData(
  `https://jsonplaceholder.typicode.com/comments?postId=${comments}`,
  (commemt) => {
    commemt.map((commemts) => {
      commentsInner.innerHTML += getUserRow(commemts);
    });
  }
);

function getUserRow(commemts) {
  return `
<div class="card">
  <div class="user__box">
    <p class="id">Id: ${commemts.id}</p>
    <h3 class="comments-main__username">Title: ${commemts.name}</h3>
    <p class="comments-main-email1" style="margin-top:10px;">Email:<a class="comments-main-email2" href="#">${commemts.email}</a></p>
    <p class="comments__body">Body: ${commemts.body}</p>
  </div>
</div>
`;
}
