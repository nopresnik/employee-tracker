const settings = require("./db.config");
const mysql = require("mysql");
let pool;

module.exports = {
  getPool: (test = false) => {
    if (pool) return pool;

    let connectionProps = !test
      ? {
          host: settings.DB_HOST,
          user: settings.DB_USER,
          password: settings.DB_PASS,
          database: settings.DB_NAME,
        }
      : {
          host: settings.DB_TEST_HOST,
          user: settings.DB_TEST_USER,
          password: settings.DB_TEST_PASS,
          database: settings.DB_TEST_NAME,
        };

    pool = mysql.createPool(connectionProps);
    return pool;
  },
};
