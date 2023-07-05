const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const evaluationSchema = new Schema({
    id_user: ObjectId,
    id_content: ObjectId,
    type: String,
    status: String,
})

var Evaluation = mongoose.model('Evaluation', evaluationSchema);
module.exports = Evaluation;