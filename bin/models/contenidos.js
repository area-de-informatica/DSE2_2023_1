const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContenidosSchema = new Schema({
    nickname: String,
    password: String,
    picture: String
});

var Contenidos = mongoose.model("contenidos", ContenidosSchema);

module.exports = Contenidos;