const db = require("../db/database");
const connection = db.getConnection();

const getAllRoles = (done) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM role", (err, res) => {
      if (err) reject(err);

      resolve(res);
    });
  });
};

const createRole = (role, done) => {
  return new Promise((resolve, reject) => {
    const { title, salary, department } = role;
    connection.query(
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
    connection.query("DELETE FROM role WHERE title = ?", title, (err, res) => {
      if (err) reject(err);

      resolve(res);
    });
  });
};

module.exports = { getAllRoles, createRole, deleteRole };
