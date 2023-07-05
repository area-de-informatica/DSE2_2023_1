 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const userSchema = new Schema({
    name: String,
    last_name: String,
    password: String,
    email: String,
    type_user: String,
    activities: Array,
    evaluations: Array,
 });

 var User = mongoose.model('User', userSchema);
 module.exports = User;