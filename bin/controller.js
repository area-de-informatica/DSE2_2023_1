const mongoose = require("mongoose");
const User = require("./models/users");
const Actividades = require("./models/actividades")
const Contenidos = require("./models/contenidos")
const Notas = require("./models/notas")
const TipoUsuarios = require("./models/tipousuarios")


class controller{
    constructor(){
        this.connect();
    }
  async  connect(){
try{
    await mongoose.connect(
      "mongodb://Jlopez:adminpass@ac-bvm39ix-shard-00-00.xrciznj.mongodb.net:27017,ac-bvm39ix-shard-00-01.xrciznj.mongodb.net:27017,ac-bvm39ix-shard-00-02.xrciznj.mongodb.net:27017/edusex?ssl=true&replicaSet=atlas-13t6y8-shard-0&authSource=admin&retryWrites=true&w=majority",
         
         {useNewUrlParser:true}
    );
    console.log("conectados a la base de datos");

        

    }catch(e){
        console.error(e)
}
    }
    
    async getUsers(res) {
      try {
        const users = await User.find({}).exec();
        res.send(users);
      } catch (err) {
        throw err;
      }
    }
    
    async getActividades(res) {
      try {
        const actividades = await Actividades.find({}).exec();
        res.send(actividades);
      } catch (err) {
        throw err;
      }
    }
    
    async getContenidos(res) {
      try {
        const contenidos = await Contenidos.find({}).exec();
        res.send(contenidos);
      } catch (err) {
        throw err;
      }
    }

    async getNotas(res) {
      try {
        const notas = await Notas.find({}).exec();
        res.send(notas);
      } catch (err) {
        throw err;
      }
    }
    
    async getTipoUsuarios(res) {
      try {
        const tipousuarios = await TipoUsuarios.find({}).exec();
        res.send(tipousuarios);
      } catch (err) {
        throw err;
      }
    }
    
}

exports.controller = new controller();