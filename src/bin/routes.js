const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { controller } = require("./controller");

app.use(bodyParser.json());


//Pagina principal
app.get("/", (req, res)  =>  {
  res.send("Edusex");
});

//Traer todos los usuarios
app.get("/users", (req, res) => {
  controller.getUsers(res);
});


// Obtener un usuario por su id
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  controller.getUserById(res, id);
});


//Borrar todos los usuarios
app.delete('/users', (req, res) => {
  controller.deleteAllUsers(res);
});

//Crear un usuario
app.post('/users', (req, res) => {
  controller.createUser(res, req.body);
});

//Borrar un usuario por su id
app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  controller.deleteUserById(res, id);
});

//Actualizar un usuario
app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  controller.updateUser(res, id, req.body);
});



//________________________________________________________________


//Traer todos las actividades
app.get("/actividades", (req, res) => {
  controller.getActividades(res);
});


//Agregar una actividad
app.post("/actividades", function(req, res) {
  let { actividades } = req.body;
  console.log(req.body);
  controller.setActividades(actividades, res);
});

//Traer una actividades por su id
app.get("/actividades/:id", function(req, res) {
  let { id } = req.params;
  controller.getActividades(id, res);
});
// acualizar actividades por Id
app.put("/actividades/:id", function(req, res){
  let actividades = req.body.actividades;
  actividades.id = req.params.id;
  controller.updateActividades(actividades, res);
});

//Eliminar una actividades por su id
app.delete("/actividades/:id", function(req, res){
  let { id } = req.params;
   req.params.id;
   controller.deleteActividades(id, res);
});

//___________________________________________________________



//traer todos los contenidos
app.get("/contenidos", (req, res) => {
  controller.getContenidos(res);
});

//Agregar un nuevo contenido
app.post("/contenidos", function(req, res) {
  let { contenidos } = req.body;
  console.log(req.body);
  controller.setContenidos(contenidos, res);
});

//Traer un contenido por su id
app.get("/contenidos/:id", function(req, res) {
  let { id } = req.params;
  controller.getContenidos(id, res);
});
// acualizar un contenido por Id
app.put("/contenidos/:id", function(req, res){
  let contenidos = req.body.contenidos;
  contenidos.id = req.params.id;
  controller.updateContenidos(contenidos, res);
});

//Eliminar un contenido por su id
app.delete("/contenidos/:id", function(req, res){
  let { id } = req.params;
   req.params.id;
   controller.deleteContenidos(id, res);
});

//___________________________________________________________


//traer todas las notas
app.get("/notas", (req, res) => {
  controller.getNotas(res);
});

//Agregar una nota
app.post("/notas", function(req, res) {
  let { notas } = req.body;
  console.log(req.body);
  controller.setNotas(notas, res);
});

//Traer una nota por su id
app.get("/notas/:id", function(req, res) {
  let { id } = req.params;
  controller.getNotas(id, res);
});
// acualizar notas por Id
app.put("/notas/:id", function(req, res){
  let notas = req.body.notas;
  notas.id = req.params.id;
  controller.updateNotas(notas, res);
});

//Eliminar una nota por su id
app.delete("/notas/:id", function(req, res){
  let { id } = req.params;
  controller.deleteNotaById(id, res);
});


//___________________________________________________________


//traer todos los tipos de usuarios
app.get("/tipousuarios", (req, res) => {
  controller.getTipoUsuarios(res);
});

//Agregar un tipo de usuario
app.post("/tipousuarios", function(req, res) {
  let tipousuarios = req.body;  // No uses la desestructuración aquí
  console.log(req.body);
  controller.setTipoUsuarios(tipousuarios, res);
});


//Traer un tipo de usuario por su id
app.get("/tipousuarios/:id", function(req, res) {
  let { id } = req.params;
  controller.getTipoUsuarios(id, res);
});
// acualizar un tipo de usuario por Id
app.put("/tipousuarios/:id", function(req, res){
  let tipousuarios = req.body.tipousuarios;
  tipousuarios.id = req.params.id;
  controller.updateTipoUsuarios(tipousuarios, res);
});

//Eliminar una tipo de usuario por su id
app.delete("/tipousuarios/:id", function(req, res){
  let { id } = req.params;
   req.params.id;
   controller.deleteTipoUsuarios(id, res);
});



exports.app = app;
