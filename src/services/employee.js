const db = require("../db/database");
const connection = db.getConnection();

const getAllEmployees = (done) => {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;

    done(res);
  });
};

const getEmployeeById = (id, done) => {
  connection.query("SELECT * FROM employee WHERE id = ?", id, (err, res) => {
    if (err) throw err;

    done(res);
  });
};

const getEmployeeByName = (firstName, lastName, done) => {
  connection.query(
    "SELECT * FROM employee WHERE first_name = ? AND last_name = ?",
    [firstName, lastName],
    (err, res) => {
      if (err) throw err;

      done(res);
    }
  );
};

const createEmployee = (employee, done) => {
  const { firstName, lastName, roleId, managerId } = employee;
  connection.query(
    "INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?)",
    [[firstName, lastName, roleId, managerId]],
    (err, res) => {
      if (err) throw err;

      done(res);
    }
  );
};

const deleteEmployee = (firstName, lastName, done) => {
  connection.query(
    "DELETE FROM employee WHERE first_name = ? AND last_name = ?",
    [firstName, lastName],
    (err, res) => {
      if (err) throw err;

      done(res);
    }
  );
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  getEmployeeByName,
  createEmployee,
  deleteEmployee,
};
