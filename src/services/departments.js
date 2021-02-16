const pool = require("../db/database");

const getAllDepartments = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM department", (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const getDepByName = (name) => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM department WHERE name = ?", name, (err, res) => {
      if (err) reject(err);
      resolve(res[0]);
    });
  });
};

const createDepartment = (name) => {
  return new Promise((resolve, reject) => {
    pool.query("INSERT INTO department(name) VALUES (?)", name, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const deleteDepartment = (name) => {
  return new Promise((resolve, reject) => {
    pool.query("DELETE FROM department WHERE name = ?", name, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

module.exports = {
  getAllDepartments,
  getDepByName,
  createDepartment,
  deleteDepartment,
};
