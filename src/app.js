const inquirer = require("inquirer");
const prompts = require("./prompts");

const start = () => {
  inquirer.prompt(prompts.getAddEmpPrompts(["a"], ["b"]));
};

module.exports = { start };
