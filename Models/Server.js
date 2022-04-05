const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config.db");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.ConnectDb();
    this.middlewares();
    this.rutas();
  }

  //conectar a la base de datos
  async ConnectDb() {
    await dbConnection();
  }

  //Middlewares

  middlewares() {
    //cors
    this.app.use(cors());

    //convertir datos en json
    this.app.use(express.json());

    //directorio publico con express
    this.app.use(express.static("public"));
  }

  //Rutas

  rutas() {
    this.app.use("/user", require("../Routes/usuarios.routes"));
  }
  //Listen

  listen() {
    this.app.listen(this.port);
  }
}

module.exports = Server;
