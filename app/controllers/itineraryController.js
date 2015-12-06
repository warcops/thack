/*global module, require, process*/

var fs = require('fs');
var request = require('request');

// handle the requests for buckets
module.exports = function (req, res, tfsCache) {
    
    var lat = req.query.lat;
    var long = req.query.long;
    var place = req.query.place;
    var action = req.query.action;
    var apiCount = 0;
    request('https://api.sandbox.amadeus.com/v1.2/airports/nearest-relevant?apikey='+process.env.TFS_AM_KEY+'&latitude=' + lat + '&longitude=' + long, function(error, response, body) {
        tfsCache.get('spot', function(err, spot) {
            
        }
        
        res.json(body);
    });
    
};