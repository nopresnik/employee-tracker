const inquirer = require("inquirer");
const services = require("../services");
const prompts = require("../prompts");

const showAllEmployees = (cb) => {
  services.employees.getAllEmployees().then((result) => {
    console.clear();
    console.table(result);
    cb();
  });
};

const addNewEmployee = async (cb) => {
  let roles = await services.roles.getAllRoles();
  let managers = await services.employees.getAllEmployees();

  roles = roles.map((role) => role.title);
  managers = managers.map((man) => `${man.first_name} ${man.last_name}`);

  inquirer
    .prompt(prompts.getAddEmpPrompts(roles, managers))
    .then((answers) => console.log(answers));
};

module.exports = { showAllEmployees, addNewEmployee };
