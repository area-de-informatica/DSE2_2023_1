const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TipoUserSchema = new Schema({
    nickname: String,
    password: String,
    picture: String
});

var TipoUser = mongoose.model("TipoUser", TipoUserSchema);

module.exports = TipoUser;