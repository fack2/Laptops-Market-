const express = require('express');
const router = express.Router();

const error = require('./error');
const  {getShoppingItems}  = require("./shoppingHome");
const { getLaptops} = require("./shoppingItem");

router.get('/', getShoppingItems);
router.get('/laptop/:id', getLaptops);        


router.use(error.client);
router.use(error.server);

module.exports = router;//
