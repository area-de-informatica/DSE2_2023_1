const express = require("express");
const app = express();// paquete  modulo de servicio
// programacion rutas amigable 1

app.get("/",(req, res)=>{
    res.send("Hola Mundo o lo que tu quieras");
});
//segunda ruta
app.get("/comments",(req,res)=>{
    let comments = [{
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      },
      {
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
      },
      {
        "postId": 1,
        "id": 3,
        "name": "odio adipisci rerum aut animi",
        "email": "Nikita@garfield.biz",
        "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
      }];
      res.send(comments);
})


//para bajar el servidor se utiliza ctrl+C
// para montar el servidor  node src/index.js
//Iniciar servidos
app.listen(3030,()=> {
    console.log("servidor en el puerto http://localhost:3030");
    }
);