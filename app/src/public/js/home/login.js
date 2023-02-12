"use strict";

// 선택자를 통해 html 값을 가져올 수 있음
const id = document.querySelector("#id"), //# = 태그의 id (ex) <input id= >
  password = document.querySelector("#password"),
  loginBtn = document.querySelector("#loginButton");

//console.log(id, password, loginBtn, "hello");

// 클릭이벤트
loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    psword: password.value,
  };
  
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json()) // json으로 읽는다.
    .then((res) => {
      if(res.success) {
        location.href = "/";
      }else {
        alert(res.msg);
      };
    })
    .catch((err) => {
      console.error(new Error("로그인 중 발생"));
    })
    //.then(console.log); // = .then((res) => console.log(res)); => 파라미터가 같고, 함수의 파라미터인 경우 생략 가능 // promise 형태
}
  // res.json() 반환값은 Promise
  // 기본 res의 반환 값은 Response 스트림인데, ".join()" 메서드를 통해 위 값을 읽을 수 있다. Response는 데이터가 모두 받아진 상태가 아니라 .json() 으로 Response 스트림을 가져와 완료될때까지일고, 다 읽은 body 텍스트를 promise 
  // 형태로 반환한다.

