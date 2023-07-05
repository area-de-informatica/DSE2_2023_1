const mongoose = require('mongoose');
const Activity = require('../models/Activity');

class controllerActivity {
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
async getActivities(res) {
    try{
        const activities = await Activity.find({});
        res.status(200).send(activities);
    } catch(err){
        console.error(err);
        res.status(500).send('Ocurrió un error al obtener las actividades');
    }
}
async getActivity(res, id) {
    try {
     const activities = await Activity.findById(id);
     res.status(200).send(activities);
    } catch(err){
         console.error(err);
         res.status(500).send('Ocurrió un error al obtener la actividad con el id: ' + id);
    }
}
async createActivity(res, body) {
    try{
        const activities = new Activity(body);
        await activities.save();
        res.status(200).send('Actividad creada exitosamente');
    } catch(err){
        console.error(err);
        res.status(500).send('Ocurrió un error al crear la actividad');
    }
}
async updateActivity(res, id, body) {
    try{
        const activities = await Activity.findByIdAndUpdate(id, body);
        res.status(200).send('Actividad actualizada exitosamente');
    }catch(err){
        console.error(err);
        res.status(500).send('Ocurrió un error al actualizar la actividad con el id: ' + id);
    }
}
async deleteActivities(res) {
    try{
        const activities = await Activity.deleteMany({});
        res.status(200).send('Todas las actividades han sido eliminadas');
    } catch(err){
        console.error(err);
        res.status(500).send('Ocurrió un error al eliminar las actividades');
    }
}
async deleteActivity(res, id) {
    try{
        const activities = await Activity.findByIdAndDelete(id);
        res.status(200).send('Actividad eliminada exitosamente');
    } catch(err){
        console.error(err);
        res.status(500).send('Ocurrió un error al eliminar la actividad con el id: ' + id);
    }
}

}
exports.controllerActivity = new controllerActivity();