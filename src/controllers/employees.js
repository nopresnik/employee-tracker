const inquirer = require("inquirer");
const services = require("../services");
const prompts = require("../prompts");

const showAllEmployees = (cb) => {
  services.employees.getAllEmployees((result) => {
    console.clear();
    console.table(result);
    cb();
  });
};

const addNewEmployee = (cb) => {
  inquirer.prompt(prompts.getAddEmpPrompts(roles, managers));
};

module.exports = { showAllEmployees, addNewEmployee };
