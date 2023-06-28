const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TipoUsuariosSchema = new Schema({
    nickname: String,
    password: String,
    picture: String
});

var TipoUsuarios = mongoose.model("tipousuarios", TipoUsuariosSchema);

module.exports = TipoUsuarios;