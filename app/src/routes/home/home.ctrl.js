"use strict";

const User = require("../../models/User");

const process = {
  /*getUser
      class 접근방법
      1) new 인스턴스화
      2) class static으로 처리 후 선언
    */
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    
    return res.json(response);
  },
  register: (req, res) => {
    res.render("home/register")
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