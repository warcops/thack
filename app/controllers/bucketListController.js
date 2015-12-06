/*global module, require*/

// gather all the models
// var activityModel = require('../models/activity');

var fs = require('fs');

// handle the requests for buckets
module.exports = function (req, res, tfsCache) {

    // logic for bucket lists
    var callback = function(err, activities) {
        
        if(err) {
            res.json({error: err});
        }
        var acts;
        if(activities === undefined) {
            fs.readFile('app/stubs/activity.json', 'utf8', function(err, activities) {
                if(err) {
                    res.json({error: err});
                }
                activities = JSON.parse(activities);
                tfsCache.set('activity', activities, function(err, success) {
                    if(err) {
                        res.json({error: err});
                    }
                    acts = getActivities(activities);
                    res.json(acts);
                });
            });
        } else {
            acts = getActivities(activities);
            res.json(acts);
        }
        
        
    };
    
    var getActivities = function(activities) {
        var acts = [];
        for(var actCount = 0; actCount < activities.length; actCount++) {
            acts.push({"display": activities[actCount].display, "action": activities[actCount].action});
        }
        return acts;
    };
    
    // check if the content is present in cache, if not load from file
    tfsCache.get('activity', callback);
    
};