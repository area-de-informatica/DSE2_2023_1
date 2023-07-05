const mongoose = require('mongoose');
const Evaluation = require('../models/Evaluation');

class ControllerEvaluation {
    constructor() {
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

    async getEvaluations(res) {
        try{
            const evaluations = await Evaluation.find({});
            res.status(200).send(evaluations);
        } catch(err){
            console.error(err);
            res.status(500).send('Ocurrió un error al obtener las evaluaciones');
        }
    }
    async getEvaluation(res, id) {
       try {
        const evaluation = await Evaluation.findById(id);
        res.status(200).send(evaluation);
       } catch(err){
           console.error(err);
           res.status(500).send('Ocurrió un error al obtener la evaluación con el id: ' + id);
       }
    }
    async createEvaluation(res, body) {
       try{
        const evaluation = new Evaluation(body);
        await evaluation.save();
        res.status(200).send('Evaluación creada exitosamente');
       } catch(err){
           console.error(err);
           res.status(500).send('Ocurrió un error al crear la evaluación');
       }
    }
    async updateEvaluation(res, id, body) {
        try{
            const evaluation = await Evaluation.findByIdAndUpdate(id, body);
            res.status(200).send('Evaluación actualizada exitosamente');
        } catch(err){
            console.error(err);
            res.status(500).send('Ocurrió un error al actualizar la evaluación con el id: ' + id);
        }
    }
    async deleteEvaluations(res) {
        try{
            const evaluations = await Evaluation.deleteMany({});
            res.status(200).send('Todas las evaluaciones han sido eliminadas');
        } catch(err){
            console.error(err);
            res.status(500).send('Ocurrió un error al eliminar las evaluaciones');
        }
    }
    async deleteEvaluation(res, id) {
        try{
            const evaluation = await Evaluation.findByIdAndDelete(id);
            res.status(200).send('La evaluación ha sido eliminada');
        } catch(err){
            console.error(err);
            res.status(500).send('Ocurrió un error al eliminar la evaluación con el id: ' + id);
        }
    }
}
exports.controllerEvaluation = new ControllerEvaluation();