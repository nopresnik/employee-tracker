const settings = require("./db.config");
const mysql = require("mysql");

const pool = mysql.createPool({
  host: settings.DB_HOST,
  user: settings.DB_USER,
  password: settings.DB_PASS,
  database: settings.DB_NAME,
});

module.exports = pool;
