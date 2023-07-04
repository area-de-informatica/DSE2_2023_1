const mongoose = require("mongoose");
const User = require("./models/users");
const Actividades = require("./models/actividades");
const Contenidos = require("./models/contenidos");
const Notas = require("./models/notas");
const TipoUsuarios = require("./models/tipousuarios");

class Controller {
  constructor() {
    this.connect();
  }

  async connect() {
    try {
      await mongoose.connect(
        "mongodb://Jlopez:adminpass@ac-bvm39ix-shard-00-00.xrciznj.mongodb.net:27017,ac-bvm39ix-shard-00-01.xrciznj.mongodb.net:27017,ac-bvm39ix-shard-00-02.xrciznj.mongodb.net:27017/edusex?ssl=true&replicaSet=atlas-13t6y8-shard-0&authSource=admin&retryWrites=true&w=majority",
        { useNewUrlParser: true }
      );
      console.log("Conectado a la base de datos");
    } catch (error) {
      console.error(error);
    }
  }

  // Método para obtener todos los usuarios
  async getUsers(res) {
    try {
      const users = await User.find({}).exec();
      res.send(users);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // Método para obtener un usuario por su id
  async getUserById(res, id) {
    try {
      const user = await User.findById(id).exec();
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send(`Ocurrió un error al obtener el usuario con el id: ${id}`);
    }
  }

  // Método para crear un nuevo usuario
  async createUser(res, body) {
    try {
      const user = new User(body);
      await user.save();
      res.send("Usuario creado exitosamente");
    } catch (error) {
      console.error(error);
      res.send("Ocurrió un error al crear el usuario");
    }
  }

  // Método para eliminar todos los usuarios
  async deleteAllUsers(res) {
    try {
      await User.deleteMany({});
      res.status(200).send("Todos los usuarios han sido eliminados");
    } catch (error) {
      console.error(error);
      res.status(500).send("Ocurrió un error al eliminar los usuarios");
    }
  }

  // Método para eliminar un usuario por su ID
  async deleteUserById(res, id) {
    try {
      await User.findByIdAndDelete(id);
      res.status(200).send("El usuario ha sido eliminado");
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send("Ocurrió un error al eliminar el usuario con el id: " + id);
    }
  }

  // Método para actualizar un usuario por su ID
  async updateUser(res, id, body) {
    try {
      await User.findByIdAndUpdate(id, body);
      res.status(200).send("Usuario actualizado exitosamente");
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send("Ocurrió un error al actualizar el usuario con el id: " + id);
    }
  }


//_________________________________________________________________


  // Método para obtener todas las actividades
  async getActividades(res) {
    try {
      const actividades = await Actividades.find({}).exec();
      res.send(actividades);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // Método para obtener todos los contenidos
 
  async getContenidos(res) {
    try {
      const contenidos = await Contenidos.find({}).exec();
      res.send(contenidos);
    } catch (error) {
      console.error(error);
      res.status(500).send("Ocurrió un error al obtener los contenidos");
    }
  }
  
  async setContenidos(contenidos, res) {
    try {
      const contenido = new Contenidos(contenidos);
      await contenido.save();
      res.send("Contenido creado exitosamente");
    } catch (error) {
      console.error(error);
      res.send("Ocurrió un error al crear el contenido");
    }
  }
  
  async getContenidosById(id, res) {
    try {
      const contenido = await Contenidos.findById(id).exec();
      res.send(contenido);
    } catch (error) {
      console.error(error);
      res.status(500).send("Ocurrió un error al obtener el contenido con el ID: " + id);
    }
  }
  
  async updateContenidosById(id, contenidos, res) {
    try {
      await Contenidos.findByIdAndUpdate(id, contenidos);
      res.send("Contenido actualizado exitosamente");
    } catch (error) {
      console.error(error);
      res.status(500).send("Ocurrió un error al actualizar el contenido con el ID: " + id);
    }
  }
  
  async deleteContenidosById(id, res) {
    try {
      await Contenidos.findByIdAndDelete(id);
      res.send("El contenido ha sido eliminado");
    } catch (error) {
      console.error(error);
      res.status(500).send("Ocurrió un error al eliminar el contenido con el ID: " + id);
    }
  }
  

  
  //___________________________________________



  // Método para obtener todas las notas
  async getNotas(res) {
    try {
      const notas = await Notas.find({}).exec();
      res.send(notas);
    } catch (error) {
      console.error(error);
      res.status(500).send("Ocurrió un error al obtener las notas");
    }
  }

  // Método para agregar una nota
  async setNotas(notas, res) {
    try {
      const nota = new Notas(notas);
      await nota.save();
      res.send("Nota creada exitosamente");
    } catch (error) {
      console.error(error);
      res.send("Ocurrió un error al crear la nota");
    }
  }

  // Método para obtener una nota por su ID
  async getNotaById(id, res) {
    try {
      const nota = await Notas.findById(id).exec();
      res.send(nota);
    } catch (error) {
      console.error(error);
      res.status(500).send("Ocurrió un error al obtener la nota con el ID: " + id);
    }
  }

  // Método para actualizar una nota por su ID
  async updateNotaById(id, notas, res) {
    try {
      notas.id = id;
      await Notas.findByIdAndUpdate(id, notas);
      res.send("Nota actualizada exitosamente");
    } catch (error) {
      console.error(error);
      res.status(500).send("Ocurrió un error al actualizar la nota con el ID: " + id);
    }
  }

 // Método para eliminar una nota por su ID
async deleteNotaById(id, res) {
  try {
    await Notas.findByIdAndDelete(id);
    res.send("La nota ha sido eliminada");
  } catch (error) {
    console.error(error);
    res.status(500).send("Ocurrió un error al eliminar la nota con el ID: " + id);
  }
}

//____________________________________________

  // Método para obtener todos los tipos de usuarios
  async getTipoUsuarios(res) {
    try {
      const tipoUsuarios = await TipoUsuarios.find({}).exec();
      res.send(tipoUsuarios);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getTipoUsuarios(res) {
    try {
      const tipoUsuarios = await TipoUsuarios.find({}).exec();
      res.send(tipoUsuarios);
    } catch (error) {
      console.error(error);
      res.status(500).send("Ocurrió un error al obtener los tipos de usuarios");
    }
  }

  async setTipoUsuarios(tipousuarios, res) {
    try {
      const tipoUsuario = new TipoUsuarios(tipousuarios);
      await tipoUsuario.save();
      res.send("Tipo de usuario creado exitosamente");
    } catch (error) {
      console.error(error);
      res.send("Ocurrió un error al crear el tipo de usuario");
    }
  }

  async getTipoUsuariosById(id, res) {
    try {
      const tipoUsuario = await TipoUsuarios.findById(id).exec();
      res.send(tipoUsuario);
    } catch (error) {
      console.error(error);
      res.status(500).send("Ocurrió un error al obtener el tipo de usuario con el ID: " + id);
    }
  }

  async setTipoUsuarios(res, body) {
    try {
      const tipoUsuario = new TipoUsuarios(body);
      await tipoUsuario.save();
      res.send("Tipo de usuario creado exitosamente");
    } catch (error) {
      console.error(error);
      res.send("Ocurrió un error al crear el tipo de usuario");
    }
  }
  

  async deleteTipoUsuariosById(id, res) {
    try {
      await TipoUsuarios.findByIdAndDelete(id);
      res.send("El tipo de usuario ha sido eliminado");
    } catch (error) {
      console.error(error);
      res.status(500).send("Ocurrió un error al eliminar el tipo de usuario con el ID: " + id);
    }
  }

}

exports.controller = new Controller();
