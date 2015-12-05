/*global module, process*/

// define the configuration for the database ========================

module.exports = {
    url: 'mongodb://' + process.env.TFS_DB_USER_ID + ':' + process.env.TFS_DB_PSWD + '@' + process.env.TFS_DB_URL
};