const choices = {
  add_dep: "Add department",
  add_role: "Add new role",
  add_emp: "Add new employee",
  view_dep: "View departments",
  view_roles: "View roles",
  view_emp: "View employees",
  update_emp: "Update employee",
};

const getMenuPrompts = () => [
  {
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      choices.add_dep,
      choices.add_role,
      choices.add_emp,
      choices.view_dep,
      choices.view_roles,
      choices.view_emp,
      choices.update_emp,
    ],
  },
];

const getAddDepPrompts = () => [
  {
    type: "input",
    name: "depName",
    message: "Enter new department's name:",
  },
];

const getAddEmpPrompts = (roles, managers) => [
  {
    type: "input",
    name: "empFirstName",
    message: "Enter first name:",
  },
  {
    type: "input",
    name: "empLastName",
    message: "Enter last name:",
  },
  {
    type: "list",
    name: "empRole",
    message: "Select employee's role:",
    choices: roles,
  },
  {
    type: "list",
    name: "empManager",
    message: "Select employee's manager:",
    choices: managers,
  },
];

const getUpdateEmpPrompts = (employees) => [
  {
    type: "list",
    name: "empList",
    message: "Select the employee you would like to update:",
    choices: employees,
  },
];

module.exports = {
  choices,
  getMenuPrompts,
  getAddDepPrompts,
  getAddEmpPrompts,
  getUpdateEmpPrompts,
};
