const db = require("../../../src/db/database");
const pool = db.getPool(true); // Makes sure we are using the test database

const services = require("../../../src/services");

const testRole = { title: "Test role", salary: 10, department_id: 1 };

describe("Department service tests", () => {
  it("Should add new department to table", (done) => {
    services.roles.createRole(testRole, (res) => {
      expect(res.affectedRows).toBe(1);
      done();
    });
  });

  it("Should get all departments", (done) => {
    services.roles.getAllRoles((res) => {
      expect(res.length).toBe(1);
      done();
    });
  });

  it("Should delete department from table", (done) => {
    services.roles.deleteRole(testRole.title, (res) => {
      expect(res.affectedRows).toBe(1);
      done();
    });
  });
});
