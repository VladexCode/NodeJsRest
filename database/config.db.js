const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/crudBasico"
      //opciones de obsolescencia
      //en version de mongoose 6 ya viene con esas configuraciones
      /*, {
       useNewUrlParser: true,
           useUnifiedTopology: true,
            useCreateIndex:true,
           useFindAndModify: false
    }*/
    );
    console.log("conectado");
  } catch (error) {
    throw new Error("error en la conexion con la db");
  }
};

module.exports = { dbConnection };
