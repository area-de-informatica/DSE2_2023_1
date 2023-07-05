const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const evaluationDataSchema = new Schema({
    id_evaluation: ObjectId,
    id_question: ObjectId,
    answer: String,
    state: String,

});

var evaluationData = mongoose.model('evaluationData', evaluationDataSchema);
module.exports = evaluationData;