const express = require("express");
const app = express();
const { controller } = require("./controller");

app.get("/", (req,res)=>{
    res.send("hola mundo");
});

app.get("/users",(req, res)=>{
  /*  let users = [
        { name: "juan",  password:"1234"},
        {name: "ana",  password:"abcd"}
    ]

    res.send(users);
    */
   controller.getUsers(res);
})


app.get("/actividades",(req, res)=>{
    
     controller.getActividades(res);
  })


  app.get("/contenidos",(req, res)=>{
    
    controller.getContenidos(res);
 })


 app.get("/notas",(req, res)=>{
    
    controller.getNotas(res);
 })


 app.get("/tipouser",(req, res)=>{
    
    controller.getTipoUser(res);
 })
exports.app = app;