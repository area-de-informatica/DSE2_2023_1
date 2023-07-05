const express = require('express')
const app = express()

//Importar el archivo controller.js
const { controllerUser } = require('./controllers/ControllerUsers')
const { controllerContent } = require('./controllers/ControllerContents')
const { controllerEvaluation } = require('./controllers/ControllerEvaluations')
const { controllerActivity } = require('./controllers/ControllerActivities')
const { controllerNote } = require('./controllers/ControllerNote')
const { controllerProgress } = require('./controllers/ControllerProgress')
const { controllerEvaluationData } = require('./controllers/ControllerEvaluationData')
const { controllerQuestion } = require('./controllers/ControllerQuestion')
//Importar el archivo data.json
const users = require('../data.json')

//App.use para que el servidor pueda leer el archivo data.json
app.use(express.json());

//Métdodo GET con un texto plano
app.get('/', (req, res) => {
  res.send('Bienvenido a mi API')
})




//Local routes

//Método GET con un objeto JSON
app.get('/local-users', (req, res) => {
  res.json(users)
})
//Método GET para obtener un usuario por su id
app.get('/local-users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find(user => user.id == id);
  if (!user) res.status(404).send('No se puede mostrar el usuario con el id: ' + id + ' porque no existe');
  res.json(user)
});
//Método POST para crear un nuevo usuario
app.post('/local-users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json(newUser);
});
//Método PUT para actualizar un usuario
app.put('/local-users/:id', (req, res) => {
  const updateUser = req.body;
  users.push(updateUser);
  if (!user) res.status(404).send('El id ' + id + ' de este usuario no fe encontrado o no existe');
  res.json(updateUser);
});
//Método DELETE para eliminar un usuario
app.delete('/local-users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find(user => user.id == id);
  users.pop(user);
  if (!user) res.status(404).send('No se puede borrar el usuario con el id: ' + id + ' porque ya fue eliminado o no existe');
  res.json(user);
});


//MongoDB routes


//USUARIOS
//Obtener todos los usuarios
app.get('/users', (req, res) => {
  controllerUser.getUsers(res);
});
//Obtener un usuario por su id
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  controllerUser.getUser(res, id);
});

//Borrar todos los usuarios
app.delete('/users', (req, res) => {
  controllerUser.deleteUsers(res);
});

//Crear un usuario
app.post('/users', (req, res) => {
  controllerUser.createUser(res, req.body);
});

//Borrar un usuario por su id
app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  controllerUser.deleteUser(res, id);
});

//Actualizar un usuario
app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  controllerUser.updateUser(res, id, req.body);
});

//CONTENIDOS

//Obtener todos los contenidos
app.get('/content', (req, res) => {
  controllerContent.getContents(res);
});
// Obtener un contenido por su id
app.get('/content/:id', (req, res) => {
  const id = req.params.id;
  controllerContent.getContent(res, id);
});
// Eliminar un contenido por su id
app.delete('/content/:id', (req, res) => {
  const id = req.params.id;
  controllerContent.deleteContent(res, id);
});
// Eliminar todos los contenidos
app.delete('/content', (req, res) => {
  controllerContent.deleteContents(res);
});
// Crear un contenido
app.post('/content', (req, res) => {
  controllerContent.createContent(res, req.body);
});
// Actualizar un contenido
app.put('/content/:id', (req, res) => {
  const id = req.params.id;
  controllerContent.updateContent(res, id, req.body);
});

//EVALUACIONES

//Obtener todas las evaluaciones
app.get('/evaluation', (req, res) => {
  controllerEvaluation.getEvaluations(res);
});
// Obtener una evaluacion por su id
app.get('/evaluation/:id', (req, res) => {
  const id = req.params.id;
  controllerEvaluation.getEvaluation(res, id);
});
// Eliminar una evaluacion por su id
app.delete('/evaluation/:id', (req, res) => {
  const id = req.params.id;
  controllerEvaluation.deleteEvaluation(res, id);
});
// Eliminar todas las evaluaciones
app.delete('/evaluation', (req, res) => {
  controllerEvaluation.deleteEvaluations(res);
});
// Crear una evaluacion
app.post('/evaluation', (req, res) => {
  controllerEvaluation.createEvaluation(res, req.body);
});
// Actualizar una evaluacion
app.put('/evaluation/:id', (req, res) => {
  const id = req.params.id;
  controllerEvaluation.updateEvaluation(res, id, req.body);
});

//ACTIVIDADES

