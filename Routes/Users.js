var express = require('express');

var router = express.Router();

// /Users
router.get('/Users', (req, res) => {
    res.send("get request for Users");
});

// /Products/get-product-details
router.get('/get-Users-details', (req, res) => {
    res.send("get request for Users details of ecommerce");
});

module.exports = router;