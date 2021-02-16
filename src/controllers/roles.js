const inquirer = require("inquirer");
const services = require("../services");
const prompts = require("../prompts");

const showAllRoles = (cb) => {
  services.roles.getAllRoles((result) => {
    console.clear();
    console.table(result);
    cb();
  });
};

const addNewRole = async (cb) => {
  services.departments.getAllDepartments((depsres) => {
    let departments = depsres.map((dep) => dep.name);

    inquirer.prompt(prompts.getAddRolePrompts(departments)).then((answer) => {
      const { roleTitle, roleSalary, roleDepartment } = answer;
      services.departments.getDepByName(roleDepartment, (department) => {
        services.roles.createRole(
          {
            title: roleTitle,
            salary: roleSalary,
            department: department.id,
          },
          () => {
            cb();
          }
        );
      });
    });
  });
};

module.exports = { showAllRoles, addNewRole };
