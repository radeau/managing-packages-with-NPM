var express = require('express');
var app = express();
require('dotenv').config();

// Task 1 - Meet the need console
console.log("Hello World");

//Task 5 - Implement a root level request logger middleware
app.use(function (req, rest, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

// Task 2 - Start a Working Express Server
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
  });
  
//Task 3 - Serve Static Assets
app.use('/public', express.static(__dirname + "/public"));

//Task 4 - Serve JSON on specific route
app.get('/json', (req, res) => {
    var jResponse = { "message": "Hello json"};

    if (process.env.MESSAGE_STYLE === "uppercase") {
        jResponse.message = jResponse.message.toUpperCase();
    }
    res.json(jResponse);
});

//Task 6 - Chain Middleware to create a time server
app.get('/now', function(req, res, next){
    req.time = new Date().toString();
    next();
}, function(req, res){
    res.json({ time: req.time });
});
 
 
































 module.exports = app;