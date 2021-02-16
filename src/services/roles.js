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

const createRole = (role, done) => {
  const { title, salary, department } = role;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "INSERT INTO role (title, salary, department_id) VALUES (?,?,?)",
      [title, salary, department],
      (err, res) => {
        if (err) throw err;

        done(res);
      }
    );
  });
};

module.exports = { getAllRoles, createRole };
