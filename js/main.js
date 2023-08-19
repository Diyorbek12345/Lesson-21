let usersRow = document.querySelector(".users-row");
let postsRow = document.querySelector(".posts-row");

function getData(url, callback) {
  let xhr = new XMLHttpRequest();

  // console.log(xhr.readyState);

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

function getUserRow(user) {
  return `
    <div class="main__wrap">
    <div class="wrapper">
      <h3 class="user__name">${user.name}</h3>
      <p class="user__username">${user.username}</p>
      <p class="website" href="${user.website}">${user.website}</p>
      <a class="user__email" href="${user.email}"> email: ${user.email}</a>
      <p class="address">${user.address.city}</p>
      <a class="user__Tel" tel:${user.phone}">${user.phone}
      </a>
     <div class="btns">
      <a class="btn" href="posts.html?posts=${user.id}">Posts</a>
      <a class="btn" href="todos.html?posts=${user.id}">todos</a>
      <a class="btn" href="./galareya.html">gala</a>
     </div>
    </div>
    </div>
  `;
}

usersRow.innerHTML = "...Loading";

// getData("https://jsonplaceholder.typicode.com/users", (users) => {
//   usersRow.innerHTML = "";
//   users.map((user) => {
//     getData(
//       `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
//       (userPosts) => {
//         userPosts.map((post) => {
//           getData(
//             `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`,
//             (postComments) => {
//               console.log(post.id);
//               console.table(postComments);
//               usersRow.innerHTML += getUserRow(user);
//               usersRow.innerHTML += JSON.stringify(userPosts);
//             }
//           );
//         });
//       }
//     );
//   });
// });

getData("https://jsonplaceholder.typicode.com/users", (users) => {
  usersRow.innerHTML = "";
  users.map((user) => {
    usersRow.innerHTML += getUserRow(user);
  });
});

function getPostRow({ id, title, body }) {
  return `
    <div>
      <mark>Id: ${id}</mark>
      <h3>Title: ${title}</h3>
      <p>Body: ${body}</p>
    </div>
  `;
}

// getData("https://jsonplaceholder.typicode.com/posts", (posts) => {
//   posts.map((post) => {
//     postsRow.innerHTML += getPostRow(post);
//   });
// });
