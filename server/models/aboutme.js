const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aboutmeschema = new Schema({
    name:String,
    profession:String
});


module.exports = mongoose.model('aboutme', aboutmeschema);