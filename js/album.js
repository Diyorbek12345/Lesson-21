const albumInner = document.querySelector(".album__inner")


const album = new URLSearchParams(location.search).get("posts");


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


getData(`https://jsonplaceholder.typicode.com/albums?userId=${album}`, (album) => {
  album.map((albums) => {
    albumInner.innerHTML += getUserRow(albums);
  });
});


function getUserRow(albums) {
  return `
<div class="card">
  <div class="user__box">
    <p class="id">Id: ${albums.id}</p>
    <h3 class="album__name" style="margin-top:10px;">Title: ${albums.title}</h3>
  </div>
    <a href="galareya.html?galareya=${albums.id}" class="btn btn__album">Photos</a>
</div>
`;
}