var express = require('express');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var cors = require('cors');
var useragent = require('express-useragent')
var path = require('path');
//create express app, instantiate cors & body-parser.
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);

app.get('/api/whoami', function(req, res, next){
var language = req.acceptsLanguages();
var software = "Os: " + req.useragent.os + ", Browser: " +req.useragent.browser;
//req.header['user-agent']
var ipaddress = req.ip;

res.json({'ipaddress': ipaddress, 'language': language[0], 'software': software});
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.listen(process.env.PORT || 3000, ()=>{
console.log('App is listening on port 3000');
});
