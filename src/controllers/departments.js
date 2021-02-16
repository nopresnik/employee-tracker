const services = require("../services");

const showAllDeps = (cb) => {
  services.departments.getAllDepartments((res) => {
    console.clear();
    console.table(res);
    cb();
  });
};

module.exports = { showAllDeps };
