var express = require('express'),

app = express(),
port = process.env.port || 3000,
mongoose = require('mongoose'),
Task = require('../rest-api/api/models/Model'),
bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Usuario');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('../rest-api/api/routes/Routes');
routes(app);

app.listen(port);
console.log('todo list RESTful API server started on: ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });