const express = require("express");
const cors = require("cors");
const { dbConnection }=require('../database/config.db')

const fileUpload = require('express-fileupload');
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.ConnectDb();
    this.middlewares();
    this.rutas();
  }

  //conectar a la base de datos
  async ConnectDb(){
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

    
        // Fileupload - Carga de archivos
        this.app.use( fileUpload({
          useTempFiles : true,
          tempFileDir : '/tmp/',
          createParentPath: true
      }));

  }

  //Rutas

  rutas() {
    this.app.use("/user", require("../Routes/usuarios.routes"));
    this.app.use("/auth", require("../Routes/auth.routes"));
    this.app.use("/productos", require('../Routes/productos.routes'));


    this.app.use( "/buscar", require('../Routes/buscar.routes'));
    this.app.use( "/categorias", require('../Routes/categorias.routes'));

    this.app.use( "/uploads", require('../Routes/upload.routes.js'));
}
  //Listen

  listen() {
    this.app.listen(this.port);
  }
}

module.exports = Server;
