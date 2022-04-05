const { response } = require("express");
const { request } = require("express");

const UsuariosGet = function (req, res) {
  res.status(404).send("Hello World");
};

const UsuariosPost = function (req = request, res = response) {
  //const body=req.body;
  const { edad, nombre } = req.body;
  res.json({
    ok: true,
    valor: "positivo",
    edad,
    nombre,
    //body
  });
};
const UsuariosDelete = function (req, res) {
  res.send("delete World");
};
const UsuariosPut = function (req, res) {
  res.send("put World");
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
