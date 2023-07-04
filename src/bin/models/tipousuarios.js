const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TipoUsuariosSchema = new Schema({ 
    rol: String,
    califica: String,
    id_user: String

});

var TipoUsuarios = mongoose.model("tipousuarios", TipoUsuariosSchema);

module.exports = TipoUsuarios;