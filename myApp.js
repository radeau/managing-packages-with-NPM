var express = require('express');
var app = express();
require('dotenv').config();

// Task 1 - Meet the need console
console.log("Hello World");

// Task 2 - Start a Working Express Server
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
  });
  
//Task 3 - Serve Static Assets
app.use('/public', express.static(__dirname + "/public"));

//Task 4 - Serve JSON on specific route
app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase"){
        res.json(
            {"message": "HELLO JSON"}
        );
    } else {
        res.json(
            {"message": "Hello json"}
        );
    }
});

































 module.exports = app;