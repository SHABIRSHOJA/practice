var express = require('express');

var router = express.Router();

// /Products
router.get('/', (req, res) => {
    res.send("get request for products");
});

// /Products/get-product-details
router.get('/get-product-details', (req, res) => {
    res.send("get request for products details of ecommerce");
});

module.exports = router;