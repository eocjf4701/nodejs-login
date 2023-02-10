"use strict";

// 선택자를 통해 html 값을 가져올 수 있음
const id = document.querySelector("#id"), //# = 태그의 id (ex) <input id= >
  password = document.querySelector("#password"),
  loginBtn = document.querySelector("#loginButton");

//console.log(id, password, loginBtn, "hello");

// 클릭이벤트
loginBtn.addEventListener("click", login);

function login () {
  const req = {
    id: id.value,
    pw: password.value,
  }
  console.log("===>" + JSON.stringify(req)),
  fetch("login", {
    method: "POST",
    headers: {
      "Content-Type": "application/jsoin",
    },
    body: JSON.stringify(req),
  });
  
}

