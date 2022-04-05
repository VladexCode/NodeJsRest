const { response } = require("express");
const { request } = require("express");
const bcryptjs = require("bcryptjs");
const usuarioModel = require("../Models/usuario.model");

const UsuariosGet = async function (req, res) {
  //const query = req.query;

  const { limite = 2, desde = 0 } = req.query;
  const query = { estado: true };

  const [total, usuarios] = await Promise.all([
    usuarioModel.countDocuments(query),
    usuarioModel.find(query).skip(Number(desde)).limit(Number(limite)),
  ]);

  res.status(201).json({
    total,
    usuarios,
  });
};

const UsuariosPost = async function (req = request, res = response) {
  const { password, correo, ...resto } = req.body;
  const Usuario = new usuarioModel({ password, ...resto });

  //encriptar password
  const salt = bcryptjs.genSaltSync(11);
  Usuario.password = bcryptjs.hashSync(password, salt);

  //verificamos si existe el email
  const existeEmail = usuarioModel.findOne({ correo });

  //agregamos el registro en la db
  await Usuario.save();
  res.status(201).json({
    msg: "registrado correctamente",
    Usuario,
  });
};

const UsuariosDelete = async function (req, res) {
  //res.send("delete World");

  const { id } = req.params;

  // Fisicamente lo borramos
  // const usuario = await Usuario.findByIdAndDelete( id );

  const usuario = await usuarioModel.findByIdAndUpdate(id, { estado: false });

  res.json(usuario);
};

const UsuariosPut = async function (req, res) {

  const { id } = req.params;
  const { _id, password, google, correo, ...resto } = req.body;

  if (password) {
    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const usuario = await usuarioModel.findByIdAndUpdate(id, resto);

  res.json({
    usuario,
  });
};


const UsuariosPatch = function (req, res) {
  res.send("patch World");
};

module.exports = {
  UsuariosGet: UsuariosGet,
  UsuariosPost,
  UsuariosDelete,
  UsuariosPut,
  UsuariosPatch,
};
