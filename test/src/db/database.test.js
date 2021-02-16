const db = require("../../../src/db/database");
const pool = db.getPool();

describe("Databse tests", () => {
  it("Connection is successful", (done) => {
    pool.getConnection((err, connection) => {
      if (err) {
        done(err);
        return;
      }
    });

    done();
  });

  it("Required tables exist", (done) => {
    pool.getConnection((err, connection) => {
      if (err) {
        done(err);
        return;
      }

      connection.query("SHOW TABLES", (err, res) => {
        if (err) {
          done(err);
          return;
        }

        const requiredTables = ["department", "employee", "role"];
        const actualTables = res.map((x) => x[Object.keys(x)[0]]);

        expect(actualTables).toEqual(requiredTables);
      });
    });

    done();
  });
});
