const express = require("express");
const app = express();
const { controller } = require("./controller");

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/users", (req, res) => {
  controller.getUsers(res);
});

app.get("/actividades", (req, res) => {
  controller.getActividades(res);
});

app.get("/contenidos", (req, res) => {
  controller.getContenidos(res);
});

app.get("/notas", (req, res) => {
  controller.getNotas(res);
});

app.get("/tipousuarios", (req, res) => {
  controller.getTipoUsuarios(res);
});

exports.app = app;
