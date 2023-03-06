const mysql = require("mysql");

const db = mysql.createConnection({
  host: '43.201.121.190',
  port: '51211',
  user: 'autobit',
  password: 'autobit1!',
  database: 'NODEJS'
})

db.connect();

module.exports = db;