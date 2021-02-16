const settings = require("./db.config");
const mysql = require("mysql");
let pool;

module.exports = {
  getPool: (test = false) => {
    if (pool) return pool;
    let prefix = !test ? "DB_" : "DB_TEST_";
    pool = mysql.createPool({
      host: settings[prefix + "HOST"],
      user: settings[prefix + "USER"],
      password: settings[prefix + "PASS"],
      database: settings[prefix + "NAME"],
    });
    return pool;
  },
};
