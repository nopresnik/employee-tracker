const inquirer = require("inquirer");
const services = require("../services");
const prompts = require("../prompts");
const dbConfig = require("../db/db.config");

const showAllDeps = async (cb) => {
  services.departments.getAllDepartments().then((deps) => {
    console.clear();
    console.table(deps);
    cb();
  });
};

const addNewDep = (cb) => {
  inquirer.prompt(prompts.getAddDepPrompts()).then((answer) => {
    const { depName } = answer;
    services.departments.createDepartment(depName).then(() => {
      console.clear();
      cb();
    });
  });
};

module.exports = { showAllDeps, addNewDep };
