/*global module, require*/

var fs = require('fs');

// handle the requests for hotels
module.exports = function (req, res, tfsCache) {

    // logic for hotel lists
    fs.readFile('app/stubs/activity.json', 'utf8', function(err, activities) {
        activities = JSON.parse(activities);
        if(err) {
            res.json({error: err});
        }
        res.json(activities);
    });
    
};