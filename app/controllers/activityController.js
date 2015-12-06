/*global module, require*/

var fs = require('fs');

// handle the requests for activity spot list
module.exports = function (req, res, tfsCache) {

    // logic for activity, tfsCache lists
    fs.readFile('app/stubs/activity.json', 'utf8', function(err, activities) {
        activities = JSON.parse(activities);
        if(err) {
            res.json({error: err});
        }
        res.json(activities);
    });
    
};