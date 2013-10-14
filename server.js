/**
 * Module dependencies.
 */

var port = process.env.PORT || 9000,
    env = process.env.NODE_ENV || 'development',
    express = require('express'),
    config = require('./config/config')['environments'][env],
    models = require('./config/config')['models'],
    mongoose = require('mongoose'),
    fs = require('fs');

mongoose.connect(config.db);
fs.readdirSync(__dirname + '/app/models').forEach(function (file) {
    if (~file.indexOf('.js')) require(__dirname + '/app/models/' + file)(models)
});

var app = express();
require('./config/express')(app, config);
require('./config/routes')(app, mongoose, models);
app.listen(port, function () {
    console.log("Server listening on port %d in %s mode", port, env);
});
module.exports = app;