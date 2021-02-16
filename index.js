const app = require("./src/app");

// app.start();

const services = require("./src/services");

const newRole = {
  title: "Test role",
  salary: 50000,
  department: 1,
};

services.roles.createRole(newRole, (res) => console.log(res));
