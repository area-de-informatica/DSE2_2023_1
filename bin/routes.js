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

exports.app = app;