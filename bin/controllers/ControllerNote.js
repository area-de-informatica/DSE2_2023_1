const mongoose = require('mongoose');
const Note = require('../models/Note');
class ControllerNote {
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
    async getNotes(res) {
        try {
            const notes = await Note.find({});
            res.status(200).send(notes);
        } catch (err) {
            console.error(err);
            res.status(500).send('Ocurrió un error al obtener las notas');
        }
    }
    async getNoteById(res, id) {
        try {
            const note = await Note.findById(id);
            res.status(200).send(note);
        } catch (err) {
            console.error(err);
            res.status(500).send('Ocurrió un error al obtener la nota con el id: ' + id);
        }
    }
    async deleteNotes(res) {
        try {
            const notes = await Note.deleteMany({});
            res.status(200).send('Todas las notas han sido eliminadas');
        } catch (err) {
            console.error(err);
            res.status(500).send('Ocurrió un error al eliminar las notas');
        }
    }
    async deleteNoteById(res, id) {
        try {
            const note = await Note.findByIdAndDelete(id);
            res.status(200).send('La nota con el id ' + id + ' ha sido eliminada');
        } catch (err) {
            console.error(err);
            res.status(500).send('Ocurrió un error al eliminar la nota con el id: ' + id);
        }
    }
    async createNote(res, note) {
        try {
            const newNote = await Note.create(note);
            res.status(200).send(newNote);
        } catch (err) {
            console.error(err);
            res.status(500).send('Ocurrió un error al crear la nota');
        }
    }
    async updateNoteById(res, id, body) {
        try{
            const note= await Note.findByIdAndUpdate(id, body);
            res.status(200).send('La nota con el id ' + id + ' ha sido actualizada');

        }
        catch(err){
            console.error(err);
            res.status(500).send('Ocurrió un error al actualizar la nota con el id: ' + id);
        }
    }
}
exports.controllerNote = new ControllerNote();
