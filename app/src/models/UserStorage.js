"use strict";

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
    console.log("this는" + this);
    console.log(fields);
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      console.log(newUsers, field);
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    console.log(newUsers);
    return newUsers;
  }
}

module.exports = UserStorage;