"use strict";

const users = {
  id: ["daechul", "sohee", "together"],
  psword: ["1", "12", "123"],
}
const show = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    console.log(req.body); //req : 프론트에서 보낸 데이터
    const id = req.body.id,
      psword = req.body.psword;

    console.log(id, psword);
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      console.log(idx);
      if(users.psword[idx] === psword) {
       return res.json({
         success: true,
       }); 
      }
    }

    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다.",
    })
  },
};

module.exports = {
  show,
  process,
};