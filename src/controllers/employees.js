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
    .then(async (answers) => {
      const role = await services.roles.getRoleByTitle(answers.empRole);
      let manId;
      if (answers.empManager === "None") {
        manId = null;
      } else {
        const firstName = answers.empManager.split(" ")[0];
        const lastName = answers.empManager.split(" ")[1];

        const employee = await services.employees.getEmployeeByName(
          firstName,
          lastName
        );

        manId = employee[0].id;
      }

      services.employees
        .createEmployee({
          firstName: answers.empFirstName,
          lastName: answers.empLastName,
          roleId: role.id,
          managerId: manId,
        })
        .then(() => cb());
    });
};

module.exports = { showAllEmployees, addNewEmployee };
