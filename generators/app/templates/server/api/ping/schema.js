const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = Schema({
    pseudo: { type: String, lowercase: true, required: true, index: { unique: true } },
    rates: { type: [Number], default: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5]},
    average: { type: Number, min: 0, max: 5, default: 2.5 }
});

UserSchema.statics.random = function(callback) {
	this.count(function(err, count) {
    	if (err)
			return callback(err);

		let rand = Math.floor(Math.random() * count);
		this.findOne().skip(rand).exec(callback);
	}.bind(this));
}

UserSchema.methods.makeAverage = function(callback) {
	let average = this.rates.reduce((a,b) => { return a + b }) / this.rates.length
	this.average = average

	callback()
}

module.exports = mongoose.model('User', UserSchema, 'users');
