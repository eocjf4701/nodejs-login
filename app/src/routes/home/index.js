"use strict";

const express = require("express");
const router = express.Router();

let ctrl = require("./home.ctrl");

router.get("/", ctrl.home);
router.get("/login", ctrl.login);
//router.post("/login", ctrl.login);

// 외부로 내보내기
module.exports = router;
