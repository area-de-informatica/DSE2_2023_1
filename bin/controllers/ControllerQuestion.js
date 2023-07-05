const mongoose = require('mongoose');
const question = require('../models/Question');
const Question = require('../models/Question');
class ControllerQuestion {
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
    async getQuestions(res) {
        try{
            const questions = await Question.find({});
            res.status(200).send(questions);
        } catch(err){
            console.error(err);
            res.status(500).send('Ocurrió un error al obtener las preguntas');
        }
    }
    async getQuestion(res, id) {
        try{
            const question = await Question.findById(id);
            res.status(200).send(question);
        } catch(err){
            console.error(err);
            res.status(500).send('Ocurrió un error al obtener la pregunta con el id: ' + id);
        }
    }
        async createQuestion(res, body) {
            try{
                const question = new Question(body);
                await question.save();
                res.status(200).send('Pregunta creada exitosamente');
            }
            catch(err){
                console.error(err);
                res.status(500).send('Ocurrió un error al crear la pregunta');
            }
}
    async deleteQuestions(res, id, body) {
        try{
            const questions = await questions.deleteMany({});
            res.status(200).send('Todas las preguntas han sido eliminadas');
        }
        catch(err){
            console.error(err);
            res.status(500).send('Ocurrió un error al eliminar las preguntas');
        }
    }
    async deleteQuestions(res, id) {
        try{
                const questions = await Question.findByIdAndDelete(id);
                res.status(200).send('Pregunta eliminada exitosamente');
            }
            catch(err){
                console.error(err);
                res.status(500).send('Ocurrió un error al eliminar la pregunta con el id: ' + id);
            }
        }
    async updateQuestion(res, id, body) {
        const questions = await Question.findByIdAndUpdate(id, body);
        res.status(200).send('Pregunta actualizada exitosamente');
        } catch(err){
            console.error(err);
            res.status(500).send('Ocurrió un error al actualizar la pregunta con el id: ' + id);
        }

    }
exports.controllerQuestion = new ControllerQuestion();
