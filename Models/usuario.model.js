const { Schema, model } = require("mongoose");
const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, "el nombre es obligatorio"],
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

module.exports = model("usuario", UsuarioSchema);
