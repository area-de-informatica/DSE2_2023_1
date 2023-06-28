const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActividadesSchema = new Schema({
    nickname: String,
    password: String,
    picture: String
});

var Actividades = mongoose.model("Actividades", ActividadesSchema);

module.exports = Actividades;