//Obtener todas las actividades
app.get('/activity', (req, res) => {
  controllerActivity.getActivities(res);
});
// Obtener una actividad por su id
app.get('/activity/:id', (req, res) => {
  const id = req.params.id;
  controllerActivity.getActivity(res, id);
});
// Eliminar una actividad por su id
app.delete('/activity/:id', (req, res) => {
  const id = req.params.id;
  controllerActivity.deleteActivity(res, id);
});
// Eliminar todas las actividades
app.delete('/activity', (req, res) => {
  controllerActivity.deleteActivities(res);
});
// Crear una actividad
app.post('/activity', (req, res) => {
  controllerActivity.createActivity(res, req.body);
});
// Actualizar una actividad
app.put('/activity/:id', (req, res) => {
  const id = req.params.id;
  controllerActivity.updateActivity(res, id, req.body);
});
app.get('/notes', (req, res) => {
  controllerNote.getNotes(res);
  });
  // Obtener una nota por su id
  app.get('/notes/:id', (req, res) => {
  const id = req.params.id;
  controllerNote.getNoteById(res, id);
  });
  // Eliminar una nota por su id  
  app.delete('/notes/:id', (req, res) => {
  const id = req.params.id;
  controllerNote.deleteNoteById(res, id);
  });
  // Eliminar todas las notas
  app.delete('/notes', (req, res) => {
  controllerNote.deleteNotes(res);
  });
  // Crear una nota
  app.post('/notes', (req, res) => {
  controllerNote.createNote(res, req.body);
  });
  // Actualizar una nota
  app.put('/notes/:id', (req, res) => {
  const id = req.params.id;
  controllerNote.updateNoteById(res, id, req.body);
  });
  app.get('/progress', (req, res) => {
    controllerProgress.getProgress(res);
    });
    // Obtener un progreso por su id
    app.get('/progress/:id', (req, res) => {
    const id = req.params.id;
    controllerProgress.getProgressById(res, id);
    });
    // Eliminar un progreso por su id
    app.delete('/progress/:id', (req, res) => {
    const id = req.params.id;
    controllerProgress.deleteProgressById(res, id);
    });
    // Eliminar todos los progresos
    app.delete('/progress', (req, res) => {
    controllerProgress.deleteProgress(res);
    });
    // Crear un progreso
    app.post('/progress', (req, res) => {
    controllerProgress.createProgress(res, req.body);
    });
    // Actualizar un progreso
    app.put('/progress/:id', (req, res) => {
    const id = req.params.id;
    controllerProgress.updateProgressById(res, id, req.body);
    });

//EVALUATION DATA
    app.get('/evaluationData', (req, res) => {
      controllerEvaluationData.getEvaluationDatas(res);
      });
      // Obtener un dato de evaluación por su id
      app.get('/evaluationData/:id', (req, res) => {
      const id = req.params.id;
      controllerEvaluationData.getEvaluationData(res, id);
      });
      // Eliminar un dato de evaluación por su id
      app.delete('/evaluationData/:id', (req, res) => {
      const id = req.params.id;
      controllerEvaluationData.deleteEvaluationData(res, id);
      });
      // Eliminar todos los datos de evaluación
      app.delete('/evaluationData', (req, res) => {
      controllerEvaluationData.deleteEvaluationDatas(res);
      });
      // Crear un dato de evaluación
      app.post('/evaluationData', (req, res) => {
      controllerEvaluationData.createEvaluationData(res, req.body);
      });
      // Actualizar un dato de evaluación
      app.put('/evaluationData/:id', (req, res) => {
      const id = req.params.id;
      controllerEvaluationData.updateEvaluationData(res, id, req.body);
      });
      //Preguntas
      app.get('/questions', (req, res) => {
        controllerQuestion.getQuestions(res);
        });
        // Obtener una pregunta por su id
        app.get('/questions/:id', (req, res) => {
        const id = req.params.id;
        controllerQuestion.getQuestion(res, id);
        });
        // Eliminar una pregunta por su id
        app.delete('/questions/:id', (req, res) => {
        const id = req.params.id;
        controllerQuestion.deleteQuestion(res, id);
        });
        // Eliminar todas las pregunta
        app.delete('/questions', (req, res) => {
        controllerQuestion.deleteQuestions(res);
        });
        // Crear una pregunta
        app.post('/questions', (req, res) => {
        controllerQuestion.createQuestion(res, req.body);
        });
        // Actualizar una pregunta
        app.put('/questions/:id', (req, res) => {
        const id = req.params.id;
        controllerQuestion.updateQuestion(res, id, req.body);
        });
//Exportar el módulo app
exports.app = app;