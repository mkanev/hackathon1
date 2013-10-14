var express = require('express'),
    path = require('path');

module.exports = function (app, config) {
    // all environments
    app.set('showStackError', true);
    app.set('views', config.root + '/app/views');
    app.set('view engine', 'jade');

    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.configure(function () {
        // bodyParser should be above methodOverride
        app.use(express.bodyParser());
        app.use(express.methodOverride());

        // cookieParser should be above session
        app.use(express.cookieParser());
    });
    app.use(app.router);

// development only
    if ('production' == app.get('env')) {
        app.use(express.static(path.join(__dirname, '../dist/heroku')));
    } else {
        app.use(express.static(path.join(__dirname, '../app')));
        app.use(express.errorHandler());
    }
};