const mongoose = require('mongoose');
const  Progress = require('../models/Progress');
class ControllerProgress {
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
    async getProgress(res) {
        try {
            const progresss = await Progress.find({});
            res.status(200).send(progresss);
        } catch (err) {
            console.error(err);
            res.status(500).send('Ocurrió un error al obtener los progresos');
        }
    }
    async getProgressById(res, id) {
        try {
            const progress = await Progress.findById(id);
            res.status(200).send(progress);
        } catch (err) {
            console.error(err);
            res.status(500).send('Ocurrió un error al obtener el progreso con el id: ' + id);
        }
    }
    async deleteProgress(res) {
        try {
            const progresss = await Progress.deleteMany({});
            res.status(200).send('Todos los progresos han sido eliminados');
        } catch (err) {
            console.error(err);
            res.status(500).send('Ocurrió un error al eliminar los progresos');
        }
    }
    async deleteProgressById(res, id) {
        try {
            const progress = await Progress.findByIdAndDelete(id);
            res.status(200).send('El progreso con el id ' + id + ' ha sido eliminado');
        } catch (err) {
            console.error(err);
            res.status(500).send('Ocurrió un error al eliminar el progreso con el id: ' + id);
        }
    }
    async createProgress(res, body) {
        try {
            const newProgress = await Progress.create(body);
            res.status(200).send(newProgress);
        } catch (err) {
            console.error(err);
            res.status(500).send('Ocurrió un error al crear el progreso');
        }
    }
    async updateProgressById(res, id, body) {
        try {
            const newProgress = await Progress.findByIdAndUpdate(id, body);
            res.status(200).send(newProgress);
        } catch (err) {
            console.error(err);
            res.status(500).send('Ocurrió un error al actualizar el progreso con el id: ' + id);
        }
    }

}
exports.controllerProgress = new ControllerProgress();
