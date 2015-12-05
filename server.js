/*global require, process, __dirname, module*/
// modules =================================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
// var mongoose = require('mongoose');

// configuration ===========================================

// config files
// var db = require('./config/db');

// set our port
var port = process.env.TFS_PORT || 8080;
var ipaddress = process.env.TFS_IP;
if (typeof ipaddress === "undefined") {
    //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
    //  allows us to run/test the app locally.
    console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
    ipaddress = "127.0.0.1";
}

// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url); 

// setup prerender for seo
app.use(require('prerender-node'));

// add compression
var compress = require('compression');

app.use(compress());

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080 or the env ip and port
app.listen(port, ipaddress);

// shoutout to the user                     
console.log('Thoughts for sale on port ' + port);

// expose app           
exports = module.exports = app;