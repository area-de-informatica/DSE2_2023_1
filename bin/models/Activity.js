const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = require('mongodb');

const activitySchema = new Schema({
    id_user: ObjectId,
    id_content: ObjectId,
    description: String,
    name: String,
})

var Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;