const pool = require("../db/database");

const getAllRoles = (done) => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM role", (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const getRoleByTitle = (title) => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM role WHERE title = ?", title, (err, res) => {
      if (err) reject(err);
      resolve(res[0]);
    });
  });
};

const createRole = (role, done) => {
  return new Promise((resolve, reject) => {
    const { title, salary, department } = role;

    pool.query(
      "INSERT INTO role(title, salary, department_id) VALUES (?)",
      [[title, salary, department]],
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      }
    );
  });
};

const deleteRole = (title) => {
  return new Promise((resolve, reject) => {
    pool.query("DELETE FROM role WHERE title = ?", title, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

module.exports = { getAllRoles, getRoleByTitle, createRole, deleteRole };
