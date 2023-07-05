const mongoose = require('mongoose');
const Content = require('../models/Content');

class ControllerContent {
    constructor() {
        this.connect();
    }

    async connect() {
        try {
            await mongoose.connect(
                'mongodb://admin:newpass@ac-xqjmqob-shard-00-00.r0rr7nd.mongodb.net:27017,ac-xqjmqob-shard-00-01.r0rr7nd.mongodb.net:27017,ac-xqjmqob-shard-00-02.r0rr7nd.mongodb.net:27017/myDatabase?ssl=true&replicaSet=atlas-1217af-shard-0&authSource=admin&retryWrites=true&w=majority',
                { useNewUrlParser: true }
            );
            console.log('Conectado a la base de datos exitosamente');
        } catch (e) {
            console.error(e);
        }
    }

    async getContents(res) {
        try {
            const contents = await Content.find({});
            res.status(200).send(contents);
        } catch (err) {
            console.error(err);
            res.status(500).send('Ocurrió un error al obtener los contenidos');
        }
    }
    async getContent(res, id) {
        try{
            const content = await Content.findById(id);
            res.status(200).send(content);
        } catch(err){
            console.error(err);
            res.status(500).send('Ocurrió un error al obtener el contenido con el id: ' + id);
        }
    }

//Método DELETE para eliminar todos los contenidos
   async deleteContents(res){
    try{
        const contents = await Content.deleteMany({});
        res.status(200).send('Todos los contenidos han sido eliminados');
    } catch(err){
        console.error(err);
        res.status(500).send('Ocurrió un error al eliminar los contenidos');
    }
   }

//Método DELETE para eliminar un contenido por su id
    async deleteContent(res, id){
        try{
            const content = await Content.findByIdAndDelete(id);
            res.status(200).send('El contenido ha sido eliminado');
        } catch(err){
            console.error(err);
            res.status(500).send('Ocurrió un error al eliminar el contenido con el id: ' + id);
        }
    }

   //Método POST para crear un nuevo contenido
  async createContent(res, body){
    try{
        const content = new Content(body);
        await content.save();
        res.status(200).send('contenido creado exitosamente');
    } catch(err){
        console.error(err);
        res.status(500).send('Ocurrió un error al crear el contenido');
    }
  } 

//Método PUT para actualizar un contenido
    async updateContent(res, id, body){
        try{
            const content = await Content.findByIdAndUpdate(id, body);
            res.status(200).send('contenido actualizado exitosamente');
        } catch (err){
            console.error(err);
            res.status(500).send('Ocurrió un error al actualizar el contenido con el id: ' + id);
        }
    }
}

exports.controllerContent = new ControllerContent();