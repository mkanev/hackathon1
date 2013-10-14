exports.index = function (db, models) {
    var Todo = db.model(models['Todo']['name']);

    return function (req, res) {
        Todo.find({}, function (error, todos) {
            res.render('index', {
                title: 'Express',
                todos: ['todo1', 'todo2']
            });
        });
    };
};