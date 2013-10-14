var mongoose = require('mongoose'),
    Schema = mongoose.Schema
    ;

module.exports = function (models) {

    var TodoSchema = new Schema({
        description: { type: String, required: true },
        due: { type: Date, required: true },
        done: { type: Boolean, default: false }
    });

    /**
     * Add your
     * - pre-save hooks
     * - validations
     * - virtuals
     */

    /**
     * Methods
     */

    TodoSchema.method({

    });

    /**
     * Statics
     */

    TodoSchema.static({

    });

    /**
     * Register
     */

    mongoose.model(models.Todo.name, TodoSchema);
};
