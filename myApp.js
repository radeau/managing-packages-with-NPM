var express = require('express');
var app = express();
require('dotenv').config();
var bodyParser = require('body-parser');

// Task 1 - Meet the need console
console.log("Hello World");

//Task 5 - Implement a root level request logger middleware
app.use(function (req, rest, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

// Task 9 - Meet the need console
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

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
 
//Task 7 - Get route Parameter Input from the Client
app.get('/:word/echo', function(req, res){
    word = req.params.word;
    res.json({ echo: word })
});

//Task 8 - Get Query Parameter INput from the Client
app.get('/name', function(req, res){
    res.json( {name: req.query.first + " " + req.query.last} );
});

//Task 10 - Get Data from POST Requests
app.post('/name', function(req, res){
    res.json( {name: req.body.first + " " + req.body.last} );
});
































 module.exports = app;