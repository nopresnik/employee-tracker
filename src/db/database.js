const settings = require("./db.config");
const mysql = require("mysql");
let pool;

module.exports = {
  getPool: (test = false) => {
    if (pool) return pool;
    const param = (param) =>
      settings[!test ? `DB_${param}` : `DB_TEST_${param}`];

    pool = mysql.createPool({
      host: param("HOST"),
      user: param("USER"),
      password: param("PASS"),
      database: param("NAME"),
    });
    return pool;
  },
};
