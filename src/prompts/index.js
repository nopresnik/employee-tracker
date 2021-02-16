const choices = {
  add_dep: "Add department",
  add_role: "Add new role",
  add_emp: "Add new employee",
  view_dep: "View departments",
  view_roles: "View roles",
  view_emp: "View employees",
  update_emp: "Update employee",
};

const menu = [
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

const addDep = [
  {
    type: "input",
    name: "depName",
    message: "Enter new department's name:",
  },
];

module.exports = {
  choices,
  menu,
  addDep,
};
