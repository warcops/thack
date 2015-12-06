/*global module, require*/

module.exports = function (app, tfsCache) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes
    
    // route to handle get requests goes here (app.get)

    // api to get the list for the first page
    app.get('/api/buckets', function (req, res) {
        require('./controllers/bucketListController')(req, res, tfsCache);
    });
    
    // api to get the places
    app.get('/api/placesList', function (req, res) {
        require('./controllers/placesController')(req, res, tfsCache);
    });
    
    // api to get the itinerary
    app.get('/api/itinerary', function (req, res) {
        require('./controllers/itineraryController')(req, res, tfsCache);
    });
    
    // api to get the hotel options
    app.get('/api/stayList', function (req, res) {
        require('./controllers/stayController')(req, res, tfsCache);
    });
    
    // api to get the travel options
    app.get('/api/travelList', function (req, res) {
        require('./controllers/travelController')(req, res, tfsCache);
    });
    
    // api to get the activity options
    app.get('/api/activityList', function (req, res) {
        require('./controllers/activityController')(req, res, tfsCache);
    });
    
    // api to get the extra activity options
    app.get('/api/extraList', function (req, res) {
        require('./controllers/extraController')(req, res, tfsCache);
    });

    // route to handle creating goes here (app.post)
    
    // api to book the trip
    app.post('/api/book', function (req, res) {
        require('./controllers/bookingController')(req, res, tfsCache);
    });

    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function (req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });
};