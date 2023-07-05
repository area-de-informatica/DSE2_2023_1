const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const progressSchema = new Schema({
    id_user: ObjectId,
    id_content: ObjectId,
    id_activities: ObjectId,
    progress: Number,

});

var Progress = mongoose.model('Progress', progressSchema);
module.exports = Progress;