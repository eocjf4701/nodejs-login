"use strict";

const User = require("../../models/User");

const process = {
  /*getUser
      class 접근방법
      1) new 인스턴스화
      2) class static으로 처리 후 선언
    */
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
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
  register: (req, res) => {
    res.render("home/register");
  },
};

module.exports = {
  show,
  process,
};