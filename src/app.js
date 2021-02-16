const db = require("./db/database");
const pool = db.getPool();

pool.getConnection((err, connection) => {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.log(res);
  });
});
