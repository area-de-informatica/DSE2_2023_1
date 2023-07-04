const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotasSchema = new Schema({
    Fecha_creación: Date,
    Fecha_Modificación: Date,
    id_usuario: String
});

var Notas = mongoose.model("notas", NotasSchema);

module.exports = Notas;