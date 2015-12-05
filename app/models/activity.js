/*global require, module*/
// grab the mongoose module
var mongoose = require('mongoose');

// define the schema
var activitySchema = mongoose.Schema({
    display: {type: String},
    actions: {type: String},
    places: {type: Array}
});

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('activity', activitySchema);