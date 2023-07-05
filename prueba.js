const express = require('express');
const app = express();
const users = require('../data.json');
const port = 3000;

// App.use para que el servidor pueda leer el archivo data.json
app.use(express.json());

// Método GET con un texto plano
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Método GET con un objeto JSON
app.get('/local-users', (req, res) => {
  res.json(users);
});

// Método GET para obtener un usuario por su id
app.get('/local-users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find(user => user.id == id);
  if (!user) {
    res.status(404).send('No se puede mostrar el usuario con el id: ' + id + ' porque no existe');
  } else {
    res.json(user);
  }
});

// Método POST para crear un nuevo usuario
app.post('/local-users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json(newUser);
});

// Método PUT para actualizar un usuario
app.put('/local-users/:id', (req, res) => {
  const id = req.params.id;
  const updateUser = req.body;
  const index = users.findIndex(user => user.id == id);
  if (index === -1) {
    res.status(404).send('El id ' + id + ' de este usuario no fue encontrado o no existe');
  } else {
    users[index] = updateUser;
    res.json(updateUser);
  }
});

// Método DELETE para eliminar un usuario
app.delete('/local-users/:id', (req, res) => {
  const id = req.params.id;
  const index = users.findIndex(user => user.id == id);
  if (index === -1) {
    res.status(404).send('No se puede borrar el usuario con el id: ' + id + ' porque ya fue eliminado o no existe');
  } else {
    const deletedUser = users.splice(index, 1);
    res.json(deletedUser[0]);
  }
});

// Listen para que el servidor escuche en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`);
});
