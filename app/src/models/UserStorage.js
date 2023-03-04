"use strict";

const fs = require("fs");

class UserStorage {
  // class안에서는 변수선언시 변수타입 선언 필요없음.
  // #선언하면 public -> private
  // 데이터 은닉화 후 -> 메소드 전달로
  static #users = {
    id: ["daechul", "sohee", "together"],
    psword: ["1", "12", "123"],
    name: ["park", "kim", "wori"],
  };

  static getUser(...fields) {
   
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // => [id, psword]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    
    return userInfo;
  }

  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.psword.push(userInfo.psword);
    users.name.push(userInfo.name);
    
    return { success: true};
  }
}

module.exports = UserStorage;