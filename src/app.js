const inquirer = require("inquirer");
const prompts = require("./prompts");
const cTable = require("console.table");
const services = require("./services");
const controllers = require("./controllers");

const start = () => {
  inquirer.prompt(prompts.getMenuPrompts()).then((answer) => {
    const { action } = answer;
    console.log(action);

    switch (action) {
      case prompts.choices.add_dep:
        controllers.departments.addNewDep(() => start());
        break;
      case prompts.choices.add_role:
        controllers.roles.addNewRole(() => start());
        break;
      case prompts.choices.add_emp:
        controllers.employees.addNewEmployee(() => start());
        break;
      case prompts.choices.view_dep:
        controllers.departments.showAllDeps(() => start());
        break;
      case prompts.choices.view_roles:
        controllers.roles.showAllRoles(() => start());
        break;
      case prompts.choices.view_emp:
        controllers.employees.showAllEmployees(() => start());
        break;
      case prompts.choices.update_emp:
        controllers.employees.showUpdateEmployee(() => start());
        break;
      default:
        return;
    }
  });
};

module.exports = { start };
