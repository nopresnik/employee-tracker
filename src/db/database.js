const settings = require("./db.config");
const mysql = require("mysql");
let pool;

module.exports = {
  getPool: () => {
    if (pool) return pool;
    pool = mysql.createPool({
      host: settings.DB_HOST,
      user: settings.DB_USER,
      password: settings.DB_PASS,
      database: settings.DB_NAME,
    });
    return pool;
  },
};
