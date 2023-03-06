"use strict";

const { throws } = require('assert');

const db = require("../config/db");

class UserStorage {
  // class안에서는 변수선언시 변수타입 선언 필요없음.
  // #선언하면 public -> private
  // 은닉화된 메서드
  // private한 변수나 메서드는 항상 최상단에 위치(코딩문화, 컨벤션)
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // => [id, psword]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }
  
  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) return users;

    const newUsers = fields.reduce((newUsers, field) => {
      
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    
    return newUsers;
  }

  static getUser(isAll, ...fields) {

  }

  static getUserInfo(id) {
    return new Promise((resolove, reject) => {
      db.query("SELECT * FROM users where id = ?", [id], (err, data) => {
        if (err) reject(err);
        resolove(data[0]);
      });
    });
  }

  static async save(userInfo) {

  }
}

module.exports = UserStorage;