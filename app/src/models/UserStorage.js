"use strict";

const fs = require("fs").promises;

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
  
  static getUser(...fields) {
    //const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    
    return newUsers;
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        console.log("this 는 " + this);
        return this.#getUserInfo(data, id);
      })
      .catch(console.error);
  }

  static save(userInfo) {
    //const users = this.#users;
    users.id.push(userInfo.id);
    users.psword.push(userInfo.psword);
    users.name.push(userInfo.name);

    return { success: true};
  }
}

module.exports = UserStorage;