const dbconnection = require("../db_connection");
const getLaptops = (id, cb) => {
    dbconnection.query("select * from laptopsMarket where id = $1", [id], (err, response) => {
        if (err) {
            console.log("database error",err);
        } else {
            console.log("the result is",err);
            cb(null, response.rows);
        }
    });
};
module.exports = getLaptops;