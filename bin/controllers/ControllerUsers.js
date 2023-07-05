//Controlador de la base de datos

const mongoose = require('mongoose');
const User = require('../models/User');

class ControllerUser {
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


//Método GET para obtener todos los usuarios
    async getUsers(res) {
        try {
            const users = await User.find({});
            res.status(200).send(users);
        } catch (err) {
            console.error(err);
            res.status(500).send('Ocurrió un error al obtener los usuarios');
        }
    }

//Método GET para obtener un usuario por su id
    async getUser(res, id) {
        try{
            const user = await User.findById(id);
            res.status(200).send(user);
        } catch(err){
            console.error(err);
            res.status(500).send('Ocurrió un error al obtener el usuario con el id: ' + id);
        }
    }

//Método DELETE para eliminar todos los usuarios
   async deleteUsers(res){
    try{
        const users = await User.deleteMany({});
        res.status(200).send('Todos los usuarios han sido eliminados');
    } catch(err){
        console.error(err);
        res.status(500).send('Ocurrió un error al eliminar los usuarios');
    }
   }

//Método DELETE para eliminar un usuario por su id
    async deleteUser(res, id){
        try{
            const user = await User.findByIdAndDelete(id);
            res.status(200).send('El usuario ha sido eliminado');
        } catch(err){
            console.error(err);
            res.status(500).send('Ocurrió un error al eliminar el usuario con el id: ' + id);
        }
    }

   //Método POST para crear un nuevo usuario
  async createUser(res, body){
    try{
        const user = new User(body);
        await user.save();
        res.status(200).send('Usuario creado exitosamente');
    } catch(err){
        console.error(err);
        res.status(500).send('Ocurrió un error al crear el usuario');
    }
  } 

//Método PUT para actualizar un usuario
    async updateUser(res, id, body){
        try{
            const user = await User.findByIdAndUpdate(id, body);
            res.status(200).send('Usuario actualizado exitosamente');
        } catch (err){
            console.error(err);
            res.status(500).send('Ocurrió un error al actualizar el usuario con el id: ' + id);
        }
    }
}

exports.controllerUser = new ControllerUser();
