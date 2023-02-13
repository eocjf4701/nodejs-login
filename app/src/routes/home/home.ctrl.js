"use strict";

const User = require("../../models/User");

const process = {
  /*
      class 접근방법
      1) new 인스턴스화
      2) class static으로 처리 후 선언
    */
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    console.log("response" + JSON.stringify(response));
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