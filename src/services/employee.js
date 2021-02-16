const db = require("../db/database");
const pool = db;

const getAllEmployees = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query("SELECT * FROM employee", (err, res) => {
        if (err) reject(err);
        resolve(res);
      });

      connection.release();
    });
  });
};

const getEmployeeById = (id) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query(
        "SELECT * FROM employee WHERE id = ?",
        id,
        (err, res) => {
          if (err) reject(err);
          resolve(res);
        }
      );

      connection.release();
    });
  });
};

const getEmployeeByName = (firstName, lastName) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query(
        "SELECT * FROM employee WHERE first_name = ? AND last_name = ?",
        [firstName, lastName],
        (err, res) => {
          if (err) reject(err);
          resolve(res);
        }
      );

      connection.release();
    });
  });
};

const createEmployee = (employee) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      const { firstName, lastName, roleId, managerId } = employee;
      connection.query(
        "INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?)",
        [[firstName, lastName, roleId, managerId]],
        (err, res) => {
          if (err) reject(err);
          resolve(res);
        }
      );

      connection.release();
    });
  });
};

const deleteEmployee = (firstName, lastName) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query(
        "DELETE FROM employee WHERE first_name = ? AND last_name = ?",
        [firstName, lastName],
        (err, res) => {
          if (err) reject(err);
          resolve(res);
        }
      );

      connection.release();
    });
  });
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  getEmployeeByName,
  createEmployee,
  deleteEmployee,
};
