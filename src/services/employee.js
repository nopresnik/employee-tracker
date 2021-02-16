const pool = require("../db/database");

const getAllEmployees = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM employee", (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const getEmployeeById = (id) => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM employee WHERE id = ?", id, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const getEmployeeByName = (firstName, lastName) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM employee WHERE first_name = ? AND last_name = ?",
      [firstName, lastName],
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      }
    );
  });
};

const createEmployee = (employee) => {
  return new Promise((resolve, reject) => {
    const { firstName, lastName, roleId, managerId } = employee;
    pool.query(
      "INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?)",
      [[firstName, lastName, roleId, managerId]],
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      }
    );
  });
};

const deleteEmployee = (firstName, lastName) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "DELETE FROM employee WHERE first_name = ? AND last_name = ?",
      [firstName, lastName],
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      }
    );
  });
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  getEmployeeByName,
  createEmployee,
  deleteEmployee,
};
