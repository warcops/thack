/*global module, require*/

var fs = require('fs');

// handle the requests for list of places
module.exports = function (req, res, tfsCache) {

    // logic for place lists
    var getPlaces = function(activities) {
        var places = [];
        for(var actCount = 0; actCount < activities.length; actCount++) {
            if(req.query.action === activities[actCount].action) {
                for(var plcCount = 0; plcCount < activities[actCount].places.length; plcCount++) {
                    places.push({"action": activities[actCount].action, "place": activities[actCount].places[plcCount]});
                }
                
            }   
        }
        return places;
    };
    
    var callback = function(err, activities) {
        
        if(err) {
            res.json({error: err});
        }
        var places;
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
                    places = getPlaces(activities);
                    res.json(places);
                });
                
            });
        } else {
            places = getPlaces(activities);
            res.json(places);
        }
        
        
    };
    
    // check if the content is present in cache, if not load from file
    tfsCache.get('activity', callback);
    
};