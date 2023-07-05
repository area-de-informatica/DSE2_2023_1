const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = require('mongodb');

const noteSchema = new Schema({
    id_user: ObjectId,
    id_content: ObjectId,
    id_activities: ObjectId,
    id_evaluation: ObjectId,
    note: Number,

});

var Note = mongoose.model('Note', noteSchema);
module.exports = Note;