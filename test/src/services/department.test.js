const db = require("../../../src/db/database");
const pool = db.getPool(true); // Makes sure we are using the test database

const services = require("../../../src/services");

describe("Department service tests", () => {
  it("Should add new department to table", (done) => {
    services.departments.createDepartment("Test department", (res) => {
      expect(res.affectedRows).toBe(1);
      done();
    });
  });

  it("Should get all departments", (done) => {
    services.departments.getAllDepartments((res) => {
      expect(res.length).toBe(1);
      done();
    });
  });

  it("Should delete department from table", (done) => {
    services.departments.deleteDepartment("Test department", (res) => {
      expect(res.affectedRows).toBe(1);
      done();
    });
  });
});
