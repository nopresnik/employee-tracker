const db = require("../db/database");
const pool = db.getPool();

const getAllDepartments = (done) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query("SELECT * FROM department", (err, res) => {
      if (err) throw err;

      done(res);
    });
  });
};

const createDepartment = (name, done) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "INSERT INTO department(title) VALUES (?)",
      name,
      (err, res) => {
        if (err) throw err;

        done(res);
      }
    );
  });
};

const deleteDepartment = (name, done) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;

    connection.query(
      "DELETE FROM department WHERE name = ?",
      name,
      (err, res) => {
        if (err) throw err;

        done(res);
      }
    );
  });
};

module.exports = { getAllDepartments, createDepartment, deleteDepartment };
