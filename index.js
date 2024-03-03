var express = require('express');

var Products = require('./Routes/Products');
var Users = require('./Routes/Users');
var app = express();

app.use('/Products', Products);
app.use('/Users', Users);

app.listen(4000)