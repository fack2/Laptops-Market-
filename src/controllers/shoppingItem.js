const getLaptop = require("../database/queries/getShoppingItem");
exports.getLaptops = (request, response) => {
  const { id } = request.params;

  getLaptop(id, (err, res) => {

    if (err) {
     console.log(err)
    } else {
        response.render("laptop", {
          data: res
        });
      }
  });
};

