/*global module, require*/

var fs = require('fs');
var request = require('request');

// handle the requests for travel
module.exports = function (req, res, tfsCache) {

    // logic for travel lists
    fs.readFile('app/stubs/activity.json', 'utf8', function(err, activities) {
        activities = JSON.parse(activities);
        if(err) {
            res.json({error: err});
        }
        res.json(activities);
    });
    
};