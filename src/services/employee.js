const db = require("../db/database");
const pool = db.getPool();

const getAllEmployees = (done) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query("SELECT * FROM employee", (err, res) => {
      if (err) throw err;

      done(res);
    });
  });
};

const createEmployee = (employee, done) => {
  const { firstName, lastName, roleId, managerId } = employee;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?)",
      [[firstName, lastName, roleId, managerId]],
      (err, res) => {
        if (err) throw err;

        done(res);
      }
    );
  });
};

const deleteEmployee = (firstName, lastName) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;

    connection.query(
      "DELETE FROM employee WHERE first_name = ? AND last_name = ?",
      [firstName, lastName],
      (err, res) => {
        if (err) throw err;

        done(res);
      }
    );
  });
};

module.exports = { getAllEmployees, createEmployee, deleteEmployee };
