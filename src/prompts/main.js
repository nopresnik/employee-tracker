const constants = {
  add_dep: "Add department",
  add_role: "Add new role",
  add_emp: "Add new employee",
  view_dep: "View departments",
  view_roles: "View roles",
  view_emp: "View employees",
  update_emp: "Update employee",
};

const prompts = [
  {
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      constants.add_dep,
      constants.add_role,
      constants.add_emp,
      constants.view_dep,
      constants.view_roles,
      constants.view_emp,
      constants.update_emp,
    ],
  },
];

module.exports = {
  constants,
  prompts,
};
