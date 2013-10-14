var path = require('path'),
    rootPath = path.resolve(__dirname + '../..');

module.exports = {
    environments: {
        development: {
            root: rootPath,
            db: 'mongodb://localhost/hackathon_1_dev'
        },
        test: {
            root: rootPath,
            db: 'mongodb://localhost/hackathon_1_test'
        },
        staging: {
            root: rootPath,
            db: process.env.MONGOHQ_URL
        },
        production: {
            root: rootPath,
            db: process.env.MONGOHQ_URL
        }
    },
    models: {
        Todo: {
            name: 'Todo'
        }
    }
};