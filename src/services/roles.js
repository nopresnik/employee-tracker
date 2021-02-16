const db = require("../db/database");
const pool = db.getPool();

const getAllRoles = (done) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query("SELECT * FROM role", (err, res) => {
      if (err) throw err;

      done(res);
    });
  });
};

module.exports = { getAllRoles };
