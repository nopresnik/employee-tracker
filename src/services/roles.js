const db = require("../db/database");
const connection = db.getConnection();

const getAllRoles = (done) => {
  connection.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;

    done(res);
  });
};

const createRole = (role, done) => {
  const { title, salary, department } = role;
  connection.query(
    "INSERT INTO role(title, salary, department_id) VALUES (?)",
    [[title, salary, department]],
    (err, res) => {
      if (err) throw err;

      done(res);
    }
  );
};

const deleteRole = (title, done) => {
  connection.query("DELETE FROM role WHERE title = ?", title, (err, res) => {
    if (err) throw err;

    done(res);
  });
};

module.exports = { getAllRoles, createRole, deleteRole };
