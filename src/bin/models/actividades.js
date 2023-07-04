const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActividadesSchema = new Schema({
    nombre: String,
    calificacion:  {
        type: Number,
        min: 0,
        max: 5
      }
});

var Actividades = mongoose.model("Actividades", ActividadesSchema);

module.exports = Actividades;