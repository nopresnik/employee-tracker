const db = require("../db/database");
const connection = db.getConnection();

const getAllDepartments = (done) => {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;

    done(res);
  });
};

const createDepartment = (name, done) => {
  connection.query(
    "INSERT INTO department(name) VALUES (?)",
    name,
    (err, res) => {
      if (err) throw err;

      done(res);
    }
  );
};

const deleteDepartment = (name, done) => {
  connection.query(
    "DELETE FROM department WHERE name = ?",
    name,
    (err, res) => {
      if (err) throw err;

      done(res);
    }
  );
};

module.exports = { getAllDepartments, createDepartment, deleteDepartment };
