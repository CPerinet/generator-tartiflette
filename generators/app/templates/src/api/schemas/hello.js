var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HelloSchema = Schema({
    name: { type: String, lowercase: true, required: true, default: 'hello'}
});

module.exports = mongoose.model('Hello', HelloSchema, 'hellos');
