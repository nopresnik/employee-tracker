const app = require("./src/app");

// app.start();

const services = require("./src/services");
services.roles.getAllRoles((res) => console.log(res));
