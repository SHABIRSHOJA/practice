var express = require('express');

var app =  express();

app.get("/get", (req, res) => {

    res.send("Hello Shabir");
});


app.get("/trianing", (req, res) => {

    var trainingObj = {
        trainingId: 10,
        trainingName: 'Express Course',
        active: 'True'
    }
    res.send(trainingObj);
});
app.listen(4000);