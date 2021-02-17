const inquirer = require("inquirer");
const services = require("../services");
const prompts = require("../prompts");

const showAllRoles = async (cb) => {
  services.roles.getAllRoles().then((result) => {
    console.clear();
    console.table(result);
    cb();
  });
};

const addNewRole = async (cb) => {
  console.clear();
  let departments = await services.departments.getAllDepartments();
  departments = departments.map((dep) => dep.name);

  inquirer
    .prompt(prompts.getAddRolePrompts(departments))
    .then(async (answer) => {
      const { roleTitle, roleSalary, roleDepartment } = answer;
      const department = await services.departments.getDepByName(
        roleDepartment
      );
      services.roles
        .createRole({
          title: roleTitle,
          salary: roleSalary,
          department: department.id,
        })
        .then(() => cb());
    });
};

module.exports = { showAllRoles, addNewRole };
