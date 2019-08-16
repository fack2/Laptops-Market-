const dbconnection = require("../db_connection");
const getData = cb => {
  dbconnection.query("select * from laptopsMarket", (err, response) => {
    if (err) {
      console.log(err);
    } else {
      cb(null, response.rows);
    }
  });
};
module.exports = getData;