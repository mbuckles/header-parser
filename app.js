var express = require('express');
var bodyParser = require('body-parser');
<<<<<<< HEAD
var index = require('./routes/index');
var cors = require('cors');
var useragent = require('express-useragent')
var path = require('path');
=======
var cors = require('cors');
var useragent = require('express-useragent')
>>>>>>> f7a4ab0572720d909352a27c790bdfd5c8108b84
//create express app, instantiate cors & body-parser.
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);

app.get('/api/whoami', function(req, res, next){
=======

var api = '/api/whoami';

app.get(api, function(req, res, next){

>>>>>>> f7a4ab0572720d909352a27c790bdfd5c8108b84
var language = req.acceptsLanguages();
var software = "Os: " + req.useragent.os + ", Browser: " +req.useragent.browser;
//req.header['user-agent']
var ipaddress = req.ip;
<<<<<<< HEAD
res.json({'ipaddress': ipaddress, 'language': language[0], 'software': software});
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.listen(process.env.PORT || 3000, ()=>{
console.log('App is listening on port 3000');
=======

res.json({'ipaddress': ipaddress, 'language': language[0], 'software': software});
});

app.listen(3000, function(){
  console.log("Working")
>>>>>>> f7a4ab0572720d909352a27c790bdfd5c8108b84
});
