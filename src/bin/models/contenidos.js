const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContenidosSchema = new Schema({
    nombre_tema: String,
    tipo_contenido: String,
    id_actividad: String
});

var Contenidos = mongoose.model("contenidos", ContenidosSchema);

module.exports = Contenidos;