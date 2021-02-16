const inquirer = require("inquirer");
const services = require("../services");
const prompts = require("../prompts");
const { prompt } = require("inquirer");
const { getDepByName } = require("../services/departments");

const showAllRoles = (cb) => {
  services.roles.getAllRoles((result) => {
    console.clear();
    console.table(result);
    cb();
  });
};

const addNewRole = async (cb) => {
  // services.departments.getAllDepartments((depsres) => {
  //   let departments = depsres.map((dep) => dep.name);

  //   inquirer.prompt(prompts.getAddRolePrompts(departments)).then((answer) => {
  //     const { roleTitle, roleSalary, roleDepartment } = answer;
  //     services.departments.getDepByName(roleDepartment, (department) => {
  //       services.roles.createRole(
  //         {
  //           title: roleTitle,
  //           salary: roleSalary,
  //           department: departme.id,
  //         },
  //         () => {
  //           cb();
  //         }
  //       );
  //     });
  //   });
  // });
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
