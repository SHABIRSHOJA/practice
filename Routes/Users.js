var express = require('express');

var router = express.Router();

router.use('/' , (req, res, next) => {
    console.log("API call recived");
    next();
});


// /Users
router.get('/Users', (req, res) => {
    res.send("get request for Users");
});

// /Users/get-Users-details
router.get('/get-Users-details/:id', (req, res) => {
    res.send("get request for Users details of ecommerce" + req.params.id);
});

// /Users/search/:key([0-9]{4}
router.get('/search/:key([0-9]{4})', (req, res) => {
    res.send("Data Captured is " + req.params.key);
});

// /Users/search-username/:key([a-zA-Z]{4}
router.get('/search-username/:key([a-zA-Z]{5})', (req, res) => {
    res.send("Data Captured is " + req.params.key);
});


router.get('*', (req, res) => {
    res.send("Url not found 404");
});






module.exports = router;