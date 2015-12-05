/*global module*/
// grab the nerd model we just created
// var Nerd = require('./models/nerd');

module.exports = function (app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // api to get the list for the first page
    app.get('/api/buckets', function (req, res) {
        res.json({
            "display": "scuba",
            "key": "scuba1"
        });
    });

    // route to handle creating goes here (app.post)

    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function (req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });
};