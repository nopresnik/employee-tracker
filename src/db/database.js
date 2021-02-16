const settings = require("./db.config");
const mysql = require("mysql");
let pool;

module.exports = {
  getPool: (test = false) => {
    if (pool) return pool;
    pool = mysql.createPool({
      host: !test ? settings.DB_HOST : settings.DB_TEST_HOST,
      user: !test ? settings.DB_USER : settings.DB_TEST_USER,
      password: !test ? settings.DB_PASS : settings.DB_TEST_TEST_PASS,
      database: !test ? settings.DB_NAME : settings.DB_TEST_TEST_NAME,
    });
    return pool;
  },
};
