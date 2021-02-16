const db = require("../db/database");
const pool = db.getConnection();

const getAllDepartments = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query("SELECT * FROM department", (err, res) => {
        if (err) reject(err);
        resolve(res);
      });

      connection.release();
    });
  });
};

const getDepByName = (name) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query(
        "SELECT * FROM department WHERE name = ?",
        name,
        (err, res) => {
          if (err) reject(err);
          resolve(res[0]);
        }
      );

      connection.release();
    });
  });
};

const createDepartment = (name) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query(
        "INSERT INTO department(name) VALUES (?)",
        name,
        (err, res) => {
          if (err) reject(err);
          resolve(res);
        }
      );

      connection.release();
    });
  });
};

const deleteDepartment = (name) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query(
        "DELETE FROM department WHERE name = ?",
        name,
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
  getAllDepartments,
  getDepByName,
  createDepartment,
  deleteDepartment,
};
