const { response } = require("express");
const { request } = require("express");
const usuarioModel = require("../Models/usuario.model");
//const Usuario = require('../Models/usuario.model');

const UsuariosGet = function (req, res) {
  const query = req.query;
  const { a, b, c = "ninguna opcion" } = req.query;
  res.status(201).json({ v: "ok", a, b, c });
};

const UsuariosPost = async function (req = request, res = response) {
  //const body=req.body;
  /*const { edad, nombre } = req.body;
  res.json({
    ok: true,
    valor: "positivo",
    edad,
    nombre,
    //body
  });*/

  const body = req.body;
  const Usuario = new usuarioModel(body);
  //agregamos el registro en la db
  await Usuario.save();
  res.status(201).json({
    msg: "registrado correectamente",
    Usuario,
  });
};
const UsuariosDelete = function (req, res) {
  res.send("delete World");
};
const UsuariosPut = function (req, res) {
  const { id } = req.params;
  res.json({ msg: "put", id });
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
