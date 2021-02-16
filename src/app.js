const inquirer = require("inquirer");
const prompts = require("./prompts");
const cTable = require("console.table");
const services = require("./services");

const start = () => {
  inquirer.prompt(prompts.getMenuPrompts()).then((answer) => {
    const { action } = answer;
    console.log(action);

    switch (action) {
      case prompts.choices.add_dep:
        break;
      case prompts.choices.add_role:
        break;
      case prompts.choices.add_emp:
        break;
      case prompts.choices.view_dep:
        break;
      case prompts.choices.view_roles:
        break;
      case prompts.choices.view_emp:
        services.employees.getAllEmployees((result) => console.table(result));
        start();
        break;
      case prompts.choices.update_emp:
        break;
      default:
        return;
    }
  });
};

module.exports = { start };
