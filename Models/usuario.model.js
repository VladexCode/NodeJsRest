const { Schema, model } = require("mongoose");
const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, "el nombre es obligatorio"],
  },
  correo:{
      type:String,
      required :[true,'l correo es obligatorio'],
      unique:true
  },
  password: {
    type: String,
    required: [true, "el password es obligatorio"],
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    required: true,
    enum: ["ADMIN", "USER"],
  },
  estado: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

UsuarioSchema.methods.toJSON = function() {
    const { __v, password, ...usuario  } = this.toObject();
    return usuario;
}

module.exports = model("usuario", UsuarioSchema);
