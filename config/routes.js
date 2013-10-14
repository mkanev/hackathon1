var todo = require('../app/controllers/todo');

module.exports = function (app, db, models) {
    app.get('/', todo.index(db, models));
    app.get('/partials/:name', function (req, res) {
        var name = req.params.name;
        res.render('partials/' + name);
    });
};