const mongoose = require('mongoose');
const EvaluationData = require('../models/EvaluationData');
const evaluationData = require('../models/EvaluationData');
class ControllerEvaluationData {
    constructor () {
        this.connect();
    }
    async connect() {
        try{
            await mongoose.connect(
                'mongodb://admin:newpass@ac-xqjmqob-shard-00-00.r0rr7nd.mongodb.net:27017,ac-xqjmqob-shard-00-01.r0rr7nd.mongodb.net:27017,ac-xqjmqob-shard-00-02.r0rr7nd.mongodb.net:27017/myDatabase?ssl=true&replicaSet=atlas-1217af-shard-0&authSource=admin&retryWrites=true&w=majority',
                { useNewUrlParser: true }
            );
        } catch(e){
            console.error(e);
        }
    }
    async getEvaluationDatas(res) {
        try{
            const evaluationDatas = await EvaluationData.find({});
            res.status(200).send(evaluationDatas);
        } catch(err){
            console.error(err);
            res.status(500).send('Ocurrió un error al obtener los datos de evaluación');
        }
    }
    async getEvaluationData(res, id) {
        try {
            const evaluationData = await EvaluationData.findById(id);
            res.status(200).send(evaluationData);
        }
        catch(err){
            console.error(err);
            res.status(500).send('Ocurrió un error al obtener el dato de evaluación con el id: ' + id);
        }
    }
    async createEvaluationData(res, body) {
        try{
            const evaluationData = new EvaluationData(body);
            await evaluationData.save();
            res.status(200).send('Dato de evaluación creado exitosamente');
        } catch(err){
            console.error(err);
            res.status(500).send('Ocurrió un error al crear el dato de evaluación');
        }
    }
    async updateEvaluationData(res, id, body) {
        try{
        const evaluationData = await EvaluationData.findByIdAndUpdate(id, body);
        res.status(200).send('Dato de evaluación actualizado exitosamente');
        } catch(err){
            console.error(err);
            res.status(500).send('Ocurrió un error al actualizar el dato de evaluación con el id: ' + id);
        }
    }
    async deleteEvaluationDatas(res) {
        try{
            const evaluationDatas = await EvaluationData.deleteMany({});
            res.status(200).send('Todos los datos de evaluación han sido eliminados');
        } catch(err){
            console.error(err);
            res.status(500).send('Ocurrió un error al eliminar los datos de evaluación');
        }
    }
    async deleteEvaluationData(res, id) {
        try{
            const evaluationData = await EvaluationData.findByIdAndDelete(id);
            res.status(200).send('Dato de evaluación eliminado exitosamente');
        } catch(err){
            console.error(err);
            res.status(500).send('Ocurrió un error al eliminar el dato de evaluación con el id: ' + id);
        }
    }
}
exports.controllerEvaluationData = new ControllerEvaluationData();