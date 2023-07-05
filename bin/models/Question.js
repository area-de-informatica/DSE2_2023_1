const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    id_evaluation: ObjectId,
    id_content: ObjectId,
    statement: String,
    correct_answer: String,

});

var Question = mongoose.model('Question', questionSchema);
module.exports = Question;