const todoInner = document.querySelector(".todos__inner")


const todos = new URLSearchParams(location.search).get("posts");

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


getData(`https://jsonplaceholder.typicode.com/todos?userId=${todos}`, (todo) => {

  todo.map((todos) => {
    todoInner.innerHTML += getUserRow(todos);
  });
});


function getUserRow(todos) {
  return `
<div class="card">
  <div class="user__box">
  <p class="id">Id: ${todos.id}</p>
    <div class="wrapp">
    <h3 class="todos__name" style="margin-top:10px;">Title: ${todos.title}</h3>
    <p class="todos__text" style="margin-top:10px;"> ${todos.completed ? "✅" : "❌"}</p></div>
  </div>

</div>
`;
}