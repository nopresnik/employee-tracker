const db = require("../db/database");
const connection = db.getConnection();

const getAllDepartments = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM department", (err, res) => {
      if (err) reject(err);

      resolve(res);
    });
  });
};

const getDepByName = (name) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM department WHERE name = ?",
      name,
      (err, res) => {
        if (err) reject(err);

        resolve(res[0]);
      }
    );
  });
};

const createDepartment = (name) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO department(name) VALUES (?)",
      name,
      (err, res) => {
        if (err) reject(err);

        resolve(res);
      }
    );
  });
};

const deleteDepartment = (name) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "DELETE FROM department WHERE name = ?",
      name,
      (err, res) => {
        if (err) reject(err);

        resolve(res);
      }
    );
  });
};

module.exports = {
  getAllDepartments,
  getDepByName,
  createDepartment,
  deleteDepartment,
};
