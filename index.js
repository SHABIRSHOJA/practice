var express = require('express');

var app = express();

//CRUD
app.post('/creat-user', (req, res) => {
    res.send("List of Users");
});

app.put('/update-user', (req, res) => {
    res.send("List of Users");
});


app.get('/read-all-user', (req, res) => {
    res.send("List of Users");
});

app.get('/get-user-details', (req, res) => {

    const UserObj = {
        id: 1,
        name: "Khalid",
        LastName: "Khan",
        Status: "True"
    }
    res.send(UserObj);
});

app.delete('/delete-user', (req, res) => {
    res.send("List of Users");
});


//CRUD Product
app.post('/creat-Product', (req, res) => {
    res.send("List of Product");
});

app.put('/update-Product', (req, res) => {
    res.send("List of Product");
});


app.get('/read-all-Product', (req, res) => {
    res.send("List of Product");
});

app.get('/get-Product-details', (req, res) => {

    const UserObj = {
        id: 1,
        name: "Khalid",
        LastName: "Khan",
        Status: "True"
    }
    res.send(UserObj);
});

app.delete('/delete-Product', (req, res) => {
    res.send("List of Product");
});

app.listen(4000)