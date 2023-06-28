const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotasSchema = new Schema({
    nickname: String,
    password: String,
    picture: String
});

var Notas = mongoose.model("notas", NotasSchema);

module.exports = Notas;