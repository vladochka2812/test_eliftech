const { createPool } = require("mysql");

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "deliveryapp",
  connectionLimit: 10,
});


module.exports = pool;
