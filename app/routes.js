/*global module, require*/

module.exports = function (app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // api to get the list for the first page
    app.get('/api/buckets', function (req, res) {
        require('./controllers/bucketListController')(req, res);
    });

    // route to handle creating goes here (app.post)

    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function (req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });
};