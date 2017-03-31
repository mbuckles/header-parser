var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var useragent = require('express-useragent')
//create express app, instantiate cors & body-parser.
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

var api = '/api/whoami';

app.get(api, function(req, res, next){

var language = req.acceptsLanguages();
var software = "Os: " + req.useragent.os + ", Browser: " +req.useragent.browser;
//req.header['user-agent']
var ipaddress = req.ip;

res.json({'ipaddress': ipaddress, 'language': language[0], 'software': software});
});

app.listen(3000, function(){
  console.log("Working")
});
