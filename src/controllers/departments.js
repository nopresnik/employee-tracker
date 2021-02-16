const inquirer = require("inquirer");
const services = require("../services");
const prompts = require("../prompts");
const dbConfig = require("../db/db.config");

const showAllDeps = async (cb) => {
  const deps = await services.departments.getAllDepartments();
  console.clear();
  console.table(deps);
  cb();
};

const addNewDep = (cb) => {
  inquirer.prompt(prompts.getAddDepPrompts()).then((answer) => {
    const { depName } = answer;
    services.departments.createDepartment(depName, () => {
      cb();
    });
  });
};

module.exports = { showAllDeps, addNewDep };
