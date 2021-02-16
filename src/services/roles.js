const db = require("../db/database");
const pool = db;

const getAllRoles = (done) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query("SELECT * FROM role", (err, res) => {
        if (err) reject(err);
        resolve(res);
      });

      connection.release();
    });
  });
};

const getRoleByTitle = (title) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query(
        "SELECT * FROM role WHERE title = ?",
        title,
        (err, res) => {
          if (err) reject(err);
          resolve(res[0]);
        }
      );

      connection.release();
    });
  });
};

const createRole = (role, done) => {
  return new Promise((resolve, reject) => {
    const { title, salary, department } = role;
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query(
        "INSERT INTO role(title, salary, department_id) VALUES (?)",
        [[title, salary, department]],
        (err, res) => {
          if (err) reject(err);
          resolve(res);
        }
      );

      connection.release();
    });
  });
};

const deleteRole = (title) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query(
        "DELETE FROM role WHERE title = ?",
        title,
        (err, res) => {
          if (err) reject(err);
          resolve(res);
        }
      );

      connection.release();
    });
  });
};

module.exports = { getAllRoles, getRoleByTitle, createRole, deleteRole };
