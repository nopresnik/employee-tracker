// const db = require("./db/database");
// const pool = db.getPool();

// pool.getConnection((err, connection) => {
//   connection.query("SELECT * FROM employee", (err, res) => {
//     if (err) throw err;
//     console.log(res);
//   });
// });

const inquirer = require("inquirer");
const prompts = require("./prompts");

const start = () => {
  // inquirer.prompt(prompts.main.prompts);
  inquirer.prompt(prompts.addDepartment.prompts);
};

module.exports = { start };
