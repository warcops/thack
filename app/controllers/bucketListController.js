/*global module*/
// handle the requests for buckets

module.exports = function (req, res) {

    // logic for bucket lists =======================================

    // return dummy json
    res.json({
        "display": "scuba",
        "key": "scuba1"
    });
};