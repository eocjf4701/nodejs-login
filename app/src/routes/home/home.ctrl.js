"use strict";

const UserStorage = require("../../models/UserStorage");

const process = {
  login: (req, res) => {
    console.log(req.body); //req : 프론트에서 보낸 데이터
    const id = req.body.id,
      psword = req.body.psword;

    /*
      class 접근방법
      1) new 인스턴스화
      2) class static으로 처리 후 선언
    */
    //const userStorage = new UserStorage();
    //const userStorage = UserStorage.users;
    //console.log(UserStorage.getUser("id", "psword", "name"));
    const users = UserStorage.getUser("id", "psword", "name");
    // console.log(id, psword);
     const response = {};
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      console.log(idx);
      if(users.psword[idx] === psword) {
        response.success = true;
        return res.json(response); 
      }
    }
    response.sucess = false;
    response.msg = "로그인에 실패하셨습니다.";
    return res.json(response);
  },
};

const show = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

module.exports = {
  show,
  process,
};