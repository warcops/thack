/*global module, require*/

// gather all the models
// var activityModel = require('../models/activity');

var fs = require('fs');

// handle the requests for buckets
module.exports = function (req, res) {

    // logic for bucket lists =======================================
    fs.readFile('app/stubs/activity.json', 'utf8', function(err, activities) {
        activities = JSON.parse(activities);
        if(err) {
            res.json({error: err});
        }
        res.json(activities);
    });
    
};