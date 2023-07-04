const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    correo: String,
    id_actividad: String,
    id_tipo_usuario: String


});

var User = mongoose.model("User", UserSchema);

module.exports = User;