const getShoppingItems = require("../database/queries/getShoppingItems");

exports.getShoppingItems = (request, response) => {
    getShoppingItems((err, res) => {
        if (err) {
          console.log(err);
        } else {
          response.render("home", { data: res });
        }
      })
      
};
