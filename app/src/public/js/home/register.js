"use strict";

// 선택자를 통해 html 값을 가져올 수 있음
const id = document.querySelector("#id"), //# = 태그의 id (ex) <input id= >
  password = document.querySelector("#password"),
  name = document.querySelector("#name"),
  confirmPsword = document.querySelector("#confirm-password"),
  registerBtn = document.querySelector("#registerButton");

// 클릭이벤트
registerBtn.addEventListener("click", register);

function register() {
  if (!id.value) return alert("아이디를 입력해주십시오.");
  if (password.value !== confirmPsword.value)  return alert("비밀번호가 일치하지 않습니다.");

  const req = {
    id: id.value,
    name: name.value,
    psword: password.value,
    
  };
  console.log(req);
  // form 태그 안에 button을 submit 되버림.

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json()) // json으로 읽는다.
    .then((res) => {
      if(res.success) {
        location.href = "/login";
      }else {
        alert(res.msg);
      };
    })
    .catch((err) => {
      console.error(new Error("로그인 중 발생"));
    })
    .then(console.log); // = .then((res) => console.log(res)); => 파라미터가 같고, 함수의 파라미터인 경우 생략 가능 // promise 형태
}
  // res.json() 반환값은 Promise
  // 기본 res의 반환 값은 Response 스트림인데, ".join()" 메서드를 통해 위 값을 읽을 수 있다. Response는 데이터가 모두 받아진 상태가 아니라 .json() 으로 Response 스트림을 가져와 완료될때까지일고, 다 읽은 body 텍스트를 promise 
  // 형태로 반환한다.

