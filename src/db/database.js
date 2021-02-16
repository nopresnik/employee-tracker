const settings = require("./db.config");
const mysql = require("mysql");

module.exports = {
  getConnection: (test = false) => {
    const param = (param) =>
      settings[!test ? `DB_${param}` : `DB_TEST_${param}`];

    connection = mysql.createConnection({
      connectLimit: 10,
      host: param("HOST"),
      user: param("USER"),
      password: param("PASS"),
      database: param("NAME"),
    });
    return connection;
  },
};
