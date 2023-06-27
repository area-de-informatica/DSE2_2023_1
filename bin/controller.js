const mongoose = require("mongoose");
const User = require("./models/users");

class controller{
    constructor(){
        this.connect();
    }
  async  connect(){
try{
    await mongoose.connect(
      "mongodb://Jlopez:adminpass@ac-bvm39ix-shard-00-00.xrciznj.mongodb.net:27017,ac-bvm39ix-shard-00-01.xrciznj.mongodb.net:27017,ac-bvm39ix-shard-00-02.xrciznj.mongodb.net:27017/edusex?ssl=true&replicaSet=atlas-13t6y8-shard-0&authSource=admin&retryWrites=true&w=majority",
         
         {useNewUrlParser:true}
    );
    console.log("conectados a la base de datos");

        

    }catch(e){
        console.error(e)
}
    }

  async  getUsers(res) {
      
   
    User.find({}, (err, users) => {
          if (err) {
            throw err;
          }
    
          res.send(users);
        });
      }
      
}

exports.controller = new controller();